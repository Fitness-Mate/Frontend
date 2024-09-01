import styled from "styled-components"

import Button from "@components/Button/Button"

import theme from "@styles/theme"

export const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  max-width: 1920px;
  width: 100%;
  z-index: 999;
  height: 64px;
  display: flex;
  margin: 0 auto;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.Netural0};
`

export const LogoButton = styled.button``
export const Logo = styled.img`
  width: 88px;
`

export const NavLink = styled.div`
  display: flex;
  align-items: center;
`

export const NavTextContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const NavButton = styled(Button).attrs({
  variant: "text",
})`
  color: ${theme.Netural990};
  padding: 10px 14px;
  @media (max-width: 1000px) {
    display: none;
  }
  border-radius: 12px;
  &:hover {
    background-color: ${theme.Netural200};
  }
`

export const LoginButton = styled(Button)`
  color: ${({ color }) => color || theme.Netural800};
`

export const NavbarUnderLine = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100vw;
  height: 1px;
  background-color: ${theme.Netural200};
  transform: translateX(-50%);
`
