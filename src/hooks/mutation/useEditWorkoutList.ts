import { useMutation, useQueryClient } from "@tanstack/react-query"

import { Toast } from "@components/Toast/Toast"

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
      Toast.success("운동 리스트를 변경하는데 성공했습니다.")
    },

    onError: () => {
      Toast.error("운동 리스트를 변경하는데 실패했습니다.")
    },
  })
}

export default useEditWorkoutList
