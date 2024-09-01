import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 720px;
  width: 100%;
  height: 90px;
  z-index: 500;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${theme.Netural0};
`

export const FooterTopLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  width: 100vw;
  height: 1px;
  background-color: ${theme.Netural300};
  transform: translateX(-50%);
`

export const FooterText = styled.span`
  ${fonts.b3}
  color:${theme.Brand600}
`

export const FooterSubText = styled.span`
  ${fonts.b4}
  color:${theme.Netural800}
`
