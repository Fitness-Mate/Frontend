import { useMutation } from "@tanstack/react-query"

import { Toast } from "@components/Toast/Toast"

import authAPI from "@apis/domain/auth"

import { EditUserPasswordPayload } from "@typpes/type"

import { useModal } from "@hooks/useModal"

export const usePostEditPassword = () => {
  const { onOpen: openSuccess } = useModal("성공")
  return useMutation({
    mutationKey: ["postEditPassword"],
    mutationFn: (payload: EditUserPasswordPayload) =>
      authAPI.editPassword(payload),
    onError: () => {
      Toast.error("비밀번호 변경에 실패했습니다.")
    },

    onSuccess: ({ data: status }) => {
      if (status === "ok") {
        openSuccess()
      } else if (status === "fail") {
        Toast.error("비밀번호 변경에 실패했습니다.")
      }
    },
  })
}
