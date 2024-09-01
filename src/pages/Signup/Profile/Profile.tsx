// @ts-nocheck
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import StatusBar from "@components/StatusBar/StatusBar"

import { SIGNUP_INPUTS } from "@pages/Signup/SIGNUP_INPUTS"
import SignupButton from "@pages/Signup/SignupButton/SignupButton"
import { useSignupStore } from "@pages/Signup/stores/store"

import * as S from "../StyledSignup"
import ProfileForm from "./components/ProfileForm"

const Profile = () => {
  // @ts-ignore
  const { setProfile } = useSignupStore()
  const navigate = useNavigate()
  const methods = useForm({
    mode: "onChange",
    defaultValues: SIGNUP_INPUTS.DEFAULT_VALUES["PROFILE"],
  })
  const { handleSubmit, formState } = methods

  const handleNextPage = (formValue) => {
    if (formState.isValid) {
      delete formValue["passwordCheck"]
      setProfile(formValue)
      navigate(`/signup/bodyinfo`)
    }
  }

  return (
    <S.SignupForm onSubmit={handleSubmit(handleNextPage)}>
      <S.SignupTitle>
        <StatusBar status={1} />
        회원 정보를 입력해주세요
      </S.SignupTitle>
      <ProfileForm methods={methods} />
      <SignupButton $isValid={formState.isValid} />
    </S.SignupForm>
  )
}

export default Profile
