import axios, { AxiosRequestConfig } from "axios"

import authAPI from "@apis/domain/auth"

const axiosConfig: AxiosRequestConfig = {
  withCredentials: true,
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
    if (error.response.data.status === "ROUTINE_NOT_FOUND_EXCEPTION") {
      console.error("routineId와 일치하는 routine이 없습니다")
    }
    if (error.response.data.status === "ALREADY_EXIST_MY_WORKOUT_EXCEPTION") {
      console.error("이미 존재하는 운동입니다")
    }

    if (error.response.data.status === "ALREADY_LOGOUT_EXCEPTION") {
      console.error("이미 로그인 되었음")
    }

    if (error.response.data.status === "EXPIRED_ACCESS_TOKEN_EXCEPTION") {
      const refreshToken = localStorage.getItem("refreshToken")
      if (!refreshToken) {
        return
      }
      try {
        const originalRequest = error.config
        const response = await authAPI.getAccessToken()

        if (response) {
          const newAccessToken = response.data.accessToken
          localStorage.setItem("accessToken", newAccessToken)
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
          return await axios(originalRequest)
        }
      } catch (err) {
        console.error(err)
      }
    }

    if (error.response.data.status === "EXPIRED_REFRESH_TOKEN_EXCEPTION") {
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
      localStorage.removeItem("rememberMe")
      window.location.href = "/"
    }
  },
)
