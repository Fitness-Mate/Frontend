import { useMutation, useQueryClient } from "@tanstack/react-query"

import MyFitAPI from "@apis/domain/myfit"

import { MyWorkoutIndex, MyWorkoutList } from "@typpes/type"

const useEditWorkoutList = (routineId: number) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      myWorkoutId,
      workout,
    }: {
      myWorkoutId: number
      workout: MyWorkoutIndex
    }) => await MyFitAPI.editMyWorkout(myWorkoutId, workout),

    onSuccess: (_, { myWorkoutId, workout }) => {
      queryClient.setQueryData<MyWorkoutList[]>(
        ["workoutList", routineId],
        (oldData) => {
          if (!oldData) return []
          return oldData.map((item) =>
            item.myWorkoutId === myWorkoutId ? { ...item, ...workout } : item,
          )
        },
      )
    },

    onError: (error) => {
      console.error("Workout update failed:", error)
    },
  })
}

export default useEditWorkoutList
