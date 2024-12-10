import { useMutation } from "@tanstack/react-query"

import MyFitAPI from "@apis/domain/myfit"

interface UseDeleteMyWorkoutProps {
  onSuccess: () => void
}

const useDeleteMyWorkout = ({ onSuccess }: UseDeleteMyWorkoutProps) => {
  return useMutation({
    mutationKey: ["useDeleteMyWorkout"],
    mutationFn: async (myWorkoutId: number) =>
      await MyFitAPI.deleteMyWorkout(myWorkoutId),
    onSuccess: () => {
      onSuccess()
    },
    onError: () => {
      console.error("에러")
    },
  })
}

export default useDeleteMyWorkout
