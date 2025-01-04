import { useNavigate } from "react-router-dom"

import Button from "@components/Button/Button"
import Icon from "@components/Icon/Icon"

import * as GS from "../StyledSignup"
import * as S from "./StyledComplete"

const COMPLETE_NAV = [
  {
    title: "추천 받기",
    message: "AI가 신체 정보에 알맞은 운동/보조제를 추천해드려요.",
    url: "/recommend/bodypart",
  },
  {
    title: "루틴 만들기",
    message: "추천 받은 운동으로 루틴을 만들어 보세요.",
    url: "/mypage",
  },
  {
    title: "검색하기",
    message: "다양한 종류의 운동/보조제를 검색해보세요.",
    url: "/searchworkout",
  },
]

const Complete = () => {
  const navigate = useNavigate()
  const handleNavigate = (url: string) => {
    navigate(url)
  }

  return (
    <GS.SignupWrapper>
      <GS.SignupContainer>
        <GS.SignupTitle>회원가입이 완료되었습니다.</GS.SignupTitle>
        <S.CompleteNavList>
          {COMPLETE_NAV.map(({ title, message, url }) => (
            <S.CompleteNav key={url}>
              <S.CompleteNavItem
                onClick={() => {
                  handleNavigate(url)
                }}
                type="button">
                <S.CompleteNavItemTitle>
                  {title}
                  <br />
                  <S.CompleteNavItemText>{message}</S.CompleteNavItemText>
                </S.CompleteNavItemTitle>
                <Icon
                  icon="RightArrowBig"
                  size={11}
                />
              </S.CompleteNavItem>
            </S.CompleteNav>
          ))}
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
