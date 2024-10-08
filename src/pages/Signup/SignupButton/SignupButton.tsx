import { useNavigate } from "react-router-dom"

import Button from "@components/Button/Button"

import * as S from "../StyledSignup"

interface SignupButtonProps {
  nextUrl?: string
  $isValid: boolean
}

const SignupButton = ({ $isValid, nextUrl }: SignupButtonProps) => {
  const navigate = useNavigate()

  const handleBackPage = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate(-1)
  }

  const handleNextPage = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate(`/signup/${nextUrl}`)
  }

  return (
    <S.ButtonContainer>
      <Button
        onClick={handleBackPage}
        variant="weak"
        size="lg">
        이전
      </Button>
      <Button
        type="submit"
        onClick={handleNextPage}
        variant="main"
        disabled={!$isValid}
        size="lg">
        다음으로
      </Button>
    </S.ButtonContainer>
  )
}

export default SignupButton
