import { useMutation } from "@tanstack/react-query"

import authAPI from "@apis/domain/auth"

import { EditUserPasswordPayload } from "@typpes/type"

import { useModal } from "@hooks/useModal"

export const usePostEditPassword = () => {
  const { onOpen: openAlert } = useModal("알림")
  const { onOpen: openSuccess } = useModal("성공")
  return useMutation({
    mutationKey: ["postEditPassword"],
    mutationFn: (payload: EditUserPasswordPayload) =>
      authAPI.editPassword(payload),
    onError: () => {
      openAlert()
    },
    onSuccess: ({ data: status }) => {
      if (status === "ok") {
        openSuccess()
      } else if (status === "fail") {
        openAlert()
      }
    },
  })
}
