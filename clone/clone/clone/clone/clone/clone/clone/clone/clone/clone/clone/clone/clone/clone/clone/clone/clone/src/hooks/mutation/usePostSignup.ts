import { useNavigate } from "react-router-dom"

import { useMutation } from "@tanstack/react-query"

import authAPI from "@apis/domain/auth"

import { SignupPayload } from "@typpes/type"

export const usePostSignup = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationKey: ["usePostSignup"],
    mutationFn: async (submission: SignupPayload) =>
      await authAPI.postUser(submission),
    onSuccess: ({ data: { refreshToken, accessToken, rememberMe } }) => {
      localStorage.setItem("accessToken", accessToken)
      localStorage.setItem("refreshToken", refreshToken)
      localStorage.setItem("rememberMe", rememberMe.toString())
      navigate("/signup/complete")
    },
    onError: () => {
      console.error("회원가입 에러")
    },
  })
}
