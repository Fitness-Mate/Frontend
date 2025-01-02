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
      Toast.success("회원정보를 성공적으로 변경했습니다.")
    },
    onError: () => {
      Toast.error("회원정보를 변경하는데 실패했습니다.")
    },
  })
}
