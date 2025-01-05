import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

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

  const { formState, handleSubmit, register, setValue, watch } = methods
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

  const handleSex = (sex: string) => {
    setValue("sex", sex)
  }

  const sexValue = watch("sex")

  return (
    <S.SignupWrapper>
      <S.SignupTitleWrapper>
        <S.StatusText>2/3단계</S.StatusText>
        <S.SignupTitle>신체 정보를 입력해주세요</S.SignupTitle>
      </S.SignupTitleWrapper>
      <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Input>
          <Input.Label htmlFor="성별">성별</Input.Label>
          <S.SexList>
            {SEX_GROUP.map(({ name, id }) => (
              <Fragment key={id}>
                <S.SexLabel
                  htmlFor={name}
                  $isSelected={sexValue === name}>
                  {name}
                </S.SexLabel>
                <input
                  type="radio"
                  id={name}
                  name="sex"
                  onChange={() => handleSex(name)}
                  style={{ display: "none " }}
                />
              </Fragment>
            ))}
          </S.SexList>
        </Input>
        {BODYINFO_LIST.map(({ id, label, name }) => (
          <Input key={id}>
            <Input.Label htmlFor={name}>{label}</Input.Label>
            <Input.Input
              props={{
                ...formAdapter({
                  register,
                  validate: SIGNUP_INPUTS[name].validate,
                  name,
                  $isDirty: !!formState.dirtyFields[name],
                  $isError: !!formState.errors[name],
                }),
                ...SIGNUP_INPUTS[name].attributes,
              }}
            />
            <Input.Error>{formState?.errors[name]?.message}</Input.Error>
          </Input>
        ))}
        <SignupButton $isValid={formState.isValid}>다음</SignupButton>
      </S.FormWrapper>
    </S.SignupWrapper>
  )
}

export default BodyInfo
