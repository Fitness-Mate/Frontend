import { styled } from "styled-components"

import { fonts, theme } from "@styles/theme"

export const SpeechBubbleWrapper = styled.div<{
  $isMultiline: boolean
  $isIcon: boolean
}>`
  position: relative;
  padding: ${({ $isMultiline }) =>
    $isMultiline ? "2rem 3.8rem" : "1.6rem 2.8rem"};
  display: flex;
  flex-direction: column;
  gap: ${({ $isIcon }) => ($isIcon ? "0.8rem" : "0.3rem")};
  justify-content: center;
  align-items: center;
  border-radius: 6.6rem;
  border: 0.1rem solid ${theme.Netural400};
  background: ${theme.Netural0};
  border-collapse: collapse;
  svg {
    position: absolute;
    top: -1.4rem;
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
