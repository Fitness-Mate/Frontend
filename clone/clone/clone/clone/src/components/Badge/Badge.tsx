import styled, { Interpolation, css } from "styled-components"

import { StrictPropsWithChildren } from "@typpes/type"

import theme from "@styles/theme"

import { fonts } from "../../styles/theme"

export type BadgeVariant = "default" | "fill"

interface BadgeProps {
  variant?: BadgeVariant
}

const VARIANTS = {
  default: css`
    background: ${theme.Netural200};
    color: ${theme.Netural990};
  `,
  fill: css`
    background: ${theme.Brand200};
    color: ${theme.Brand600};
  `,
}

const Badge = ({
  children,
  variant = "default",
}: StrictPropsWithChildren<BadgeProps>) => {
  const variantStyle = VARIANTS[variant]
  return <StyledBadge $variantStyle={variantStyle}>{children}</StyledBadge>
}

const StyledBadge = styled.div<{ $variantStyle: Interpolation<object> }>`
  border-radius: 0.4rem;
  display: flex;
  padding: 0.6rem 1.3rem;
  justify-content: center;
  align-items: center;
  ${({ $variantStyle }) => $variantStyle};
  ${fonts.b6};
  font-size: 1.4rem;
`

export default Badge
