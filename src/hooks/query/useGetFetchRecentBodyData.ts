import { queryKey } from "constants/queryKey"

import { useQuery } from "@tanstack/react-query"

import bodyDataAPI from "@apis/domain/bodydata"

import { transformBodyData } from "@utils/transBodyData"

export const useGetFetchRecentData = () => {
  const {
    data: getbodyData,
    isFetched,
    isError,
  } = useQuery({
    queryKey: [queryKey.GET_FETCH_RECENT_BODYDATA],
    queryFn: async () => {
      const response = await bodyDataAPI.fetchRecentData()
      return response.data
    },
  })

  const bodyDatas = getbodyData ? transformBodyData(getbodyData) : null

  return { bodyDatas, isFetched, isError }
}
