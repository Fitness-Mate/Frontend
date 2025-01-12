import { useNavigate } from "react-router-dom"

import { mutationKey } from "constants/mutationKey"
import { useUserStore } from "stores/useUserStore"

import { useMutation } from "@tanstack/react-query"

import { Toast } from "@components/Toast/Toast"

import authAPI from "@apis/domain/auth"

export const useLogout = () => {
  const { logout } = useUserStore()
  const navigate = useNavigate()

  return useMutation({
    mutationKey: [mutationKey.POST_LOGOUT],
    mutationFn: () => authAPI.logout(),
    onSuccess: () => {
      logout()
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
      localStorage.removeItem("rememberMe")
      navigate("/")
    },
    onError: () => {
      Toast.error("로그아웃이 완료되지 않았어요")
    },
  })
}
