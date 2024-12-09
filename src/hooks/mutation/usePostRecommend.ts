import { useMutation } from "@tanstack/react-query"

import recommendAPI from "@apis/domain/recommend"

export const usePostRecommend = () => {
  return useMutation({
    mutationKey: ["usePostRecommendId"],
    mutationFn: async (workoutRecommendationId: number) =>
      recommendAPI.workoutHistory(workoutRecommendationId),
    retry: 120,
    retryDelay: 1000 * 1,

    onError: () => {
      console.error("에러")
    },
    onSuccess: (result) => {
      console.log(result)
      document.body.style.overflow = "auto"
    },
    onMutate: () => {
      document.body.style.overflow = "hidden"
    },
  })
}
