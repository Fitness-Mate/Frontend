import styled, { Interpolation } from "styled-components"

import theme, { fonts } from "@styles/theme"

export const StyledTab = styled.button<{
  $variantStyle: Interpolation<object>
  $width: Interpolation<object>
}>`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: ${({ $width }) => $width};
  ${(p) => p.$variantStyle};
`

export const StyledTabCount = styled.span`
  ${fonts.b7}
  color:${theme.Brand700}
`
