import { queryKey } from "constants/queryKey"

import { useQuery } from "@tanstack/react-query"

import workoutAPI from "@apis/domain/workout"

export const useGetWorkout = (workoutId: number) => {
  const getWorkout = useQuery({
    queryKey: [queryKey.GET_WORKOUT, workoutId],
    queryFn: async () => await workoutAPI.fetchData(workoutId),
  })

  return { workout: getWorkout.data }
}
