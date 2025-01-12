import { useEffect } from "react"

import { queryKey } from "constants/queryKey"
import { useUserStore } from "stores/useUserStore"

import { useQuery } from "@tanstack/react-query"

import authAPI from "@apis/domain/auth"

export const useGetUserInfo = () => {
  const { isLogin, saveUser, logout } = useUserStore()
  const userInfo = useQuery({
    queryKey: [queryKey.GET_USERINFO],
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
