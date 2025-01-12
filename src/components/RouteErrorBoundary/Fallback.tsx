import { useNavigate } from "react-router-dom"

import Button from "@components/common/Button/Button"

import * as S from "./StyledFallback"

interface FallbackProps {
  title: string
  navText?: string
  clickHandler: () => void
}

const Fallback = ({
  title,
  navText = "홈으로",
  clickHandler,
}: FallbackProps) => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <S.FallbackWrapper>
      <S.FallbackImg
        src="https://img.khan.co.kr/news/2023/09/19/news-p.v1.20230919.33040b35d4b248e790e0cf74d0e6601a_P1.webp"
        alt="Fallback 페이지 이미지"
      />
      <S.FallbackTitle>{title}</S.FallbackTitle>
      <S.FallbackButtonWrapper>
        <Button
          variant="weak"
          size="lg"
          onClick={handleBack}>
          돌아가기
        </Button>
        <Button
          variant="grey"
          size="lg"
          onClick={clickHandler}>
          {navText}
        </Button>
      </S.FallbackButtonWrapper>
    </S.FallbackWrapper>
  )
}

export default Fallback
