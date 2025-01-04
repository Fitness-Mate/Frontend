import {
  BottomInner,
  BottomSubText,
  BottomText,
  BottomTopLine,
  BottomWrapper,
} from "@components/Bottom/StyledBottom"

import { StrictPropsWithChildren } from "@typpes/type"

interface BottomProps {
  flex?: string
}

const Bottom = ({
  children,
  flex = "center",
}: StrictPropsWithChildren<BottomProps>) => {
  return (
    <BottomWrapper>
      <BottomInner $flex={flex}>{children}</BottomInner>

      <BottomTopLine>{}</BottomTopLine>
    </BottomWrapper>
  )
}

Bottom.Text = BottomText
Bottom.SubText = BottomSubText

export default Bottom
