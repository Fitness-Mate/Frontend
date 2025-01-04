import styled, { Interpolation } from "styled-components"

import theme from "@styles/theme"

import { fonts } from "../../styles/theme"

interface isCheckedProps {
  $isChecked: boolean
}

export const CheckBoxWrapper = styled.button<isCheckedProps>`
  display: flex;
  width: 100%;
  gap: 1rem;
  padding: 0.6rem 1.8rem;
  align-items: center;
  border-radius: 1.2rem;
  border: ${({ $isChecked }) =>
    $isChecked ? "0.1rem solid #0b98ff" : "0.1rem solid #A2B2C2"};
  background: ${({ $isChecked }) => ($isChecked ? "#ecf7ff" : "#fff")};
  height: 5rem;
`

export const CheckBoxImg = styled.img<isCheckedProps>`
  width: ${({ $isChecked }) => ($isChecked ? "2.4rem" : "2rem")};
  height: ${({ $isChecked }) => ($isChecked ? "2.4rem" : "2rem")};
  margin: ${({ $isChecked }) => ($isChecked ? "0rem" : "0.2rem")};
`
export const CheckBoxText = styled.span`
  ${theme.Netural950};
  text-align: center;
  font-size: 1.6rem;
`

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
