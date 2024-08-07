// @ts-nocheck
import { instance } from "@apis/instance"

const supplement = (params) =>
  instance.post(`/api/recommendation/supplement`, params)

const workout = (params) => instance.post(`/api/recommendation/workout`, params)

const supplementPurpose = () => instance.get(`/api/recommendation/supplement`)

const workoutHistory = (params) =>
  instance.get(`/api/recommendation/supplement`, params)

const workoutHistoryBatch = (workoutRecommendationId: number) =>
  instance.get(`/api/recommendation/workout/history/${workoutRecommendationId}`)

const supplementHistory = (supplementRecommendationId: number) =>
  instance.get(
    `/api//recommendation/supplement/history/${supplementRecommendationId}`,
  )

const recommendAPI = {
  supplement,
  workout,
  supplementPurpose,
  workoutHistory,
  workoutHistoryBatch,
  supplementHistory,
}
export default recommendAPI
