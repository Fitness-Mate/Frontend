import { mutationKey } from "constants/mutationKey"

import { useMutation } from "@tanstack/react-query"

import recommendAPI from "@apis/domain/recommend"

import { PostRecommendIdPayload } from "@typpes/type"

export const usePostRecommendId = () => {
  return useMutation({
    mutationKey: [mutationKey.POST_RECOMMENDID],
    mutationFn: async (payload: PostRecommendIdPayload) => {
      return await recommendAPI.workoutId(payload)
    },
  })
}
