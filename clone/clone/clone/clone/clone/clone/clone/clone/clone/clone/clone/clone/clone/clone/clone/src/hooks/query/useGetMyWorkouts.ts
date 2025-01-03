import { useQuery } from "@tanstack/react-query"

import { MyWorkoutList } from "@typpes/type"

import MyFitAPI from "../../apis/domain/myfit"

export const useGetMyWorkouts = (
  routineId: number,
  options?: { enabled?: boolean },
) => {
  const query = useQuery<MyWorkoutList[]>({
    queryKey: ["workoutList", routineId],
    queryFn: async () => {
      if (!routineId) {
        throw new Error("Invalid routine ID")
      }
      const response = await MyFitAPI.myWorkouts(routineId)
      return Array.isArray(response) ? response : []
    },
    enabled: options?.enabled ?? routineId > 0,
  })

  return {
    ...query,
    myWorkouts: query.data || [],
    isWorkout: !!query.data?.length,
    isLoading: query.isLoading,
    isFetched: query.isFetched,
  }
}

export default useGetMyWorkouts
