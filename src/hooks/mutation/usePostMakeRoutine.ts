import { useMutation, useQueryClient } from "@tanstack/react-query"

import { Toast } from "@components/Toast/Toast"

import MyFitAPI from "@apis/domain/myfit"

import { MyRoutines } from "@typpes/type"

export const usePostMakeRoutine = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["usePostMakeRoutine"],
    mutationFn: async (params: { routines: MyRoutines[] }) =>
      await MyFitAPI.editMyRoutine(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myRoutines"] })
    },
    onError: () => {
      Toast.error("추천요청에 실패했습니다.")
    },
  })
}
