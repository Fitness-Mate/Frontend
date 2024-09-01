import { instance } from "@apis/instance"

interface BodyDataParams {
  date: string
  height: number
  weight: number
  bodyFat: number
  muscleMass: number
  upDownBalance: number
}

const postData = (bodyData: BodyDataParams) =>
  instance.post("/api/bodyData", bodyData)

const fetchData = (bodyDataId: number) =>
  instance.get(`/api/bodyData/${bodyDataId}`)

const fetchBatchData = (pageNum: number) =>
  instance.get(`/api/bodyData/list/${pageNum}`)

const fetchRecentData = () => instance.get("/api/bodyData/recent")

const deleteData = (bodyDataId: number) =>
  instance.post(`/api/bodyData/delete/${bodyDataId}`)

const bodyDataAPI = {
  fetchData,
  fetchRecentData,
  fetchBatchData,
  postData,
  deleteData,
}

export default bodyDataAPI
