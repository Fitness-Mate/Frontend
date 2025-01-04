import { StrictPropsWithChildren } from "@typpes/type"

import * as S from "./StyledDropDown"
import { POSITION, VARIANTS } from "./StyledDropDown"

export type Position = "my" | "nav"
export type Variant = "grey" | "red"

interface DropDownProps {
  variant?: Variant
  position?: Position
  onClick?: (e: React.MouseEvent) => void
}

const DropDown = ({
  position,
  children,
}: StrictPropsWithChildren<DropDownProps>) => {
  const positionStyle = position ? POSITION[position] : undefined

  return (
    <S.DropDownWrapper $positionStyle={positionStyle}>
      {children}
    </S.DropDownWrapper>
  )
}

const DropDownButton = ({
  variant = "grey",
  onClick,
  children,
}: StrictPropsWithChildren<DropDownProps>) => {
  const variantStyle = VARIANTS[variant]

  return (
    <S.DropDownButton
      $variantStyle={variantStyle}
      onClick={onClick}>
      {children}
    </S.DropDownButton>
  )
}

DropDown.DropDownButton = DropDownButton

export default DropDown
