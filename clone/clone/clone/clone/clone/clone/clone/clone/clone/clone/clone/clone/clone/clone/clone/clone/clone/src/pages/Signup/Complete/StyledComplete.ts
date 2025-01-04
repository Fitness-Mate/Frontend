import styled from "styled-components"

import theme from "@styles/theme"

export const CompleteNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  width: 100%;
`

export const CompleteNavList = styled.span`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  margin-top: 5rem;
`

export const CompleteNavItem = styled.button`
  display: flex;
  width: 100%;
  padding: 2.4rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  background: ${theme.Netural100};
  text-align: left;
`
export const CompleteNavItemTitle = styled.div`
  color: ${theme.Netural990};
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 600;
`
export const CompleteNavItemText = styled.span`
  color: ${theme.Netural990};
  font-size: 1.6rem;
`
