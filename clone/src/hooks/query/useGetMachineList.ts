import { useQuery } from "@tanstack/react-query"

import machineAPI from "@apis/domain/machine"

export const useGetMachineList = (bodyPart: string[]) => {
  return useQuery({
    queryKey: ["getMachineList", bodyPart],
    queryFn: async () =>
      await machineAPI.fetchList({ bodyPartKoreanName: bodyPart }),
    select: (data) => data.map((machine, idx) => ({ ...machine, id: idx })),
  })
}
