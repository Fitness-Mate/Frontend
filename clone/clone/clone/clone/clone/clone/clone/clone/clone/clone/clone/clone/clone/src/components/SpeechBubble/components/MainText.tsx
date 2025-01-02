import { StrictPropsWithChildren } from "@typpes/type"

import * as S from "../StyledSpeechBubble"

const MainText = ({ children }: StrictPropsWithChildren) => {
  return <S.SpeechBubbleMainText>{children}</S.SpeechBubbleMainText>
}

export default MainText
