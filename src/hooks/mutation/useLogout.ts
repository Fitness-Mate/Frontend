import { useNavigate } from "react-router-dom"

import { useUserStore } from "@store/useUserStore"

import { useMutation } from "@tanstack/react-query"

import { Toast } from "@components/Toast/Toast"

import authAPI from "@apis/domain/auth"

export const useLogout = () => {
  const { logout } = useUserStore()
  const navigate = useNavigate()

  return useMutation({
    mutationKey: [],
    mutationFn: () => authAPI.logout(),
    onSuccess: () => {
      logout()
      localStorage.removeItem("accessToken")
      localStorage.removeItem("refreshToken")
      localStorage.removeItem("rememberMe")
      Toast.success("로그아웃에 성공했습니다.")
      navigate("/")
    },
    onError: () => {
      Toast.error("로그아웃에 실패했습니다.")
    },
  })
}
