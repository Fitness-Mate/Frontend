import { useQuery } from "@tanstack/react-query"

import MyFitAPI from "../../apis/domain/myfit"
import { MyWorkoutList } from "../../types/type"

// enabled 옵션을 내부에서 처리
export const useGetMyWorkouts = (routineId: number) => {
  return useQuery<MyWorkoutList[]>({
    queryKey: ["getMyWorkouts", routineId],
    queryFn: async () => {
      const response = await MyFitAPI.myWorkouts(routineId)
      return Array.isArray(response) ? response : []
    },
    enabled: !!routineId, // routineId가 있을 때만 실행
  })
}
