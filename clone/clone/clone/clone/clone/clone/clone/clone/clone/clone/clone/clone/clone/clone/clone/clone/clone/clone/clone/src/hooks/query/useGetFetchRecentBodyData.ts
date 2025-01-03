import { useQuery } from "@tanstack/react-query"

import bodyDataAPI from "@apis/domain/bodydata"

import { transformBodyData } from "../useTransformBodyData"

export const useGetFetchRecentData = () => {
  const {
    data: getbodyData,
    isFetched,
    isError,
  } = useQuery({
    queryKey: ["fetchRecentData"],
    queryFn: async () => {
      const response = await bodyDataAPI.fetchRecentData()
      return response.data
    },
  })

  const bodyDatas = getbodyData ? transformBodyData(getbodyData) : null

  return { bodyDatas, isFetched, isError }
}
