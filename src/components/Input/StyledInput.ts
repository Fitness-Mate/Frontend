// @ts-nocheck
import styled, { css } from "styled-components"

import theme from "@styles/theme"

const getBorderStyle = ($isError, $isDirty) => {
  if (!$isDirty) {
    return ""
  }
  return $isError ? `2px solid ${theme.Error}` : `2px solid ${theme.Brand}`
}

export const InputName = styled.label`
  cursor: default;
  color: ${theme.Black};
  font-size: 18px;
  display: flex;
  gap: 5px;
`

export const EseentialSymbol = styled.span`
  color: ${theme.Error};
  font-size: 18px;
`

export const InputWarning = styled.span`
  color: ${theme.Error};
  font-size: 16px;
`

export const Input = styled.input<Props>`
  &::-webkit-input-placeholder {
    color: ${theme.Gray50};
  }
  background: ${theme.Netural100};
  border-radius: 10px;
  padding: 14px;
  width: 100%;
  ${(props) => css`
    ${Object.keys(props)
      .map((key) => `${key}: ${props[key]};`)
      .join("")}
  `}
  border: ${({ $isError, $isDirty }) => getBorderStyle($isError, $isDirty)};
`

export const CheckBoxGroup = styled.div`
  display: flex;
  gap: 24px;
`

export const Text = styled.span`
  color: var(--Neutral-900, #333d4b);
  font-size: 15px;
  font-weight: 400;
`
