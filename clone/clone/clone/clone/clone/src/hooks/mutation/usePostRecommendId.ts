import { useMutation } from "@tanstack/react-query"

import recommendAPI from "@apis/domain/recommend"

import { PostRecommendIdPayload } from "@typpes/type"

export const usePostRecommendId = () => {
  return useMutation({
    mutationKey: ["usePostRecommendId"],
    mutationFn: async (payload: PostRecommendIdPayload) => {
      return await recommendAPI.workoutId(payload)
    },
    onError: () => {
      console.error("에러")
    },
  })
}
