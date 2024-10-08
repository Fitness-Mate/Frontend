import { useNavigate } from "react-router-dom"

import Button from "@components/Button/Button"

import authAPI from "@apis/domain/auth"

import { useDropDown } from "@hooks/useDropDown"

import * as S from "./StyledNavModal"

interface NavDropDownProps {
  userName?: string
}

const NavDropDown = ({ userName }: NavDropDownProps) => {
  const navigate = useNavigate()
  const { isOpen, dropDownRef, toggleDropDown } = useDropDown()

  const handleLogout = async () => {
    try {
      await authAPI.logout()
      localStorage.clear()
      navigate("/")
      window.location.reload()
    } catch (err) {
      localStorage.clear()
      navigate("/")
      window.location.reload()
    }
  }

  const handleFixProfile = async () => {
    alert("현재 수정중인 페이지입니다!")
    // navigate("/mypage/fixprofile")
    toggleDropDown()
  }

  const handleFixBodyInfo = async () => {
    alert("현재 수정중인 페이지입니다!")
    // navigate("/mypage/fixbodyinfo")
    toggleDropDown()
  }

  return (
    <S.NavDropDownWrapper ref={dropDownRef}>
      <S.NavButton onClick={toggleDropDown}>{userName}님</S.NavButton>
      {isOpen && (
        <S.NavDropDownListWrapper>
          <S.NavDropDownListTitle>
            안녕하세요.
            <br />
            {userName}님!
          </S.NavDropDownListTitle>
          <S.NavDropDownList>
            <Button
              variant="text"
              onClick={handleLogout}>
              로그아웃
            </Button>
            <Button
              variant="text"
              onClick={handleFixProfile}>
              계정 정보 수정
            </Button>
            <Button
              variant="text"
              onClick={handleFixBodyInfo}>
              신체 정보 수정
            </Button>
          </S.NavDropDownList>
        </S.NavDropDownListWrapper>
      )}
    </S.NavDropDownWrapper>
  )
}

export default NavDropDown
