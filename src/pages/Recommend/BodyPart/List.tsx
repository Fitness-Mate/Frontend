import Avatar from "@components/Avatar/Avatar"
import ImgCheckBox from "@components/CheckBox/ImgCheckBox"
import SpeechBubble from "@components/SpeechBubble/SpeechBubble"

import { BodyPartList } from "@typpes/type"

import * as GS from "../StyledRecommend"
import * as S from "./StyledBodyPart"

interface ListProps {
  handleBodyPart: (bodyPartIdx: number) => void
  bodyParts: BodyPartList[]
  selectedBodyParts: number[]
}
const BODYPART_TAB = [
  {
    label: "상체",
    startIndex: 0,
    lastIndex: 6,
  },
  {
    label: "하체",
    startIndex: 6,
    lastIndex: undefined,
  },
]

const BODYPART_DEFAULT_IMGURL =
  "https://www.chosun.com/resizer/v2/5O2JMBBB2NHEZOKWLS2AZYKPWU.jpg?auth=3bd18164c19b9c5b2d492ceec653597eb3e73630ac6a350cba4813bd585a1c21&width=616"

const List = ({ handleBodyPart, bodyParts, selectedBodyParts }: ListProps) => {
  return (
    <S.BodyPartWrapper>
      <GS.RecommendGuideWrapper>
        <GS.RecommendGuide>
          <Avatar />
          <SpeechBubble>
            <SpeechBubble.MainText>
              어떤 부위의 운동을 추천해드릴까요?
            </SpeechBubble.MainText>
          </SpeechBubble>
        </GS.RecommendGuide>
      </GS.RecommendGuideWrapper>
      <S.TabWrapper>
        {BODYPART_TAB.map(({ label, startIndex, lastIndex }) => (
          <S.TabBox key={label}>
            <S.TabTitle>{label}</S.TabTitle>
            <S.TabList>
              {bodyParts
                .slice(startIndex, lastIndex)
                .map(({ koreanName, imgPath, bodyPartId }) => (
                  <ImgCheckBox
                    key={bodyPartId}
                    src={imgPath ? imgPath : BODYPART_DEFAULT_IMGURL}
                    alt="운동부위 이미지"
                    handleToggle={() => {
                      handleBodyPart(bodyPartId)
                    }}
                    isSelected={selectedBodyParts.includes(bodyPartId)}
                    variant="small">
                    {koreanName}
                  </ImgCheckBox>
                ))}
            </S.TabList>
          </S.TabBox>
        ))}
      </S.TabWrapper>
    </S.BodyPartWrapper>
  )
}
export default List
