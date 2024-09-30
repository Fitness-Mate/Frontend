import styled, { Interpolation, css } from "styled-components"

import theme, { fonts } from "@styles/theme"

export const StyledButton = styled.button<{
  $sizeStyle: Interpolation<object>
  $variantStyle: Interpolation<object>
}>`
  ${({ $sizeStyle }) => $sizeStyle};
  ${({ $variantStyle }) => $variantStyle};
  display: inline-flex;
  gap: 10px;
  height: fit-content;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
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
    background: ${theme.Brand600};
    color: ${theme.Netural0};
    &:hover {
      background: ${theme.Brand750};
    }
    &:disabled {
      background-color: ${theme.Netural450};
    }
  `,
  weak: css`
    background: ${theme.Brand200};
    color: ${theme.Brand700};
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
