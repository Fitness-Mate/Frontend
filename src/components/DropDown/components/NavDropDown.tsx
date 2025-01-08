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

  const handleSearch = () => {
    navigate("searchworkout")
  }

  const handleMyPage = () => {
    navigate("mypage")
  }

  const handleRecommend = () => {
    navigate("recommend/bodypart")
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
            onClick={handleSearch}>
            검색하기
          </DropDown.DropDownButton>
          <DropDown.DropDownButton
            variant="grey"
            onClick={handleRecommend}>
            추천 받기
          </DropDown.DropDownButton>
          <DropDown.DropDownButton
            variant="grey"
            onClick={handleMyPage}>
            내 운동
          </DropDown.DropDownButton>
          <DropDown.DropDownButton
            variant="grey"
            onClick={handleFixProfile}>
            계정 정보 수정
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
