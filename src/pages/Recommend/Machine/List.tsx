import { ForwardedRef } from "react"

import Avatar from "@components/Avatar/Avatar"
import ImgCheckBox from "@components/CheckBox/ImgCheckBox"
import SpeechBubble from "@components/SpeechBubble/SpeechBubble"

import { MachineList } from "@typpes/type"

import { animation } from "@styles/theme"

import * as S from "../StyledRecommend"

interface MachineListWithId extends MachineList {
  id: number
}

interface ListProps {
  isScrollTop: boolean
  scrollRef: ForwardedRef<HTMLDivElement>
  machines: MachineListWithId[]
  machinesById: Set<number>
  handleBodyPart: (id: number) => void
}

const List = ({
  isScrollTop,
  scrollRef,
  machines,
  machinesById,
  handleBodyPart,
}: ListProps) => {
  return (
    <S.RecommendInner ref={scrollRef}>
      <S.RecommendGuideWrapper
        $isScrollTop={isScrollTop}
        initial={{ opacity: 1, scale: 1, y: 0 }}
        animate={
          isScrollTop
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.8, y: -20 }
        }
        transition={{ ...animation.quick }}>
        <S.RecommendGuide>
          <Avatar />
          <SpeechBubble>
            <SpeechBubble.MainText>
              사용 가능한 기구를 선택해주세요!
            </SpeechBubble.MainText>
          </SpeechBubble>
        </S.RecommendGuide>
      </S.RecommendGuideWrapper>

      <S.RecommendMachineWrapper
        animate={isScrollTop ? { y: "366px" } : { y: "80px" }}
        transition={{ ...animation.small }}>
        {machines?.map(({ englishName, koreanName, id, imgPath }) => (
          <ImgCheckBox
            key={englishName}
            src={imgPath}
            alt="테스트 이미지를 설명"
            isSelected={machinesById.has(id)}
            handleToggle={() => handleBodyPart(id)}
            variant="big">
            {koreanName}
          </ImgCheckBox>
        ))}
      </S.RecommendMachineWrapper>
    </S.RecommendInner>
  )
}

export default List