import { useQuery } from "@tanstack/react-query"

import bodyDataAPI from "@apis/domain/bodydata"

export const useGetFetchRecentData = () => {
  const getbodyData = useQuery({
    queryKey: ["useGetFetchRecentData"],
    queryFn: async () => await bodyDataAPI.fetchRecentData(),
  })

  return { bodyDatas: getbodyData.data }
}
