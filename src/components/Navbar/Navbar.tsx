import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { useUserStore } from "@store/useUserStore"

import NavDropDown from "@components/DropDown/components/NavDropDown"

import logo from "@assets/images/logo.png"

import * as S from "./StyledNavbar"

const Navbar = () => {
  const navigate = useNavigate()
  const { user, isLogin } = useUserStore()
  const [isTop, setIsTop] = useState(true)

  const handleSearch = () => {
    navigate("searchworkout")
  }

  const handleMyPage = () => {
    navigate("mypage")
  }

  const handleRecommend = () => {
    navigate("recommend/bodypart")
  }

  const handleHome = () => {
    navigate("/")
  }

  const handleLogin = () => {
    navigate("/login")
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true)
      } else if (window.scrollY > 0) {
        setIsTop(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [isTop])

  return (
    <S.NavbarContainer $isTop={isTop}>
      <S.LogoButton onClick={handleHome}>
        <S.Logo
          src={logo}
          alt="fitmate 로고"
        />
      </S.LogoButton>
      <S.NavLink>
        <S.NavTextContainer>
          <S.NavButton onClick={handleSearch}>검색하기</S.NavButton>
          <S.NavButton onClick={handleRecommend}>추천받기</S.NavButton>
          <S.NavButton onClick={handleMyPage}>내 운동</S.NavButton>
        </S.NavTextContainer>

        {isLogin ? (
          <NavDropDown userName={user?.userName} />
        ) : (
          <S.LoginButton
            variant="text"
            size="md"
            onClick={handleLogin}>
            로그인
          </S.LoginButton>
        )}
      </S.NavLink>
      <S.NavbarUnderLine $isTop={isTop} />
    </S.NavbarContainer>
  )
}

export default Navbar
