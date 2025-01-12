import { ButtonHTMLAttributes, ReactNode } from "react"

import styled, { Interpolation, css } from "styled-components"

import Icon from "@components/common/Icon/Icon"
import { IconProps } from "@components/common/Icon/Icon"

import theme, { fonts } from "@styles/theme"

export type Variant = "black" | "blue" | "grey"

export type Size = "lg" | "sm"

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

const SIZE = {
  lg: css`
    padding: 0 2.4rem;
    ${fonts.b2};
    gap: 0.8rem;
    height: 5.2rem;
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `,
  sm: css`
    padding: 0 1.6rem;
    ${fonts.b7};
    gap: 0.4rem;
    height: 4rem;
    svg {
      width: 2rem;
      height: 2rem;
    }
  `,
}

export const StyledRoundButton = styled.button<{
  $variantStyle: Interpolation<object>
  $sizeStyle: Interpolation<object>
  $variant: Interpolation<object>
}>`
  ${({ $variantStyle }) => $variantStyle};
  ${({ $sizeStyle }) => $sizeStyle};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  border-radius: 5.6rem;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:disabled {
    cursor: default;
  }
`

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  leftIcon?: IconProps["icon"]
  rightIcon?: IconProps["icon"]
  children: ReactNode
  disabled?: boolean
  isPending?: boolean
  onClick?: (e: React.MouseEvent) => void
}
const RoundButton = ({
  variant = "black",
  size = "lg",
  leftIcon,
  rightIcon,
  children,
  disabled = false,
  isPending = false,
  onClick,
  ...props
}: ButtonProps) => {
  const variantStyle = VARIANTS[variant]
  const sizeStyle = SIZE[size]
  return (
    <StyledRoundButton
      disabled={disabled}
      $variantStyle={variantStyle}
      $sizeStyle={sizeStyle}
      $variant={variant}
      onClick={onClick}
      {...props}>
      {leftIcon && !isPending && <Icon icon={leftIcon} />}
      {children}
      {rightIcon && !isPending && <Icon icon={rightIcon} />}
    </StyledRoundButton>
  )
}

export default RoundButton
