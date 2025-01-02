import styled, { Interpolation } from "styled-components"

import theme, { fonts } from "@styles/theme"

export const BottomWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 9rem;
  z-index: 500;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background: ${theme.Netural0};
`
export const BottomInner = styled.div<{ $flex: Interpolation<object> }>`
  display: flex;
  align-items: center;
  max-width: 72rem;
  width: 100%;
  margin: 0 auto;
  justify-content: ${({ $flex }) => $flex};
`

export const BottomTopLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  width: 100vw;
  height: 0.1rem;
  background-color: ${theme.Netural300};
  transform: translateX(-50%);
`

export const BottomText = styled.span`
  ${fonts.b3};
  color: ${theme.Brand600};
`

export const BottomSubText = styled.span`
  ${fonts.b4};
  color: ${theme.Netural800};
`
