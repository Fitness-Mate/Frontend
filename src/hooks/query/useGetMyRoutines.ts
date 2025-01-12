import { queryKey } from "constants/queryKey"

import { useQuery } from "@tanstack/react-query"

import MyFitAPI from "../../apis/domain/myfit"

export const useGetMyRoutines = () => {
  return useQuery({
    queryKey: [queryKey.GET_MY_ROUTINES],
    queryFn: async () => await MyFitAPI.myRoutines(),
  })
}
