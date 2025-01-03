import { useNavigate } from "react-router-dom"

import Button from "@components/Button/Button"

import { StrictPropsWithChildren } from "@typpes/type"

import * as S from "../StyledSignup"

interface SignupButtonProps {
  $isValid: boolean
}

const SignupButton = ({
  $isValid,
  children,
}: StrictPropsWithChildren<SignupButtonProps>) => {
  const navigate = useNavigate()

  const handleBackPage = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate(-1)
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
        disabled={!$isValid}
        size="lg"
        variant="main"
        type="submit">
        {children}
      </Button>
    </S.ButtonContainer>
  )
}

export default SignupButton
