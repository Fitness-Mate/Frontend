import { useMutation, useQueryClient } from "@tanstack/react-query"

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
      MyFitAPI.addRoutine(routineInfo, routineId),
    onError: () => {
      console.log("에러")
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myRoutines"] })
    },
  })
}
