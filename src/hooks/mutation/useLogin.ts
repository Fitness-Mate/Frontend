import { UseFormSetError } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { useUserStore } from "@store/useUserStore"

import { useMutation } from "@tanstack/react-query"

import { Toast } from "@components/Toast/Toast"

import authAPI from "@apis/domain/auth"

import { PostLoginPayload } from "@typpes/type"

export const useLogin = (
  setError: UseFormSetError<{ loginEmail: string; password: string }>,
) => {
  const { saveUser } = useUserStore()

  const navigate = useNavigate()
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (submission: PostLoginPayload) => authAPI.login(submission),
    onSuccess: async ({ status, data: { accessToken, refreshToken } }) => {
      if (status === 200) {
        localStorage.setItem("accessToken", accessToken)
        localStorage.setItem("refreshToken", refreshToken)
        localStorage.setItem("rememberMe", "true")

        await authAPI.fetchUser().then((res) => {
          saveUser(res)
        })
        Toast.success("로그인에 성공했어요")
        navigate("/")
      } else {
        if (setError) {
          setError("root", {
            type: "server",
          })
        }
      }
    },
    onError: () => {
      if (setError) {
        setError("root", {
          type: "server",
          message: "다시 로그인해 주세요",
        })
      }
    },
  })
}
