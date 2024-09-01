import { styled } from "styled-components"

import { fonts, theme } from "@styles/theme"

export const SpeechBubbleWrapper = styled.div<{
  $isMultiline: boolean
  $isIcon: boolean
}>`
  position: relative;
  padding: ${({ $isMultiline }) => ($isMultiline ? "20px 38px" : "16px 28px")};
  display: flex;
  flex-direction: column;
  gap: ${({ $isIcon }) => ($isIcon ? "8px" : "3px")};
  justify-content: center;
  align-items: center;
  border-radius: 66px;
  border: 1px solid ${theme.Netural800};
  background: ${theme.Netural0};
  border-collapse: collapse;
  .tooltip {
    position: absolute;
    top: -10px;
  }
`

export const SpeechBubbleMainText = styled.span`
  color: ${theme.Netural900};
  ${fonts.h4};
`

export const SpeechBubbleSubText = styled.span`
  color: ${theme.Netural600};
  ${fonts.b6};
`
