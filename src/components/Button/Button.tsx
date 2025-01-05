import { ButtonHTMLAttributes } from "react"

import { SIZES, StyledButton, VARIANTS } from "@components/Button/StyledButton"

import { StrictPropsWithChildren } from "@typpes/type"

export type Variant = "main" | "weak" | "grey" | "text"
export type Size = "sm" | "md" | "lg" | "full"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  size?: Size
  variant?: Variant
  onClick?: (e: React.MouseEvent) => void
}

const Button = ({
  disabled = false,
  size = "md",
  variant = "main",
  children,
  onClick,
  ...props
}: StrictPropsWithChildren<ButtonProps>) => {
  const sizeStyle = SIZES[size]
  const variantStyle = VARIANTS[variant]
  return (
    <StyledButton
      disabled={disabled}
      $sizeStyle={sizeStyle}
      $variantStyle={variantStyle}
      onClick={onClick}
      {...props}>
      {children}
    </StyledButton>
  )
}

export default Button
