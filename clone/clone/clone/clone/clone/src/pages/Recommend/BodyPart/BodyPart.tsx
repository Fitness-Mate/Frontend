import { useState } from "react"
import { useNavigate } from "react-router-dom"

import IconButton from "@components/IconButton/IconButton"
import ProgressBar from "@components/Progressbar/ProgressBar"

import Footer from "@pages/Recommend/BodyPart/Footer"
import List from "@pages/Recommend/BodyPart/List"

import { useGetBodyPart } from "@hooks/query/useGetBodyPart"

import * as GS from "../StyledRecommend"

const BodyPart = () => {
  const { bodyParts = [] } = useGetBodyPart("recommend")
  const [selectedBodyParts, setSelectedBodyParts] = useState<number[]>([])

  const navigate = useNavigate()

  const handleBackPage = () => {
    navigate(-1)
  }

  const handleBodyPart = (bodyPartIdx: number) => {
    if (selectedBodyParts.includes(bodyPartIdx)) {
      setSelectedBodyParts([
        ...selectedBodyParts.filter((idx) => idx !== bodyPartIdx),
      ])
    } else {
      setSelectedBodyParts([...selectedBodyParts, bodyPartIdx])
    }
  }

  const handleNextPage = () => {
    const koreanBodyParts = selectedBodyParts.map(
      (idx) => bodyParts[idx - 1].koreanName,
    )

    navigate("/recommend/machine", { state: koreanBodyParts })
  }

  return (
    <GS.RecommendWrapper>
      <GS.Status $isScrollTop={true}>
        <IconButton
          icon="LeftArrowBold"
          size={30}
          onClick={handleBackPage}
        />
        <ProgressBar progress={1} />
      </GS.Status>
      <List
        bodyParts={bodyParts}
        selectedBodyParts={selectedBodyParts}
        handleBodyPart={handleBodyPart}
      />
      <Footer
        selectedBodyPartLength={selectedBodyParts.length}
        handleNextPage={handleNextPage}
      />
    </GS.RecommendWrapper>
  )
}
export default BodyPart
