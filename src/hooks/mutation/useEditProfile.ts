import { mutationKey } from "constants/mutationKey"
import { toastMessage } from "constants/toastMessage"
import { useUserStore } from "stores/useUserStore"

import { useMutation } from "@tanstack/react-query"

import { Toast } from "@components/Toast/Toast"

import authAPI from "@apis/domain/auth"

import { EditUserPayload } from "@typpes/type"

export const useEditProfile = () => {
  const { saveUser } = useUserStore()
  return useMutation({
    mutationKey: [mutationKey.POST_EDIT_PROFILE],
    mutationFn: (req: EditUserPayload) => authAPI.editUser(req),
    onSuccess: () => {
      authAPI.fetchUser().then((res) => saveUser(res))
      Toast.success(toastMessage.SUCCESS.EDIT_PROFILE)
    },
    onError: () => {
      Toast.error(toastMessage.FAIL.EDIT_PROFILE)
    },
  })
}
