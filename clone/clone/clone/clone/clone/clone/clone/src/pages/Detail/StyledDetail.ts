import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const TotalWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  max-width: 94.2rem;
  margin: 0 auto;
  padding: 5rem;
`

export const BeforeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  padding: 1rem 1rem 1rem 0;
  color: ${theme.Brand600};
  ${fonts.b3};
`

export const DetailWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
  flex-direction: column;
  width: 100%;
`
export const TitleWrapper = styled.div`
  display: flex;
  gap: 1.8rem;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`
export const Title = styled.div`
  color: ${theme.Netural990};
  ${fonts.h1};
  font-size: 3rem;
  font-weight: 700;
`

export const ContentWrapper = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
`
export const ContentBox = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
`
export const ContentImg = styled.img`
  border-radius: 1.2rem;
  border: 0.1rem solid #d1d6db;
  @media only screen and (max-width: 70rem) {
    display: none;
  }
`
export const ContentInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  gap: 2.4rem;
  width: 100%;
  background: ${theme.Netural100};
  border-radius: 1.2rem;
`

export const ContentInfoTopWrapper = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-direction: column;
  align-items: flex-start;
`
export const ContentInfoTopTitle = styled.span`
  color: ${theme.Netural990};
  ${fonts.b3};
`
export const ContentInfoTopText = styled.span`
  color: ${theme.Netural900};
  ${fonts.b6};
`
export const ContentInfoBottomWrapper = styled.div`
  display: flex;
  gap: 1.1rem;
  align-items: center;
  justify-content: flex-start;
`
export const ContentInfoBottomTitle = styled(ContentInfoTopTitle)``

export const ContentInfoBottomList = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`
export const VideoWrapper = styled.div`
  width: 100%;
  height: 40.8rem;
  border-radius: 1.2rem;
  overflow: hidden;
`
