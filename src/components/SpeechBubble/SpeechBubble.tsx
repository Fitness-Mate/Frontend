import Icon from "@components/Icon/Icon"
import SpeechBubbleIcon from "@components/SpeechBubble/components/Icon"
import MainText from "@components/SpeechBubble/components/MainText"
import SubText from "@components/SpeechBubble/components/SubText"

import { StrictPropsWithChildren } from "@typpes/type"

import * as S from "./StyledSpeechBubble"

export type Pos = "row" | "column"

interface SpeechBubbleProps {
  isIcon?: boolean
}

const SpeechBubbleMain = ({
  children,
  isIcon = true,
}: StrictPropsWithChildren<SpeechBubbleProps>) => (
  <S.SpeechBubbleWrapper
    $isMultiline={Array.isArray(children)}
    $isIcon={
      Array.isArray(children) && typeof children[0].props.children === "object"
    }>
    {isIcon && (
      <Icon
        icon="Tooltip"
        size={28}
      />
    )}
    {children}
  </S.SpeechBubbleWrapper>
)

/**
 * <h3>SpeechBubble은 가이드를 제공해주는 컴포넌트입니다.</h3>
 * 다음과 같은 컴포넌트를 children으로 사용할 수 있습니다.
 * - <SpeechBubble.MainText> 메인이되는 텍스트를 나타냅니다. 렌더링되는 부분이 2줄일 경우 상단의 텍스트를 나타냅니다.
 * - <SpeechBubble.SubText> 렌더링되는 부분이 2줄일 경우 하단의 텍스트를 나타냅니다.
 * - <SpeechBubble.Icon> 렌더링되는 부분이 2줄일 경우 상단의 아이콘을 나타냅니다.
 */

const SpeechBubble = Object.assign(SpeechBubbleMain, {
  MainText: MainText,
  SubText: SubText,
  Icon: SpeechBubbleIcon,
})

export default SpeechBubble
