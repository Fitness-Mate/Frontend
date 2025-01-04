import { useMutation } from "@tanstack/react-query"

import { Toast } from "@components/Toast/Toast"

import authAPI from "@apis/domain/auth"

import { EditUserPasswordPayload } from "@typpes/type"

export const usePostEditPassword = () => {
  return useMutation({
    mutationKey: ["postEditPassword"],
    mutationFn: (payload: EditUserPasswordPayload) =>
      authAPI.editPassword(payload),
    onSuccess: ({ data: status }) => {
      if (status === "ok") {
        Toast.success("비밀번호 변경에 성공했습니다.")
      } else if (status === "fail") {
        Toast.error("비밀번호 변경에 실패했습니다.")
      }
    },
  })
}
