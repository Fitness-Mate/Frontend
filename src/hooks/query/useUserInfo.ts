import { useQuery } from "@tanstack/react-query"

import authAPI, { fetchUserProps } from "../../apis/domain/auth"

export const useUserInfo = () => {
  return useQuery<fetchUserProps>({
    queryKey: ["userInfo"],
    queryFn: async () => await authAPI.fetchUser(),
  })
}
