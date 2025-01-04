import { useQuery } from "@tanstack/react-query"

import bodyPartAPI from "@apis/domain/bodypart"

export const useGetBodyPart = (type = "search") => {
  const getBodyPart = useQuery({
    queryKey: ["getBodyPart"],
    queryFn: async () => await bodyPartAPI.fetchData(),
    select: (data) =>
      type === "search"
        ? [
            {
              bodyPartId: 0,
              englishName: "total",
              koreanName: "전체",
              imgPath: "",
            },
            ...data.filter((item) => item.englishName !== "all"),
          ]
        : [...data],
  })

  return { bodyParts: getBodyPart.data }
}
