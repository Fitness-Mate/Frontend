import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const NavButton = styled.button`
  font-size: 18px;
  padding: 10px 24px;
  border-radius: 12px;
  font-weight: 700;
  color: ${theme.Brand600};
  &:hover {
    background-color: ${theme.Netural200};
  }
`

export const NavDropDownWrapper = styled.div`
  position: relative;
`

export const NavDropDownListWrapper = styled.div`
  width: 200px;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid ${theme.Netural400};
  background-color: ${theme.Netural100};
  position: absolute;
  top: 50px;
  left: -80px;
  padding-top: 23px;
  padding-bottom: 13px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const NavDropDownListTitle = styled.span`
  text-align: center;
  ${fonts.b4}
`

export const NavDropDownList = styled.div`
  display: flex;
  flex-direction: column;
`
