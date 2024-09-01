// @ts-nocheck
import { instance } from "@apis/instance"

const workout = (params) => instance.post(`/api/recommendation/workout`, params)

const workoutHistory = (params) =>
  instance.get(`/api/recommendation/workout`, params)

const workoutHistoryBatch = (workoutRecommendationId: number) =>
  instance.get(`/api/recommendation/workout/history/${workoutRecommendationId}`)

const recommendAPI = {
  workout,
  workoutHistory,
  workoutHistoryBatch,
}
export default recommendAPI
