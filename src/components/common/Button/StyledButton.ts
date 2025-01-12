import styled, { Interpolation, css } from "styled-components"

import theme, { fonts } from "@styles/theme"

export const StyledButton = styled.button<{
  $sizeStyle: Interpolation<object>
  $variantStyle: Interpolation<object>
}>`
  width: fit-content;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 1rem;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 auto;
  &:disabled {
    cursor: default;
  }
  ${({ $sizeStyle }) => $sizeStyle};
  ${({ $variantStyle }) => $variantStyle};
`

export const SIZES = {
  sm: css`
    padding: 0 1.2rem;
    ${fonts.b7};
    height: 3.9rem;
  `,
  md: css`
    padding: 0 3.6rem;
    ${fonts.b5};
    height: 4.9rem;
  `,
  lg: css`
    padding: 0 4.5rem;
    ${fonts.b2};
    height: 5.7rem;
  `,
  full: css`
    padding: 1.7rem 2.4rem;
    ${fonts.b2};
    width: 100%;
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
