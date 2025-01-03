import { StrictPropsWithChildren } from "@typpes/type"

import * as S from "../StyledSpeechBubble"

const SubText = ({ children }: StrictPropsWithChildren) => {
  return <S.SpeechBubbleSubText>{children}</S.SpeechBubbleSubText>
}

export default SubText
