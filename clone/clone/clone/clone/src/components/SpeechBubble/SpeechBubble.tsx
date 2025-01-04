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

const SpeechBubble = Object.assign(SpeechBubbleMain, {
  MainText: MainText,
  SubText: SubText,
  Icon: SpeechBubbleIcon,
})

export default SpeechBubble
