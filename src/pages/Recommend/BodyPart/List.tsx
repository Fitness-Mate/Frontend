import Avatar from "@components/Avatar/Avatar"
import ImgCheckBox from "@components/CheckBox/ImgCheckBox"
import SpeechBubble from "@components/SpeechBubble/SpeechBubble"

import { BodyPartList } from "@typpes/type"

import * as S from "../StyledRecommend"

interface ListProps {
  handleBodyPart: (bodyPartIdx: number) => void
  bodyParts: BodyPartList[]
  selectedBodyParts: number[]
}
const List = ({ handleBodyPart, bodyParts, selectedBodyParts }: ListProps) => {
  return (
    <S.BodyPartWrapper>
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
      <S.TabWrapper key="상체">
        <S.TabTitle>{"상체"}</S.TabTitle>
        <S.TabList>
          {bodyParts.slice(0, 6).map(({ koreanName, imgPath, bodyPartId }) => (
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
  )
}
export default List
