import { useNavigate } from "react-router-dom"

import Button from "@components/Button/Button"

import * as S from "./StyledFallback"

const Fallback = () => {
  const navigate = useNavigate()

  const handleHome = () => {
    navigate("/")
  }

  return (
    <S.FallbackWrapper>
      <S.FallbackTitle>예상치 못한 오류가 발생했습니다</S.FallbackTitle>
      <Button
        variant="main"
        size="lg"
        onClick={handleHome}>
        홈으로 이동
      </Button>
    </S.FallbackWrapper>
  )
}

export default Fallback
