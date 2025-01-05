import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const CompleteNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  width: 100%;
`

export const CompleteNavList = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-top: 6.2rem;
`

export const CompleteNavItem = styled.button`
  display: flex;
  width: 100%;
  padding: 3.2rem 2.6rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 2rem;
  background: ${theme.Netural150};
  text-align: left;
`
export const CompleteNavItemText = styled.div`
  color: ${theme.Netural950};
  ${fonts.h3};
`
export const CompleteNavItemSubText = styled.span`
  color: ${theme.Netural600};
  ${fonts.b4};
`

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
`
