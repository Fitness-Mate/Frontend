import { mutationKey } from "constants/mutationKey"
import { toastMessage } from "constants/toastMessage"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { Toast } from "@components/Toast/Toast"

import MyFitAPI from "@apis/domain/myfit"

import { MyWorkoutIndex, MyWorkoutList } from "@typpes/type"

const useEditWorkoutList = (routineId: number) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: [mutationKey.POST_EDIT_WORKOUT_LIST],
    mutationFn: async ({
      myWorkoutId,
      workout,
    }: {
      myWorkoutId: number
      workout: MyWorkoutIndex
    }) => await MyFitAPI.editMyWorkout(myWorkoutId, workout),

    onSuccess: (_, { myWorkoutId, workout }) => {
      Toast.success(toastMessage.SUCCESS.EDIT_ROTUINE)
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
  })
}

export default useEditWorkoutList
