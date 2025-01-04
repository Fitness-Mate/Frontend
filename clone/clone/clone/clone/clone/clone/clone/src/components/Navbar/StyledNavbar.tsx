import styled from "styled-components"

import Button from "@components/Button/Button"

import theme from "@styles/theme"

export const NavbarContainer = styled.div<{ $isHome: boolean }>`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
  height: 6.4rem;
  display: flex;
  margin: 0 auto;
  padding: 0 5%;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ $isHome }) =>
    $isHome ? "transparent" : theme.Netural0};
`

export const LogoButton = styled.button``
export const Logo = styled.img`
  width: 8.8rem;
`

export const NavLink = styled.div`
  display: flex;
  align-items: center;
`

export const NavTextContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`

export const NavButton = styled(Button).attrs({
  variant: "text",
})`
  color: ${theme.Netural990};
  padding: 1rem 1.4rem;
  @media (max-width: 100rem) {
    display: none;
  }
  border-radius: 1.2rem;
  &:hover {
    background-color: ${theme.Netural200};
  }
`

export const LoginButton = styled(Button)`
  color: ${({ color }) => color || theme.Netural800};
`

export const NavbarUnderLine = styled.div<{ $isHome: boolean }>`
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 100vw;
  height: 0.1rem;
  background-color: ${({ $isHome }) => ($isHome ? "none" : theme.Netural200)};
  transform: translateX(-50%);
`
