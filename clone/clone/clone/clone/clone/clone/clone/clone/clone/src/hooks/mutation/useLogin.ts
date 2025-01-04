import { UseFormSetError } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { useUserStore } from "@store/useUserStore"

import { useMutation } from "@tanstack/react-query"

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
        navigate("/")
      } else {
        if (setError) {
          setError("root", {
            type: "server",
            message: "이메일 또는 비밀번호를 잘못 입력했습니다",
          })
        }
      }
    },
    onError: () => {
      if (setError) {
        setError("root", {
          type: "server",
          message: "이메일 또는 비밀번호를 잘못 입력했습니다",
        })
      }
    },
  })
}

// 로그인 => 로그인 요청 api 호출
// 성공 -> 유저패칭훅(accesstoken으로 api 호출하고 전역에 유저정보랑 로그인 상태 담음)
// 실패 -> form 에러
