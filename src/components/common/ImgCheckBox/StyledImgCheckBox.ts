import styled, { Interpolation } from "styled-components"

import theme from "@styles/theme"

import { fonts } from "../../../styles/theme"

export const ImgCheckBoxWrapper = styled.button<{
  $sizeStyle: Interpolation<object>
}>`
  display: flex;
  flex-direction: column;
  position: relative;
  ${({ $sizeStyle }) => $sizeStyle};
  svg {
    position: absolute;
  }
`

export const ImageCheckBoxImg = styled.img<{
  $borderStyle: Interpolation<object>
}>`
  width: 100%;
  z-index: -1;
  border-radius: 1.4rem;
  ${({ $borderStyle }) => $borderStyle};
  aspect-ratio: 1 / 1;
`

export const ImageCheckBoxText = styled.span`
  color: ${theme.Netural600};
  ${fonts.b3};
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
