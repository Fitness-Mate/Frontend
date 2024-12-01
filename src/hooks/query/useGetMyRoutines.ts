import { useQuery } from "@tanstack/react-query"

import MyFitAPI from "../../apis/domain/myfit"

export const useGetMyRoutines = () => {
  return useQuery({
    queryKey: ["myRoutines"],
    queryFn: async () => await MyFitAPI.myRoutines(),
  })
}
