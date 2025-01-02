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
      Toast.success("루틴 생성을 성공했습니다.")
      queryClient.invalidateQueries({ queryKey: ["myRoutines"] })
    },
  })
}
