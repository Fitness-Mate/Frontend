import { ChangeEvent } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { useSignupStore } from "@store/useSignupStore"
import { SIGNUP_INPUTS } from "constants/validation"
import { omit } from "lodash"

import Input from "@components/Input/Input"

import SignupButton from "@pages/Signup/SignupButton/SignupButton"
import { createSignupList } from "@pages/Signup/utils/createSignupList"
import { getBirthFormat } from "@pages/Signup/utils/getBirthFormat"

import { formAdapter } from "@utils/formAdapter"

import * as S from "../StyledSignup"

const Profile = () => {
  const { setProfile } = useSignupStore()

  const navigate = useNavigate()

  const { handleSubmit, formState, register, getValues, trigger, setValue } =
    useForm<typeof SIGNUP_INPUTS.DEFAULT_VALUES.PROFILE>({
      mode: "onChange",
      defaultValues: SIGNUP_INPUTS.DEFAULT_VALUES["PROFILE"],
    })
  const onSubmit: SubmitHandler<typeof SIGNUP_INPUTS.DEFAULT_VALUES.PROFILE> = (
    formValue,
  ) => {
    const editedProfoile = omit(formValue, ["passwordCheck"])
    setProfile(editedProfoile)
    navigate("/signup/bodyinfo")
  }

  const triggerPasswordCheck = (e: ChangeEvent<HTMLInputElement>) => {
    register("password").onChange(e)
    if (formState.dirtyFields.passwordCheck) {
      trigger("passwordCheck")
    }
  }

  const handleBirthDate = (e: ChangeEvent<HTMLInputElement>) => {
    register("birthDate").onChange(e)
    setValue("birthDate", getBirthFormat(e.target.value))
    trigger("birthDate")
  }

  const SIGNUP_LIST = createSignupList(handleBirthDate, triggerPasswordCheck)

  const checkPassWord = (value: string) =>
    value === getValues("password") || "비밀번호가 일치하지 않습니다."

  return (
    <S.SignupWrapper>
      <S.SignupTitleWrapper>
        <S.StatusText>1/3단계</S.StatusText>
        <S.SignupTitle>회원 정보를 입력해주세요</S.SignupTitle>
      </S.SignupTitleWrapper>
      <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
        {SIGNUP_LIST.map(({ id, name, label, isRequired, onChange }) => (
          <Input key={id}>
            <Input.Label
              isRequired={isRequired}
              htmlFor={name}>
              {label}
            </Input.Label>
            <Input.Input
              props={{
                ...formAdapter({
                  register,
                  name,
                  validator: SIGNUP_INPUTS[name],
                  $isDirty: !!formState.dirtyFields[name],
                  $isError: !!formState.errors[name],
                  ...(onChange ? { onChange } : {}),
                }),
              }}
            />
            <Input.Error>{formState?.errors[name]?.message}</Input.Error>
          </Input>
        ))}
        <Input>
          <Input.Label
            htmlFor="passwordCheck"
            isRequired>
            비밀번호 확인
          </Input.Label>
          <Input.Input
            props={{
              ...formAdapter({
                register,
                validator: {
                  ...SIGNUP_INPUTS["passwordCheck"],
                  validate: { validate: checkPassWord },
                },
                name: "passwordCheck",
                $isDirty: !!formState.dirtyFields.passwordCheck,
                $isError: !!formState.errors.passwordCheck,
              }),
            }}
          />
        </Input>
        <SignupButton $isValid={formState.isValid}>다음으로</SignupButton>
      </S.FormWrapper>
    </S.SignupWrapper>
  )
}

export default Profile
