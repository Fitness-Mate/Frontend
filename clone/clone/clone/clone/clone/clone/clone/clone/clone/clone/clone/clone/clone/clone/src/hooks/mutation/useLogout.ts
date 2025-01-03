import { useNavigate } from "react-router-dom"

import { useUserStore } from "@store/useUserStore"

import { useMutation } from "@tanstack/react-query"

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
      navigate("/")
    },
  })
}
