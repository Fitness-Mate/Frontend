import { styled } from "styled-components"

import theme, { fonts } from "@styles/theme"

export const RatioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  padding-top: 6.8rem;
`
export const RatioBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.8rem;
  position: relative;
`
export const RatioTitle = styled.span`
  color: ${theme.Netural990};
  ${fonts.h4};
`
export const RatioBoxLabel = styled.span`
  color: ${theme.Netural800};
  ${fonts.b7};
`

export const RatioBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  color: ${theme.Netural900};
  ${fonts.h4};
`
export const RatioPercentBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 0.8rem;
  padding: 0.6rem;
  gap: 1rem;
  border-radius: 1.2rem;
  background: ${theme.Netural200};
`
export const RatioButtonBox = styled.div`
  display: flex;
  gap: 1rem;
`
export const RatioPercent = styled.span`
  color: ${theme.Netural990};
  ${fonts.h4};
`
export const RatioMessage = styled.span`
  color: ${theme.Netural900};
  font-size: 1.5rem;
  text-align: center;
`

export const RatioSeparator = styled.span`
  position: absolute;
  top: 2.5rem;
  left: 23.5rem;
  color: ${theme.Netural600};
  ${fonts.h3};
`
