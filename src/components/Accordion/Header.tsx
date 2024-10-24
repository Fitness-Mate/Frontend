import { useAccordion } from "@components/Accordion/Accordion"
import {
  HeaderLeft,
  HeaderRight,
  HeaderTop,
  HeaderWrapper,
} from "@components/Accordion/StyledAccordion"
import RecommendAlertModalButton from "@components/Modal/components/Alert/RecommendAlertModalButton"
import Title from "@components/Title/Title"

import { StrictPropsWithChildren } from "@typpes/type"

interface HeaderProps {
  bodyParts: string
  // count?: number
}

const Header = ({
  children,
  bodyParts,
  // count,
}: StrictPropsWithChildren<HeaderProps>) => {
  const { visible } = useAccordion()

  return (
    <HeaderWrapper>
      <HeaderTop $visible={visible}>
        <HeaderLeft>
          <Title variant="midB">
            {children}
            <Title.SubBottomTitle>{bodyParts}</Title.SubBottomTitle>
          </Title>
        </HeaderLeft>
        <HeaderRight>
          <RecommendAlertModalButton />
        </HeaderRight>
      </HeaderTop>
    </HeaderWrapper>
  )
}

export default Header
