import { ButtonHTMLAttributes } from "react"

import { styled } from "styled-components"

import Icon, { ICON_MAP } from "@components/Icon/Icon"

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: keyof typeof ICON_MAP
  size?: number
  stroke?: string
  color?: string
}

const IconButton = ({
  icon,
  size = 15,
  stroke,
  color,
  ...props
}: IconButtonProps) => {
  return (
    <ButtonWrapper
      type="button"
      {...props}>
      <Icon
        icon={icon}
        size={size}
        stroke={stroke}
        color={color}
        aria-hidden
      />
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  &:disabled {
    cursor: default;
  }
`

export default IconButton
