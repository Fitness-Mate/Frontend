import { mutationKey } from "constants/mutationKey"
import { queryKey } from "constants/queryKey"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { Toast } from "@components/Toast/Toast"

import MyFitAPI from "@apis/domain/myfit"

import { MyRoutines } from "@typpes/type"

export const usePostMakeRoutine = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: [mutationKey.POST_MAKE_ROUTINE],
    mutationFn: async (params: { routines: MyRoutines[] }) =>
      await MyFitAPI.editMyRoutine(params),
    onSuccess: () => {
      Toast.success("루틴을 만들었어요")
      queryClient.invalidateQueries({ queryKey: [queryKey.GET_MY_ROUTINES] })
    },
    onError: () => {
      Toast.error("루틴은 5개까지만 만들 수 있어요")
    },
  })
}
