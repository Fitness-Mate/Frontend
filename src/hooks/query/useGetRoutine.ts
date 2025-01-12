import { queryKey } from "constants/queryKey"

import { useQueries } from "@tanstack/react-query"

import MyFitAPI from "@apis/domain/myfit"

import { MyRoutines } from "@typpes/type"

export const useGetRoutine = (routines: MyRoutines[]) => {
  return useQueries({
    queries: routines.map(({ routineId }) => ({
      queryKey: [queryKey.GET_ROUTINE, routineId],
      queryFn: () => MyFitAPI.myWorkouts(routineId),
    })),
    combine: (results) => {
      const refetchAll = () => results.forEach((result) => result.refetch())

      return {
        refetchAll,
        data: results.map((result) => result.data),
        pending: results.some((result) => result.isPending),
      }
    },
  })
}
