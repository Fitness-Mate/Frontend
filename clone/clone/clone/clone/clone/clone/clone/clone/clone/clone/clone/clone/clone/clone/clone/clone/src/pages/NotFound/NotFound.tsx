import { useNavigate } from "react-router-dom"

import Button from "@components/Button/Button"

import * as S from "./StyledNotFound"

const NotFound = () => {
  const navigate = useNavigate()

  const handleHome = () => {
    navigate("/")
  }

  const handleBack = () => {
    navigate(-1)
  }
  return (
    <S.NotFoundWrapper>
      <S.NotFoundImg
        src="https://img.khan.co.kr/news/2023/09/19/news-p.v1.20230919.33040b35d4b248e790e0cf74d0e6601a_P1.webp"
        alt="404 이미지"
      />
      <S.NotFoundTitle>오류가 발생했어요.</S.NotFoundTitle>
      <S.NotFoundButtonWrapper>
        <Button
          variant="weak"
          size="lg"
          onClick={handleBack}>
          돌아가기
        </Button>
        <Button
          variant="grey"
          size="lg"
          onClick={handleHome}>
          홈으로
        </Button>
      </S.NotFoundButtonWrapper>
    </S.NotFoundWrapper>
  )
}

export default NotFound
