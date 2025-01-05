import { useNavigate } from "react-router-dom"

import Button from "@components/Button/Button"
import Icon from "@components/Icon/Icon"
import Title from "@components/Title/Title"

import * as GS from "../StyledSignup"
import * as S from "./StyledComplete"

const COMPLETE_NAV = [
  {
    title: "추천 받기",
    message: "AI가 신체 정보에 알맞은 운동/보조제를 추천해드려요",
    url: "/recommend/bodypart",
  },
  {
    title: "검색하기",
    message: "다양한 종류의 운동/보조제를 검색해보세요",
    url: "/searchworkout",
  },
  {
    title: "루틴 관리하기",
    message: "추천 받은 운동으로 루틴을 만들어 보세요",
    url: "/mypage",
  },
]

const Complete = () => {
  const navigate = useNavigate()
  const handleNavigate = (url: string) => {
    navigate(url)
  }

  return (
    <GS.SignupWrapper>
      <S.SignupContainer>
        <Title variant="midA">
          회원가입을 완료했어요
          <Title.SubBottomTitle>바로 이용해보세요</Title.SubBottomTitle>
        </Title>
        <S.CompleteNavList>
          {COMPLETE_NAV.map(({ title, message, url }) => (
            <S.CompleteNav key={url}>
              <S.CompleteNavItem
                onClick={() => {
                  handleNavigate(url)
                }}
                type="button">
                <S.CompleteNavItemText>
                  {title}
                  <br />
                  <S.CompleteNavItemSubText>{message}</S.CompleteNavItemSubText>
                </S.CompleteNavItemText>
                <Icon
                  icon="RightArrowBig"
                  size={11}
                />
              </S.CompleteNavItem>
            </S.CompleteNav>
          ))}
        </S.CompleteNavList>
      </S.SignupContainer>
      <Button
        onClick={() => {
          handleNavigate("/")
        }}
        variant="main"
        size="md">
        홈으로
      </Button>
    </GS.SignupWrapper>
  )
}

export default Complete
