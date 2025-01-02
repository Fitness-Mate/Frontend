import { useState } from "react"

export const useRatio = () => {
  const [ratioValue, setRatioValue] = useState(5)
  let ratioText = ""

  const handleRatio = (flag: string) => {
    if (flag === "+") {
      setRatioValue((prev) => (prev < 9 ? prev + 1 : prev))
    } else if (flag === "-") {
      setRatioValue((prev) => (prev > 1 ? prev - 1 : prev))
    }
  }

  if (Number(ratioValue) < 5) {
    ratioText = "하체가 상체보다 더 발달했어요"
  }
  if (Number(ratioValue) === 5) {
    ratioText = "둘 다 발달했거나 큰 차이 없어요"
  }
  if (Number(ratioValue) > 5) {
    ratioText = "상체가 하체보다 더 발달했어요"
  }

  return { ratioValue, ratioText, handleRatio }
}
