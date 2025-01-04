import { instance } from "@apis/instance"

import {
  DeleteBodyDataResponse,
  GetBodyDataResponse,
  PostBodyDataPayload,
} from "../../types/type"

const postData = (bodyData: PostBodyDataPayload) =>
  instance.post("/api/bodyData", bodyData)

const fetchData = (bodyDataId: number) =>
  instance.get<GetBodyDataResponse>(`/api/bodyData/${bodyDataId}`)

const fetchBatchData = (pageNum: number) =>
  instance.get<GetBodyDataResponse[]>(`/api/bodyData/list/${pageNum}`)

const fetchRecentData = () =>
  instance.get<GetBodyDataResponse>("/api/bodyData/recent")

const deleteData = (bodyDataId: number) =>
  instance.post<DeleteBodyDataResponse>(`/api/bodyData/delete/${bodyDataId}`)

const bodyDataAPI = {
  fetchData,
  fetchRecentData,
  fetchBatchData,
  postData,
  deleteData,
}

export default bodyDataAPI
