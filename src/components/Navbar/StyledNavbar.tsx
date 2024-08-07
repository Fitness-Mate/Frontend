// < layout 스타일 >
import styled from "styled-components"

import theme from "@styles/theme"

export const NavbarContainer = styled.div<Props>`
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
  background-color: ${theme.White};
  backdrop-filter: ${({ $isLoginModal, $isCancleModal, $isRecommend }) =>
    $isLoginModal || $isCancleModal || $isRecommend ? "none" : "blur(4px)"};
  .nav-logo {
    width: 93px;
  }
`

export const NavLink = styled.div`
  display: flex;
  gap: 24px;
`

export const NavTextContainer = styled.div`
  display: flex;
  gap: 8px;
  .fa-bars {
    display: none;
    align-items: center;
    font-size: 25px;
    cursor: pointer;
    @media (max-width: 1000px) {
      display: flex;
    }
  }
`

export const NavButton = styled.button`
  color: ${theme.Black};
  display: flex;
  padding: 10px 14px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 150%; /* 22.5px */
  letter-spacing: -0.3px;
  @media (max-width: 1000px) {
    display: none;
  }
  border-radius: 12px;
  &:hover {
    background-color: ${theme.Gray10};
  }
`

export const NavLoginButton = styled(NavButton)`
  background: ${theme.BrandLight};
  color: ${theme.Brand};
  padding: 10px 24px;
  display: block;
  border-radius: 5px;
`
export const navbar = styled.div`
  .likes__wrapper {
    display: flex;
    align-content: center;
    justify-content: center;
  }

  .likes__relavance {
    position: relative;
    padding: 0 80px;
  }

  .likes__list {
    position: absolute;
    box-sizing: border-box;
    overflow-y: scroll;
    max-height: 150px;
    left: 0%;
    background: white;
    padding: 10px;
    border: 1px solid grey;
    box-shadow: 0 0 2px 2px grey;
  }
`
