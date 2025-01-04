import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const FooterInfoContentWrapper = styled.div`
  display: flex;
  gap: 3.2rem;
`
export const FooterInfoContentTitle = styled.p`
  color: ${theme.Netural990};
  ${fonts.b7};
`
export const FooterInfoContent = styled.p`
  color: ${theme.Netural800};
  font-size: 1.4rem;
  font-weight: 400;
`

export const FooterInfoContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`

export const FooterInfoSubContentWrapper = styled.div`
  display: flex;
  gap: 1.8rem;
`
export const FooterInfoSubContentTitle = styled.p`
  color: ${theme.Netural500};
  font-size: 1.4rem;
  font-weight: 400;
`

export const Footer = styled.div`
  width: 100vw;
  background: ${theme.Netural200};
`
export const FooterWrapper = styled.div`
  display: flex;
  top: 11.2rem;
  padding: 5%;
  flex-direction: column;
  gap: 3.5rem;
  img {
    width: 6rem;
  }
`
export const FooterInfoList = styled.div`
  display: flex;
  gap: 13.3rem;
  flex-wrap: wrap;
`
