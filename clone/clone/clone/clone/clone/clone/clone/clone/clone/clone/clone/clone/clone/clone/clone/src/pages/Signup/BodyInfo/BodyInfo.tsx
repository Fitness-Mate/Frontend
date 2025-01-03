import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { useSignupStore } from "@store/useSignupStore"
import { BODYINFO_LIST, SEX_GROUP, SIGNUP_INPUTS } from "constants/validation"

import Input from "@components/Input/Input"

import SignupButton from "@pages/Signup/SignupButton/SignupButton"

import { BodyInfoPayload } from "@typpes/type"

import { formAdapter } from "@utils/formAdapter"

import * as S from "../StyledSignup"

const BodyInfo = () => {
  const methods = useForm<BodyInfoPayload>({
    mode: "onChange",
  })

  const { formState, handleSubmit, register } = methods
  const { setBodyInfo } = useSignupStore()
  const navigate = useNavigate()

  const onSubmit = (bodyInfoForm: BodyInfoPayload) => {
    const { height, weight } = bodyInfoForm
    if (formState.isValid) {
      setBodyInfo({
        ...bodyInfoForm,
        height: Number(height),
        weight: Number(weight),
      })
      navigate("/signup/bodyfigure")
    }
  }

  return (
    <S.SignupWrapper>
      <S.SignupTitleWrapper>
        <S.StatusText>2/3단계</S.StatusText>
        <S.SignupTitle>신체 정보를 입력해주세요</S.SignupTitle>
      </S.SignupTitleWrapper>
      <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Input>
          <Input.Label
            isRequired
            htmlFor="sex">
            성별
          </Input.Label>
          <Input.Select
            name="sex"
            list={SEX_GROUP}
            methods={methods}
          />
        </Input>
        {BODYINFO_LIST.map(({ id, label, name }) => (
          <Input key={id}>
            <Input.Label
              isRequired
              htmlFor={name}>
              {label}
            </Input.Label>
            <Input.Input
              props={{
                ...formAdapter({
                  register,
                  validator: SIGNUP_INPUTS[name],
                  name,
                  $isDirty: !!formState.dirtyFields[name],
                  $isError: !!formState.errors[name],
                }),
              }}
            />
            <Input.Error>{formState?.errors[name]?.message}</Input.Error>
          </Input>
        ))}
        <SignupButton $isValid={formState.isValid}>다음으로</SignupButton>
      </S.FormWrapper>
    </S.SignupWrapper>
  )
}

export default BodyInfo
