import { useNavigate } from "react-router-dom"

import DropDown from "@components/DropDown/DropDown"

import { useLogout } from "@hooks/mutation/useLogout"
import { useDropDown } from "@hooks/useDropDown"

import * as S from "../StyledDropDown"

interface NavDropDownProps {
  userName?: string
}

const NavDropDown = ({ userName }: NavDropDownProps) => {
  const { isOpen, dropDownRef, toggleDropDown } = useDropDown()
  const { mutate: logout } = useLogout()
  const navigate = useNavigate()

  const handleFixProfile = async () => {
    navigate("/mypage/profile")
    toggleDropDown()
  }

  const handleFixBodyInfo = async () => {
    alert("현재 수정중인 페이지입니다!")
    toggleDropDown()
  }

  return (
    <S.DropDownContainer>
      <S.NavNameButton
        ref={dropDownRef}
        onClick={toggleDropDown}>
        {userName}님
      </S.NavNameButton>
      {isOpen && (
        <DropDown position="nav">
          <DropDown.DropDownButton
            variant="grey"
            onClick={handleFixProfile}>
            계정 정보 수정
          </DropDown.DropDownButton>
          <DropDown.DropDownButton
            variant="grey"
            onClick={handleFixBodyInfo}>
            신체 정보 수정
          </DropDown.DropDownButton>
          <S.Line />
          <DropDown.DropDownButton
            variant="grey"
            onClick={() => logout()}>
            로그아웃
          </DropDown.DropDownButton>
        </DropDown>
      )}
    </S.DropDownContainer>
  )
}

export default NavDropDown
