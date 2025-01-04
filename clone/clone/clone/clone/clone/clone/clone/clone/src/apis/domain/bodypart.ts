import { instance } from "@apis/instance"

import { BodyPartList } from "@typpes/type"

const fetchData = () =>
  instance.get<BodyPartList[]>("/api/bodyParts/all").then((res) => res.data)

const bodyPartAPI = {
  fetchData,
}

export default bodyPartAPI
