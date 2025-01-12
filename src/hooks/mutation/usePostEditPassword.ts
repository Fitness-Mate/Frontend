import { mutationKey } from "constants/mutationKey"

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
        Toast.success("비밀번호 변경했어요")
      } else if (status === "fail") {
        Toast.error("비밀번호 변경이 완료되지 않았어요")
      }
    },
  })
}
