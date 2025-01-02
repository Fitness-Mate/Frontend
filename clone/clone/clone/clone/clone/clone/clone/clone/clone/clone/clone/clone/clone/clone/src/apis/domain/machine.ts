import { instance } from "@apis/instance"

import { MachineList, PostMachineListPayload } from "@typpes/type"

const fetchList = async (bodyPartList: PostMachineListPayload) => {
  const response = await instance.post<MachineList[]>(
    "/api/machines/list",
    bodyPartList,
  )
  return response.data
}

const machineAPI = { fetchList }
export default machineAPI
