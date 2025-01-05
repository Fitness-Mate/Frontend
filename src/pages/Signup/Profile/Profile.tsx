import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { useSignupStore } from "@store/useSignupStore"
import { SIGNUP_INPUTS, SIGNUP_LIST } from "constants/validation"
import { omit } from "lodash"

import Button from "@components/Button/Button"
import Input from "@components/Input/Input"

import { getBirthFormat } from "@pages/Signup/utils/getBirthFormat"

import { formAdapter } from "@utils/formAdapter"

import * as S from "../StyledSignup"

const Profile = () => {
  const { setProfile } = useSignupStore()

  const navigate = useNavigate()

  const { handleSubmit, formState, register, watch, trigger, setValue } =
    useForm<typeof SIGNUP_INPUTS.DEFAULT_VALUES.PROFILE>({
      mode: "onChange",
      defaultValues: SIGNUP_INPUTS.DEFAULT_VALUES["PROFILE"],
    })

  const birthDateValue = watch("birthDate")

  const onSubmit: SubmitHandler<typeof SIGNUP_INPUTS.DEFAULT_VALUES.PROFILE> = (
    formValue,
  ) => {
    const editedProfoile = omit(formValue, ["passwordCheck"])
    setProfile(editedProfoile)
    navigate("/signup/bodyinfo")
  }

  const handleNextPage = () => {
    navigate("/signup/bodyinfo")
  }

  useEffect(() => {
    if (formState.dirtyFields.birthDate) {
      setValue("birthDate", getBirthFormat(birthDateValue))
      trigger("birthDate")
    }
  }, [birthDateValue, setValue, trigger, formState.dirtyFields.birthDate])

  return (
    <S.SignupWrapper>
      <S.SignupTitleWrapper>
        <S.StatusText>1/3단계</S.StatusText>
        <S.SignupTitle>회원정보를 입력해주세요</S.SignupTitle>
      </S.SignupTitleWrapper>
      <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
        {SIGNUP_LIST.map(({ id, name, label, isRequired }) => (
          <Input
            key={id}
            style={{
              marginTop: id === SIGNUP_LIST.length - 1 ? "-3.2rem" : "0",
            }}>
            {label && (
              <Input.Label
                isRequired={isRequired}
                htmlFor={name}>
                {label}
              </Input.Label>
            )}
            <Input.Input
              props={{
                ...formAdapter({
                  register,
                  name,
                  validator: {
                    ...SIGNUP_INPUTS[name],
                    validate: name.includes("password")
                      ? {
                          ...SIGNUP_INPUTS[name].validate,
                          validate: (value) => {
                            if (name === "passwordCheck") {
                              const newPassword = watch("password")
                              return (
                                value === newPassword ||
                                "비밀번호가 일치하지 않습니다."
                              )
                            } else {
                              trigger("passwordCheck")
                              return true
                            }
                          },
                        }
                      : SIGNUP_INPUTS[name].validate,
                  },
                  $isDirty: !!formState.dirtyFields[name],
                  $isError: !!formState.errors[name],
                }),
              }}
            />
            <Input.Error>{formState?.errors[name]?.message}</Input.Error>
          </Input>
        ))}
        <Button
          variant="main"
          size="lg"
          disabled={!!formState.isValid}
          onClick={handleNextPage}>
          다음
        </Button>
      </S.FormWrapper>
    </S.SignupWrapper>
  )
}

export default Profile
