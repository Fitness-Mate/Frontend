import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { useRecommendStore } from "@store/store"

import Avatar from "@components/Avatar/Avatar"
import Bottom from "@components/Bottom/Bottom"
import RoundButton from "@components/Button/RoundButton"
import ImgCheckBox from "@components/CheckBox/ImgCheckBox"
import IconButton from "@components/IconButton/IconButton"
import ProgressBar from "@components/Progressbar/ProgressBar"
import SpeechBubble from "@components/SpeechBubble/SpeechBubble"

import { useGetBodyPart } from "@hooks/query/useGetBodyPart"

import * as S from "../StyledRecommend"

const BodyPart = () => {
  const { bodyParts = [] } = useGetBodyPart("recommend")

  const [selectedBodyParts, setSelectedBodyParts] = useState<number[]>([])

  const { setBodyPart } = useRecommendStore()

  const isReady = selectedBodyParts.some((v) => v)

  const navigate = useNavigate()

  const handleBackPage = () => {
    navigate(-1)
  }

  const handleBodyPart = (bodyPartIdx: number) => {
    selectedBodyParts.includes(bodyPartIdx)
      ? setSelectedBodyParts([
          ...selectedBodyParts.filter((idx) => idx !== bodyPartIdx),
        ])
      : setSelectedBodyParts([...selectedBodyParts, bodyPartIdx])
  }

  const handleNextPage = () => {
    const koreanBodyParts = selectedBodyParts.map(
      (idx) => bodyParts[idx - 1].koreanName,
    )
    setBodyPart(koreanBodyParts)
    navigate("/recommend/machine")
  }

  return (
    <S.RecommendWrapper>
      <S.Status>
        <IconButton
          icon="LeftArrowBold"
          size={30}
          onClick={handleBackPage}
        />
        <ProgressBar
          progress={1}
          variant="round"
        />
      </S.Status>
      <S.RecommendInner>
        <S.RecommendGuideWrapper>
          <S.RecommendGuide>
            <Avatar />
            <SpeechBubble>
              <SpeechBubble.MainText>
                어떤 부위의 운동을 추천해드릴까요?
              </SpeechBubble.MainText>
            </SpeechBubble>
          </S.RecommendGuide>
        </S.RecommendGuideWrapper>
        <S.BodyPartWrapper>
          <S.TabWrapper key="상체">
            <S.TabTitle>{"상체"}</S.TabTitle>
            <S.TabList>
              {bodyParts
                .slice(0, 6)
                .map(({ koreanName, imgPath, bodyPartId }) => (
                  <ImgCheckBox
                    key={bodyPartId}
                    src={
                      imgPath
                        ? imgPath
                        : "https://www.chosun.com/resizer/v2/5O2JMBBB2NHEZOKWLS2AZYKPWU.jpg?auth=3bd18164c19b9c5b2d492ceec653597eb3e73630ac6a350cba4813bd585a1c21&width=616"
                    }
                    alt="테스트 이미지"
                    handleToggle={() => {
                      handleBodyPart(bodyPartId)
                    }}
                    isSelected={selectedBodyParts.includes(bodyPartId)}
                    variant="small">
                    {koreanName}
                  </ImgCheckBox>
                ))}
            </S.TabList>
          </S.TabWrapper>
          <S.TabWrapper key="하체">
            <S.TabTitle>{"하체"}</S.TabTitle>
            <S.TabList>
              {bodyParts
                .slice(6)
                .map(({ englishName, koreanName, imgPath, bodyPartId }) => (
                  <ImgCheckBox
                    key={englishName}
                    src={
                      imgPath
                        ? imgPath
                        : "https://www.chosun.com/resizer/v2/5O2JMBBB2NHEZOKWLS2AZYKPWU.jpg?auth=3bd18164c19b9c5b2d492ceec653597eb3e73630ac6a350cba4813bd585a1c21&width=616"
                    }
                    alt="테스트 이미지"
                    handleToggle={() => {
                      handleBodyPart(bodyPartId)
                    }}
                    isSelected={selectedBodyParts.includes(bodyPartId)}
                    variant="small">
                    {koreanName}
                  </ImgCheckBox>
                ))}
            </S.TabList>
          </S.TabWrapper>
        </S.BodyPartWrapper>
      </S.RecommendInner>
      <Bottom flex="space-between">
        <Bottom.Text>
          {selectedBodyParts.length}개
          <Bottom.SubText> 부위 선택됨</Bottom.SubText>
        </Bottom.Text>
        <RoundButton
          onClick={handleNextPage}
          variant="black"
          size="big"
          rightIcon="RightArrowWhite"
          disabled={!isReady}>
          다음
        </RoundButton>
      </Bottom>
    </S.RecommendWrapper>
  )
}
export default BodyPart
