import { ForwardedRef } from "react"

import Icon from "@components/common/Icon/Icon"
import ImgCheckBox from "@components/common/ImgCheckBox/ImgCheckBox"
import SpeechBubble from "@components/common/SpeechBubble/SpeechBubble"

import { MachineList } from "@typpes/type"

import { getScrollAnimation } from "@utils/getScrollAnimaion"

import * as GS from "../StyledRecommend"
import * as S from "./StyledMachine"

interface MachineListWithId extends MachineList {
  id: number
}

interface ListProps {
  isScrollTop?: boolean
  scrollRef: ForwardedRef<HTMLDivElement>
  machines: MachineListWithId[]
  machinesById: Set<number>
  handleBodyPart: (id: number) => void
}

const List = ({
  isScrollTop = true,
  scrollRef,
  machines,
  machinesById,
  handleBodyPart,
}: ListProps) => {
  const { guideAnimation, machineAnimation } = getScrollAnimation(isScrollTop)

  return (
    <S.RecommendInner ref={scrollRef}>
      <GS.RecommendGuideWrapper {...guideAnimation}>
        <GS.RecommendGuide>
          <Icon
            icon="Avatar"
            size={130}
          />
          <SpeechBubble>
            <SpeechBubble.MainText>
              사용 가능한 기구를 선택해주세요!
            </SpeechBubble.MainText>
          </SpeechBubble>
        </GS.RecommendGuide>
      </GS.RecommendGuideWrapper>

      <S.RecommendMachineWrapper {...machineAnimation}>
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
