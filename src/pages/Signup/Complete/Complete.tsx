// @ts-nocheck
import { useNavigate } from "react-router-dom"

import Button from "@components/Button/Button"

// import rightarrow2 from "@assets/images/rightarrow2.svg"
import { COMPLETE_Nav } from "@pages/Signup/Complete/constants/COMPLETE_NAV"

import * as GS from "../StyledSignup"
import * as S from "./StyledComplete"

const Complete = () => {
  const navigate = useNavigate()
  const handleNavigate = (url) => {
    navigate(url)
  }
  return (
    <GS.SignupWrapper>
      <GS.SignupContainer>
        <GS.SignupTitle>회원가입이 완료되었습니다.</GS.SignupTitle>
        <S.CompleteNavTitle>바로 이용해보세요.</S.CompleteNavTitle>
        <S.CompleteNavList>
          {COMPLETE_Nav.map(([_, nav]) => {
            return (
              <S.CompleteNav>
                <S.CompleteNavItem
                  onClick={() => {
                    handleNavigate(nav.url)
                  }}
                  type="button">
                  <S.CompleteNavItemTitle>
                    {nav.title}
                    <br />
                    <S.CompleteNavItemText>{nav.message}</S.CompleteNavItemText>
                  </S.CompleteNavItemTitle>
                  <S.CompleteNavItemImg
                    src={rightarrow2}
                    alt="회원가입 완료 후 이동 버튼"
                  />
                </S.CompleteNavItem>
              </S.CompleteNav>
            )
          })}
        </S.CompleteNavList>
      </GS.SignupContainer>
      <Button
        onClick={() => {
          handleNavigate("/")
        }}
        variant="main"
        size="lg">
        홈으로
      </Button>
    </GS.SignupWrapper>
  )
}

export default Complete
