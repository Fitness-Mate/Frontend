import { useRecommendStore } from "@store/store"

import { useQuery } from "@tanstack/react-query"

import machineAPI from "@apis/domain/machine"

export const useGetMachineList = () => {
  const { bodyPart } = useRecommendStore()
  return useQuery({
    queryKey: ["getMachineList"],
    queryFn: async () =>
      await machineAPI.fetchList({ bodyPartKoreanName: bodyPart }),
    select: (data) => data.map((machine, idx) => ({ ...machine, id: idx })),
  })
}
