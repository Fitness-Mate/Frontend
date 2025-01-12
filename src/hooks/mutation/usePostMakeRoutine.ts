import { mutationKey } from "constants/mutationKey"
import { queryKey } from "constants/queryKey"
import { toastMessage } from "constants/toastMessage"

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
      Toast.success(toastMessage.SUCCESS.MAKE_ROUTINE)
      queryClient.invalidateQueries({ queryKey: [queryKey.GET_MY_ROUTINES] })
    },
    onError: () => {
      Toast.error(toastMessage.FAIL.MAKE_ROUTINE)
    },
  })
}
