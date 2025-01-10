import { useNavigate } from "react-router-dom"

import { useUserStore } from "@store/useUserStore"

import { useMutation } from "@tanstack/react-query"

import { Toast } from "@components/Toast/Toast"

import authAPI from "@apis/domain/auth"

import { SignupPayload } from "@typpes/type"

import { CustomError } from "../../apis/instance"

export const usePostSignup = () => {
  const navigate = useNavigate()
  const { saveUser } = useUserStore()
  return useMutation({
    mutationKey: ["usePostSignup"],
    mutationFn: async (submission: SignupPayload) =>
      await authAPI.postUser(submission),
    onSuccess: async (data) => {
      if (!data.data) {
        return
      }
      const { accessToken, refreshToken, rememberMe } = data.data
      authAPI.fetchUser().then((res) => {
        saveUser(res)
      })
      localStorage.setItem("accessToken", accessToken)
      localStorage.setItem("refreshToken", refreshToken)
      localStorage.setItem("rememberMe", rememberMe.toString())
      navigate("/signup/complete")
      Toast.success("회원가입에 성공했습니다.")
    },

    onError: (error: CustomError) => {
      if (error.response?.data?.statusMessage) {
        Toast.error(error.response?.data?.statusMessage)
      } else {
        Toast.error(error.response?.data)
      }
    },
  })
}
