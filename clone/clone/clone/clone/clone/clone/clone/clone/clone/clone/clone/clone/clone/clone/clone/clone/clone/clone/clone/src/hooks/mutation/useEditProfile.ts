import { useUserStore } from "@store/useUserStore"

import { useMutation } from "@tanstack/react-query"

import authAPI from "@apis/domain/auth"

import { EditUserPayload } from "@typpes/type"

export const useEditProfile = () => {
  const { saveUser } = useUserStore()
  return useMutation({
    mutationKey: ["postEditProfile"],
    mutationFn: (req: EditUserPayload) => authAPI.editUser(req),
    onSuccess: () => {
      authAPI.fetchUser().then((res) => saveUser(res))
    },
  })
}
