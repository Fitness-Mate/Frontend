import { ButtonHTMLAttributes } from "react"

import styled, { Interpolation, css } from "styled-components"

import Icon from "@components/Icon/Icon"
import { IconPropsType } from "@components/Icon/Icon"

import theme, { fonts } from "@styles/theme"

export type Variant = "black" | "blue" | "grey"

const VARIANTS = {
  black: css`
    color: ${theme.Netural0};
    background-color: ${theme.Netural900};
    &:disabled {
      background-color: ${theme.Netural500};
    }
  `,
  blue: css`
    color: ${theme.Netural0};
    background-color: ${theme.Brand600};
    &:disabled {
      background-color: ${theme.Netural450};
    }
  `,
  grey: css`
    color: ${theme.Netural800};
    background-color: ${theme.Netural300};
    &:disabled {
      color: ${theme.Netural500};
      background-color: ${theme.Netural200};
      path {
        fill: ${theme.Netural500};
      }
    }
  `,
}
export const StyledRoundButton = styled.button<{
  $variantStyle: Interpolation<object>
  $variant: Interpolation<object>
}>`
  ${(p) => p.$variantStyle}
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  padding: 14px 20px;
  border-radius: 56px;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${fonts.b2}
  &:disabled {
    cursor: default;
  }
`

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  variant?: Variant
  children: string
  onClick?: (e: React.MouseEvent) => void
  leftIcon?: IconPropsType["icon"]
  rightIcon?: IconPropsType["icon"]
}
const RoundButton = ({
  disabled = false,
  variant = "black",
  children,
  onClick,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  const variantStyle = VARIANTS[variant]
  return (
    <StyledRoundButton
      disabled={disabled}
      $variantStyle={variantStyle}
      $variant={variant}
      onClick={onClick}
      {...props}>
      {leftIcon && <Icon icon={leftIcon} />}
      {children}
      {rightIcon && <Icon icon={rightIcon} />}
    </StyledRoundButton>
  )
}

export default RoundButton
