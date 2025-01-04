import { useSuspenseQueries } from "@tanstack/react-query"

import workoutAPI from "@apis/domain/workout"

import { GetWorkoutsPayload } from "@typpes/type"

export const useGetWorkoutBatch = ({
  page = 1,
  searchKeyword = "",
  bodyPartKoreanName = [],
}: GetWorkoutsPayload) => {
  const getWorkout = useSuspenseQueries({
    queries: Array.from({ length: 5 }, (_, idx) => idx + 1).map((pageId) => ({
      queryKey: [
        `getWorkoutBatch${pageId}`,
        pageId,
        searchKeyword,
        bodyPartKoreanName,
      ],
      queryFn: async () =>
        await workoutAPI.searchBatchData({
          page: pageId,
          searchKeyword,
          bodyPartKoreanName,
        }),
    })),
  })

  return {
    workouts: getWorkout[page - 1].data,
    pageNum: getWorkout.filter((query) => query.data.length).length,
    cardLength: getWorkout.reduce((prev, cur) => prev + cur.data.length, 0),
  }
}
