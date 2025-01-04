import { ButtonHTMLAttributes, ReactNode } from "react"

import styled, { Interpolation, css } from "styled-components"

import Icon from "@components/Icon/Icon"
import { IconProps } from "@components/Icon/Icon"

import theme, { fonts } from "@styles/theme"

export type Variant = "black" | "blue" | "grey"

export type Size = "big" | "middle" | "small"

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
  big: css`
    padding: 1.4rem 2rem 1.4rem 2.4rem;
    ${fonts.b2};
    gap: 0.8rem;
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `,
  middle: css`
    padding: 1.4rem 2rem 1.4rem 1.4rem;
    ${fonts.b4};
    gap: 0.4rem;
    svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `,
  small: css`
    padding: 1rem 1.6rem 1rem 1.2rem;
    ${fonts.b7};
    gap: 0.4rem;
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
  disabled?: boolean
  variant?: Variant
  children: ReactNode
  onClick?: (e: React.MouseEvent) => void
  leftIcon?: IconProps["icon"]
  rightIcon?: IconProps["icon"]
  size?: Size
  isPending?: boolean
}
const RoundButton = ({
  disabled = false,
  variant = "black",
  children,
  onClick,
  leftIcon,
  rightIcon,
  isPending = false,
  size = "big",
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
