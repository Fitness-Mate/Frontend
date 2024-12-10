import { useNavigate } from "react-router-dom"

import { useMutation } from "@tanstack/react-query"

import recommendAPI from "@apis/domain/recommend"

import { useModal } from "@hooks/useModal"

export const usePostRecommend = () => {
  const navigate = useNavigate()
  const { onOpen } = useModal("로딩")

  return useMutation({
    mutationKey: ["usePostRecommendId"],
    mutationFn: async (workoutRecommendId: number) =>
      recommendAPI.workoutHistory(workoutRecommendId),
    retry: 1,
    retryDelay: 1000 * 1,

    onError: () => {
      onOpen()
    },

    onSuccess: (result) => {
      const seenWorkoutIds = new Set()

      result.recommends = result.recommends.filter((recommend) => {
        if (seenWorkoutIds.has(recommend.workoutId)) {
          return false
        } else {
          seenWorkoutIds.add(recommend.workoutId)
          return true
        }
      })
      navigate("/recommend/result", { state: result })

      document.body.style.overflow = "auto"
    },
    onMutate: () => {
      document.body.style.overflow = "hidden"
    },
  })
}
