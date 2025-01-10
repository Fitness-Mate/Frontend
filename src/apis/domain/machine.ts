import { instance } from "@apis/instance"

import { MachineList, PostMachineListPayload } from "@typpes/type"

const fetchList = (bodyPartList: PostMachineListPayload) => {
  return instance.post<MachineList[]>("/api/machines/list", bodyPartList)
}

const machineAPI = { fetchList }
export default machineAPI
