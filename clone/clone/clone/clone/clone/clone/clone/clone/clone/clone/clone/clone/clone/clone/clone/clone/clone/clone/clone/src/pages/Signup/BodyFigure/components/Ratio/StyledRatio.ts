import { styled } from "styled-components"

import theme from "@styles/theme"

export const RatioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.6rem;
`
export const RatioBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const RatioTitle = styled.span`
  color: ${theme.Netural990};
  font-size: 1.8rem;
`
export const RatioBox = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-end;
`
export const RatioBoxTitle = styled.span`
  color: ${theme.Netural800};
  font-size: 1.5rem;
  font-weight: 600;
`

export const RatioContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const RatioPercentBox = styled.div`
  width: 100%;
  border-radius: 0.8rem;
  padding: 1.2rem;
  border: 0.1rem solid ${theme.Netural200};
  background: ${theme.Netural100};
`
export const RatioButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const RatioPercent = styled.span`
  color: ${theme.Netural990};
  font-size: 3rem;
`
export const RatioMessage = styled.span`
  color: ${theme.Netural900};
  font-size: 1.5rem;
  text-align: center;
`
