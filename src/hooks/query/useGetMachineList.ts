import { queryKey } from "constants/queryKey"

import { useQuery } from "@tanstack/react-query"

import machineAPI from "@apis/domain/machine"

export const useGetMachineList = (bodyPart: string[]) => {
  return useQuery({
    queryKey: [queryKey.GET_MACHINE_LIST, bodyPart],
    queryFn: async () =>
      await machineAPI.fetchList({ bodyPartKoreanName: bodyPart }),
    select: ({ data }) => data.map((machine, idx) => ({ ...machine, id: idx })),
  })
}
