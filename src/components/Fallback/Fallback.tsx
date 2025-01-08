import { FallbackProps } from "react-error-boundary"

import Button from "@components/Button/Button"

import * as S from "./StyledFallback"

const Fallback = ({ resetErrorBoundary }: FallbackProps) => {
  const handleHome = () => {
    resetErrorBoundary()
  }

  return (
    <S.FallbackWrapper>
      <S.FallbackTitle>예상치 못한 오류가 발생했어요</S.FallbackTitle>
      <S.FallbackText>홈으로 이동해주세요</S.FallbackText>
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
