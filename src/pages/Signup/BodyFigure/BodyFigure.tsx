import { FormProvider, useForm } from "react-hook-form"

import { useSignupStore } from "@store/useSignupStore"

import styled from "styled-components"

import Figure from "@pages/Signup/BodyFigure/components/Figure/Figure"
import { FigureProvider } from "@pages/Signup/BodyFigure/components/Figure/FigureContext"
import Ratio from "@pages/Signup/BodyFigure/components/Ratio/Ratio"
import SignupButton from "@pages/Signup/SignupButton/SignupButton"

import { BodyFigureData } from "@typpes/type"

import { usePostSignup } from "@hooks/mutation/usePostSignup"
import { useRatio } from "@hooks/useRatio"

import * as S from "../StyledSignup"

const BodyFigure = () => {
  const { ratioValue, ratioText, handleRatio } = useRatio()

  const { mutate } = usePostSignup()

  const methods = useForm<BodyFigureData>({
    mode: "onChange",
  })

  const { formState, handleSubmit } = methods
  const { profile, bodyinfo } = useSignupStore()

  const onSubmit = async (bodyfigureData: BodyFigureData) => {
    const submission = {
      ...profile,
      ...bodyinfo,
      ...{
        upDownBalance: ratioValue / 10.0,
        ...bodyfigureData,
      },
    }

    mutate(submission)
  }

  return (
    <S.SignupForm onSubmit={handleSubmit(onSubmit)}>
      <S.SignupTitleWrapper>
        <S.StatusText>3/3단계</S.StatusText>
        <S.SignupTitle>체형 정보를 입력해주세요</S.SignupTitle>
      </S.SignupTitleWrapper>
      <BodyFigureWrapper>
        <Ratio
          ratioValue={ratioValue}
          ratioText={ratioText}
          handleRatio={handleRatio}
        />
        <FigureProvider>
          <FormProvider {...methods}>
            <Figure />
          </FormProvider>
        </FigureProvider>
      </BodyFigureWrapper>
      <SignupButton $isValid={formState.isValid}>회원가입 완료</SignupButton>
    </S.SignupForm>
  )
}

export default BodyFigure

const BodyFigureWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`
