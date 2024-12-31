import { useNavigate } from "react-router-dom"

import { useUserStore } from "@store/useUserStore"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import authAPI from "@apis/domain/auth"

export const useLogout = () => {
  const { logout } = useUserStore()
  const navigate = useNavigate()

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => authAPI.logout(),
    onSuccess: () => {
      logout()
      localStorage.clear()
      queryClient.clear()
      navigate("/")
    },
  })
}
