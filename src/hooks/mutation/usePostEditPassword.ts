import { mutationKey } from "constants/mutationKey"
import { toastMessage } from "constants/toastMessage"

import { useMutation } from "@tanstack/react-query"

import { Toast } from "@components/Toast/Toast"

import authAPI from "@apis/domain/auth"

import { EditUserPasswordPayload } from "@typpes/type"

export const usePostEditPassword = () => {
  return useMutation({
    mutationKey: [mutationKey.POST_EDIT_PASSWORD],
    mutationFn: (payload: EditUserPasswordPayload) =>
      authAPI.editPassword(payload),
    onSuccess: ({ data: status }) => {
      if (status === "ok") {
        Toast.success(toastMessage.SUCCESS.EDIT_PASSWORD)
      } else if (status === "fail") {
        Toast.error(toastMessage.FAIL.EDIT_PASSWORD)
      }
    },
  })
}
