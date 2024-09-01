import styled, { Interpolation } from "styled-components"

import theme from "@styles/theme"

import { fonts } from "../../styles/theme"

interface isCheckedProps {
  $isChecked: boolean
}

export const CheckBoxWrapper = styled.button<isCheckedProps>`
  display: flex;
  width: 100%;
  gap: 10px;
  padding: 6px 18px;
  align-items: center;
  border-radius: 12px;
  border: ${({ $isChecked }) =>
    $isChecked ? `1px solid #0b98ff` : `1px solid #A2B2C2`};
  background: ${({ $isChecked }) => ($isChecked ? "#ecf7ff" : "#fff")};
  height: 50px;
`

export const CheckBoxImg = styled.img<isCheckedProps>`
  width: ${({ $isChecked }) => ($isChecked ? "24px" : "20px")};
  height: ${({ $isChecked }) => ($isChecked ? "24px" : "20px")};
  margin: ${({ $isChecked }) => ($isChecked ? "0px" : "2px")};
`
export const CheckBoxText = styled.span`
  color: var(--Neutral-950, #272e38);
  text-align: center;
  font-size: 16px;
`

export const FigureCheckBoxWrapper = styled.button<isCheckedProps>`
  display: flex;
  width: 100%;
  gap: 10px;
  padding: 6px 18px;
  align-items: center;
  border-radius: 12px;
  background: ${({ $isChecked }) => ($isChecked ? "#f2f4f6" : "#fff")};
  height: 50px;
  &:hover {
    background: ${({ $isChecked }) =>
      $isChecked ? `#f2f4f6` : `${theme.Netural200}`};
  }
`

export const FigureCheckBoxText = styled.span<isCheckedProps>`
  color: ${({ $isChecked }) => ($isChecked ? "#272e38" : "#6b7684")};
  text-align: center;
  font-size: 14px;
`

export const ImgCheckBoxWrapper = styled.button<{
  $sizeStyle: Interpolation<object>
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  border-radius: 14px;
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
