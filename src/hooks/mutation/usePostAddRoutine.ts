import { mutationKey } from "constants/mutationKey"
import { queryKey } from "constants/queryKey"
import { toastMessage } from "constants/toastMessage"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { Toast } from "@components/Toast/Toast"

import MyFitAPI from "@apis/domain/myfit"

import { RoutineInfo } from "@typpes/type"

interface usePostAddRoutineProps {
  routineId: number
  routineInfo: RoutineInfo
}

export const usePostAddRoutine = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [mutationKey.POST_ADD_ROUTINE],
    mutationFn: async ({ routineId, routineInfo }: usePostAddRoutineProps) =>
      await MyFitAPI.addRoutine(routineInfo, routineId),
    onSuccess: () => {
      Toast.success(toastMessage.SUCCESS.ADD_ROUTINE)
      queryClient.invalidateQueries({ queryKey: [queryKey.GET_MY_ROUTINES] })
    },
    onError: () => {
      Toast.error(toastMessage.FAIL.ADD_ROUTINE)
    },
  })
}
