import { instance } from "@apis/instance"

interface MachinesListParams {
  bodyPartKoreanName: []
}
const fetchList = (bodyPartList: MachinesListParams) =>
  instance.post("/api/machines/list", bodyPartList)

const machineAPI = { fetchList }
export default machineAPI
