import Icon from "@components/Icon/Icon"

import { useFigure } from "@pages/Signup/BodyFigure/components/Figure/FigureContext"

import { StrictPropsWithChildren } from "@typpes/type"

import * as S from "./StyledCheckBox"

interface CheckBoxProps {
  id: number
}

const CheckBox = ({ children, id }: StrictPropsWithChildren<CheckBoxProps>) => {
  const { activeMenu, switchMenu } = useFigure()

  const $isChecked = id === activeMenu

  return (
    <S.CheckBoxWrapper
      $isChecked={$isChecked}
      onClick={() => {
        switchMenu(id)
      }}
      type="button">
      <Icon icon={$isChecked ? "CircleFill" : "CircleEmpty"} />
      <S.CheckBoxText>{children}</S.CheckBoxText>
    </S.CheckBoxWrapper>
  )
}

export default CheckBox
