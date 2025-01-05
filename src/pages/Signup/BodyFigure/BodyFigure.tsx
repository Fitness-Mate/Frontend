import { FormProvider, useForm } from "react-hook-form"

import { useSignupStore } from "@store/useSignupStore"

import Title from "@components/Title/Title"

import Figure from "@pages/Signup/BodyFigure/components/Figure/Figure"
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
      <Title variant="big">
        <Title.SubTopTitle>마지막 단계에요</Title.SubTopTitle>
        체형 정보를 입력해주세요
        <Title.SubBottomTitle>운동 추천에 필요해요</Title.SubBottomTitle>
      </Title>
      <S.BodyFigureWrapper>
        <Ratio
          ratioValue={ratioValue}
          ratioText={ratioText}
          handleRatio={handleRatio}
        />
        <FormProvider {...methods}>
          <Figure />
        </FormProvider>
      </S.BodyFigureWrapper>
      <SignupButton $isValid={formState.isValid}>완료</SignupButton>
    </S.SignupForm>
  )
}

export default BodyFigure
