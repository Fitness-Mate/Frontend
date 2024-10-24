// @ts-nocheck
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { useSignupStore } from "@store/useSignupStore"

import Input from "@components/Input/Input"
import ProgressBar from "@components/Progressbar/ProgressBar"

import SignupButton from "@pages/Signup/SignupButton/SignupButton"
import { SEX_GROUP, SIGNUP_INPUTS } from "@pages/Signup/constants/Constants"

import { formAdapter } from "@utils/formAdapter"

import * as GS from "../StyledSignup"
import * as S from "./StyledBodyInfo"

const BodyInfo = () => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: SIGNUP_INPUTS.DEFAULT_VALUES["BODYINFO"],
  })
  const { formState, handleSubmit, register } = methods
  const { setBodyInfo } = useSignupStore()
  const navigate = useNavigate()
  const handleNextPage = (bodyInfoForm) => {
    if (formState.isValid) {
      setBodyInfo({
        ...bodyInfoForm,
        height: Number(bodyInfoForm.height),
        weight: Number(bodyInfoForm.weight),
      })
      navigate("/signup/bodyfigure")
    }
  }

  return (
    <GS.SignupForm onSubmit={handleSubmit(handleNextPage)}>
      <GS.SignupTitle>
        <ProgressBar status={2} />
        신체 정보를 입력해주세요
      </GS.SignupTitle>
      <S.BodyInfoContainer>
        <Input>
          <Input.Label
            isRequired
            htmlFor="sex">
            성별
          </Input.Label>
          <Input.Select
            list={SEX_GROUP}
            methods={methods}
          />
          <Input.Error>{formState.errors?.sex?.message}</Input.Error>
        </Input>

        <Input>
          <Input.Label
            isRequired
            htmlFor="height">
            키
          </Input.Label>
          <Input.Input
            type={"number"}
            props={{
              ...formAdapter({
                register,
                validator: SIGNUP_INPUTS["height"],
                name: "height",
                $isDirty: formState.dirtyFields.height,
                $isError: formState.errors.height,
              }),
            }}
          />
          <Input.Error>{formState.errors?.height?.message}</Input.Error>
        </Input>
        <Input>
          <Input.Label
            isRequired
            htmlFor="weight">
            몸무게
          </Input.Label>
          <Input.Input
            type={"number"}
            props={{
              ...formAdapter({
                register,
                validator: SIGNUP_INPUTS["weight"],
                name: "weight",
                $isDirty: formState.dirtyFields.weight,
                $isError: formState.errors.weight,
              }),
            }}
          />
          <Input.Error>{formState.errors?.weight?.message}</Input.Error>
        </Input>
      </S.BodyInfoContainer>
      <SignupButton
        $isValid={formState.isValid}
        nextUrl="bodyfigure"
      />
    </GS.SignupForm>
  )
}

export default BodyInfo
