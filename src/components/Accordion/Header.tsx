import { useModalStore } from "@store/useModalStore"

import { useAccordion } from "@components/Accordion/Accordion"
import {
  HeaderLeft,
  HeaderRight,
  HeaderTop,
  HeaderWrapper,
} from "@components/Accordion/StyledAccordion"
import RoundButton from "@components/Button/RoundButton"
import Title from "@components/Title/Title"

import { Recommend } from "@typpes/type"
import { StrictPropsWithChildren } from "@typpes/type"

const Header = ({ children }: StrictPropsWithChildren) => {
  const { visible, bodyParts, onOpen, workout } = useAccordion()
  const { setWorkoutState } = useModalStore()

  return (
    <>
      <HeaderWrapper>
        <HeaderTop $visible={!!visible}>
          <HeaderLeft>
            <Title variant="midB">
              {children}
              <Title.SubBottomTitle>{bodyParts}</Title.SubBottomTitle>
            </Title>
          </HeaderLeft>
          <HeaderRight>
            <RoundButton
              leftIcon="Add"
              variant="blue"
              size="sm"
              onClick={() => {
                onOpen()
                setWorkoutState(workout as Recommend)
              }}>
              운동 루틴
            </RoundButton>
          </HeaderRight>
        </HeaderTop>
      </HeaderWrapper>
    </>
  )
}

export default Header
