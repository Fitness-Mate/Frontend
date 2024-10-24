// @ts-nocheck
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { useSignupStore } from "@store/useSignupStore"

import ProgressBar from "@components/Progressbar/ProgressBar"

import SignupButton from "@pages/Signup/SignupButton/SignupButton"
import { SIGNUP_INPUTS } from "@pages/Signup/constants/Constants"

import * as S from "../StyledSignup"
import ProfileForm from "./components/ProfileForm"

const Profile = () => {
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
        <ProgressBar progress={1} />
        회원 정보를 입력해주세요
      </S.SignupTitle>
      <ProfileForm methods={methods} />
      <SignupButton
        $isValid={formState.isValid}
        nextUrl="bodyinfo"
      />
    </S.SignupForm>
  )
}

export default Profile
