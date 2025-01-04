import { instance } from "@apis/instance"

import { PostRecommendIdPayload, PostRecommendResponse } from "../../types/type"

const workoutId = async (params: PostRecommendIdPayload) => {
  const { data } = await instance.post<number>(
    "/api/recommendation/workout",
    params,
  )
  return data
}

const workoutHistory = async (workoutRecommendationId: number) => {
  const { data } = await instance.get<PostRecommendResponse>(
    `/api/recommendation/workout/history/${workoutRecommendationId}`,
  )
  return data
}

const recommendAPI = {
  workoutId,
  workoutHistory,
}
export default recommendAPI
