import { useUserStore } from "@store/useUserStore"

import { useMutation } from "@tanstack/react-query"

import { Toast } from "@components/Toast/Toast"

import authAPI from "@apis/domain/auth"

import { EditUserPayload } from "@typpes/type"

export const useEditProfile = () => {
  const { saveUser } = useUserStore()
  return useMutation({
    mutationKey: ["postEditProfile"],
    mutationFn: (req: EditUserPayload) => authAPI.editUser(req),
    onSuccess: () => {
      authAPI.fetchUser().then((res) => saveUser(res))
      Toast.success("회원 정보를 수정했어요")
    },
    onError: () => {
      Toast.error("회원 정보 수정이 완료되지 않았어요")
    },
  })
}
