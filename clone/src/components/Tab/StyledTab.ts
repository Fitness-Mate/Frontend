import styled, { Interpolation } from "styled-components"

import theme, { fonts } from "@styles/theme"

export const StyledTab = styled.button<{
  $variantStyle: Interpolation<object>
}>`
  border: none;
  ${(p) => p.$variantStyle}
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const StyledTabCount = styled.span`
  ${fonts.b7}
  color:${theme.Brand700}
`
