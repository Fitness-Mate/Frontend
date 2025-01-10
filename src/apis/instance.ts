import axios, { AxiosRequestConfig } from "axios"

import { Toast } from "@components/Toast/Toast"

import authAPI from "@apis/domain/auth"

const axiosConfig: AxiosRequestConfig = {
  withCredentials: true,
}

export interface CustomError extends Error {
  response?: {
    data: any
    status: number
  }
}

export const instance = axios.create(axiosConfig)

instance.interceptors.request.use((config) => {
  if (config.url === "/api/auth/refresh" || config.url === "/api/auth/logout") {
    const refreshToken = localStorage.getItem("refreshToken")
    if (refreshToken) {
      config.headers.Authorization = `Bearer ${refreshToken}`
    }
  } else {
    const accessToken = localStorage.getItem("accessToken")
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
  }
  return config
})

instance.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    // accessToken 만료
    if (error.response.data.status === "EXPIRED_ACCESS_TOKEN_EXCEPTION") {
      const refreshToken = localStorage.getItem("refreshToken")
      if (!refreshToken) {
        return
      }
      const originalRequest = error.config
      const response = await authAPI.getAccessToken()

      if (response) {
        const newAccessToken = response.data.accessToken
        localStorage.setItem("accessToken", newAccessToken)
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
        return await axios(originalRequest)
      }
    } else if (
      error.response.data.status === "EXPIRED_REFRESH_TOKEN_EXCEPTION" ||
      error.response.data.status === "MALFORMED_JWT_EXCEPTION"
    ) {
      Toast.error("로그인 세션이 만료되었습니다. 재 로그인 해주세요.")
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
      localStorage.removeItem("rememberMe")
    } else {
      throw error
    }
  },
)
