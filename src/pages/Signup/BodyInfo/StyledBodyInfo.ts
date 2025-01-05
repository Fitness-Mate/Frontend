import styled, { css } from "styled-components"

import theme, { fonts } from "@styles/theme"

export const SexList = styled.div`
  display: flex;
  align-items: center;
`

export const SexLabel = styled.label<{ $isSelected: boolean }>`
  cursor: pointer;
  display: flex;
  padding: 1.2rem 1.4rem;
  ${fonts.b5};
  color: ${theme.Netural800};
  ${({ $isSelected }) =>
    $isSelected &&
    css`
      border-radius: 0.6rem;
      border: 0.15rem solid ${theme.Brand600};
      color: ${theme.Brand600};
    `}
`
