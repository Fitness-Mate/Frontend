import { useNavigate } from "react-router-dom"

import Button from "@components/Button/Button"

import * as S from "./StyledAuthFallback"

const Fallback = () => {
  const navigate = useNavigate()

  const handleHome = () => {
    navigate("/login")
  }

  return (
    <S.FallbackWrapper>
      <S.FallbackTitle>로그인이 필요한 페이지입니다</S.FallbackTitle>
      <Button
        variant="main"
        size="lg"
        onClick={handleHome}>
        로그인하러 이동
      </Button>
    </S.FallbackWrapper>
  )
}

export default Fallback
