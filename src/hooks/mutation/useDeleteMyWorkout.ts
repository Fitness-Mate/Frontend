import { mutationKey } from "constants/mutationKey"

import { useMutation, useQueryClient } from "@tanstack/react-query"

import { Toast } from "@components/Toast/Toast"

import MyFitAPI from "@apis/domain/myfit"

import { MyWorkoutList } from "@typpes/type"

interface DeleteWorkoutProps {
  myWorkoutId: number
  routineId: number
}

const useDeleteMyWorkout = () => {
  const queryClient = useQueryClient()

  return useMutation<
    void,
    Error,
    DeleteWorkoutProps,
    { previousData: MyWorkoutList[] | undefined }
  >({
    mutationKey: [mutationKey.DELETE_MY_WORKOUT],
    mutationFn: async ({ myWorkoutId }: DeleteWorkoutProps): Promise<void> => {
      await MyFitAPI.deleteMyWorkout(myWorkoutId)
    },
    onMutate: async ({ myWorkoutId, routineId }: DeleteWorkoutProps) => {
      const previousData = queryClient.getQueryData<MyWorkoutList[]>([
        "workoutList",
        routineId,
      ])

      queryClient.setQueryData(
        ["workoutList", routineId],
        (oldData: MyWorkoutList[] | undefined) => {
          if (!oldData) return []
          return oldData.filter(
            (workout) => workout.myWorkoutId !== myWorkoutId,
          )
        },
      )

      return { previousData }
    },
    onSuccess: () => {
      Toast.success("루틴을 삭제했어요")
    },
    onError: (_, { routineId }: DeleteWorkoutProps, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(
          ["workoutList", routineId],
          context.previousData,
        )
      }
    },
    onSettled: (_, __, { routineId }: DeleteWorkoutProps) => {
      queryClient.invalidateQueries({ queryKey: ["workoutList", routineId] })
    },
  })
}

export default useDeleteMyWorkout
