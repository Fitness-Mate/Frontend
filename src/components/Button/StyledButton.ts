import styled, { Interpolation, css } from "styled-components"

import theme, { fonts } from "@styles/theme"

export const StyledButton = styled.button<{
  $sizeStyle: Interpolation<object>
  $variantStyle: Interpolation<object>
}>`
  ${(p) => p.$sizeStyle}
  ${(p) => p.$variantStyle}
  display: inline-flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  border-radius: 10px;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:disabled {
    cursor: default;
  }
`

export const SIZES = {
  sm: css`
    padding: 10px 12px;
    ${fonts.b7}
  `,
  md: css`
    padding: 14px 24px;
    ${fonts.b5}
  `,
  lg: css`
    padding: 17px 24px;
    ${fonts.b2}
  `,
}

export const VARIANTS = {
  main: css`
    color: ${theme.Netural0};
    background-color: ${theme.Brand600};
    &:hover {
      background: ${theme.Brand750};
    }
    &:disabled {
      background-color: ${theme.Netural450};
    }
  `,
  weak: css`
    color: ${theme.Brand700};
    background-color: ${theme.Brand200};
    &:hover {
      background: linear-gradient(
          0deg,
          rgba(34, 37, 46, 0.06) 0%,
          rgba(34, 37, 46, 0.06) 100%
        ),
        var(--Brand-Light, #d9eefe);
    }
    &:disabled {
      background-color: ${theme.Brand200};
    }
  `,
  grey: css`
    color: ${theme.Netural800};
    background-color: ${theme.Netural300};
    &:hover {
      background-color: ${theme.Netural400};
    }
    &:disabled {
      background-color: ${theme.Netural200};
    }
  `,
  text: css`
    color: ${theme.Netural800};
    background: none;
    &:hover {
      background-color: ${theme.Netural200};
    }
    &:disabled {
      color: ${theme.Netural500};
    }
  `,
}
