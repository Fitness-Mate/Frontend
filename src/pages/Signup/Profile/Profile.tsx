import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { useSignupStore } from "@store/useSignupStore"
import { SIGNUP_INPUTS, SIGNUP_LIST } from "constants/validation"
import { omit } from "lodash"

import Button from "@components/common/Button/Button"
import Input from "@components/common/Input/Input"
import Title from "@components/common/Title/Title"

import { getBirthFormat } from "@pages/Signup/utils/getBirthFormat"

import { formAdapter } from "@utils/formAdapter"

import * as GS from "../StyledSignup"
import * as S from "./StyledProfile"

const Profile = () => {
  const { setProfile } = useSignupStore()

  const navigate = useNavigate()

  const {
    handleSubmit,
    formState,
    register,
    watch,
    trigger,
    setValue,
    setError,
    clearErrors,
    getValues,
  } = useForm<typeof SIGNUP_INPUTS.DEFAULT_VALUES.PROFILE>({
    mode: "onChange",
    defaultValues: SIGNUP_INPUTS.DEFAULT_VALUES["PROFILE"],
  })

  const birthDateValue = watch("birthDate")
  const passwordValue = watch("password")
  const passwordCheckValue = watch("passwordCheck")

  const onSubmit: SubmitHandler<typeof SIGNUP_INPUTS.DEFAULT_VALUES.PROFILE> = (
    formValue,
  ) => {
    const editedProfoile = omit(formValue, ["passwordCheck"])
    setProfile(editedProfoile)
    navigate("/signup/bodyinfo")
  }

  useEffect(() => {
    if (formState.dirtyFields.birthDate) {
      setValue("birthDate", getBirthFormat(birthDateValue))
      trigger("birthDate")
    }
  }, [birthDateValue, setValue, trigger, formState.dirtyFields.birthDate])

  useEffect(() => {
    if (passwordValue === passwordCheckValue) {
      clearErrors("passwordCheck")
    } else {
      setError("passwordCheck", {
        type: "password-mismatch",
        message: "비밀번호가 일치하지 않습니다",
      })
    }
  }, [clearErrors, setError, passwordValue, passwordCheckValue, watch])

  return (
    <GS.SignupWrapper>
      <Title variant="big">
        <Title.SubTopTitle>1/3단계</Title.SubTopTitle>
        회원정보를 입력해주세요
        <Title.SubBottomTitle>운동 추천에 필요해요</Title.SubBottomTitle>
      </Title>
      <GS.FormWrapper onSubmit={handleSubmit(onSubmit)}>
        {SIGNUP_LIST.map(({ id, name, label }) => (
          <Input
            key={id}
            style={{
              marginTop: id === SIGNUP_LIST.length - 1 ? "-3.2rem" : "0",
            }}>
            {label && <Input.Label htmlFor={name}>{label}</Input.Label>}
            <Input.Input
              props={{
                ...formAdapter({
                  register,
                  name,
                  validate:
                    name === "passwordCheck"
                      ? {
                          validate: (value) => {
                            const { password } = getValues()
                            return (
                              password === value ||
                              "비밀번호가 일치하지 않습니다"
                            )
                          },
                        }
                      : SIGNUP_INPUTS[name].validate,
                }),
                $isDirty: !!formState.dirtyFields[name],
                $isError: !!formState.errors[name],
                ...SIGNUP_INPUTS[name].attributes,
              }}
            />
            <Input.Error>{formState?.errors[name]?.message}</Input.Error>
          </Input>
        ))}
        <S.ButtonContainer>
          <Button
            variant="main"
            size="lg"
            disabled={!formState.isValid}
            type="submit">
            다음
          </Button>
        </S.ButtonContainer>
      </GS.FormWrapper>
    </GS.SignupWrapper>
  )
}

export default Profile
