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
      Toast.success("루틴에 운동 추가를 성공했습니다.")
      queryClient.invalidateQueries({ queryKey: ["myRoutines"] })
    },
  })
}
