import { useEffect } from "react"

import { useUserStore } from "@store/useUserStore"

import { useQuery } from "@tanstack/react-query"

import authAPI from "@apis/domain/auth"

export const useGetUserInfo = () => {
  const { isLogin, saveUser, logout } = useUserStore()
  const userInfo = useQuery({
    queryKey: ["USERINFO"],
    queryFn: () => authAPI.fetchUser(),
  })

  useEffect(() => {
    if (userInfo.data) {
      saveUser(userInfo.data)
    } else {
      logout()
    }
  }, [isLogin, saveUser, logout, userInfo.data])

  return { userInfo: userInfo.data }
}
