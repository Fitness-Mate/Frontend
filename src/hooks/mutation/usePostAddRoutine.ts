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
    mutationKey: ["usePostAddRoutine"],
    mutationFn: async ({ routineId, routineInfo }: usePostAddRoutineProps) =>
      await MyFitAPI.addRoutine(routineInfo, routineId),
    onSuccess: () => {
      Toast.success("운동을 추가했어요")
      queryClient.invalidateQueries({ queryKey: ["myRoutines"] })
    },
    onError: () => {
      Toast.error(
        "루틴은 7개까지만 추가할 수 있어요 루틴은 7개까지만 추가할 수 있어요",
      )
    },
  })
}
