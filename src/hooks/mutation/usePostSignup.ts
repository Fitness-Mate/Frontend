import { useNavigate } from "react-router-dom"

import { useUserStore } from "@store/useUserStore"

import { useMutation } from "@tanstack/react-query"

import { Toast } from "@components/Toast/Toast"

import authAPI from "@apis/domain/auth"

import { SignupPayload } from "@typpes/type"

export const usePostSignup = () => {
  const navigate = useNavigate()
  const { saveUser } = useUserStore()
  return useMutation({
    mutationKey: ["usePostSignup"],
    mutationFn: async (submission: SignupPayload) =>
      await authAPI.postUser(submission),
    onSuccess: async ({ data: { refreshToken, accessToken, rememberMe } }) => {
      authAPI.fetchUser().then((res) => {
        saveUser(res)
      })
      localStorage.setItem("accessToken", accessToken)
      localStorage.setItem("refreshToken", refreshToken)
      localStorage.setItem("rememberMe", rememberMe.toString())
      navigate("/signup/complete")
      Toast.success("회원가입에 성공했습니다.")
    },
  })
}
