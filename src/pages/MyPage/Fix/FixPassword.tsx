// @ts-nocheck
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { validationState } from "@recoil/atom"
import { useRecoilState } from "recoil"

import TokenApi from "@apis/TokenApi"

import ProfileInput from "@pages/MyPage/Fix/ProfileInput/ProfileInput"

import * as S from "./StyledFix"

// 회원가입 페이지에 대한 정보를 모두 담는 컴포넌트
// 우선 이메일은
const FixPassword = () => {
  const navigate = useNavigate()

  // 유효성 검사
  const [isValidState, setIsValidState] = useRecoilState(validationState)

  // 입력했는지 체크(한 번 입력한 순간 쭉 true)
  const [valueHistory, setValueHistory] = useState(false)

  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const handleChange = (e) => {
    const name = e.target.name

    // input value set

    if (name === "password") {
      setPassword(e.target.value)
    } else if (name === "password2") {
      setPassword2(e.target.value)
    }
    if (!valueHistory) {
      setValueHistory(true)
    }
  }

  const handleBackPage = (e) => {
    e.preventDefault()
    navigate(-1)
  }

  // 제출
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = {
      oldPassword: password,
      newPassword: password2,
    }

    try {
      // API 호출 및 form 데이터 전송
      const res = await TokenApi.post("user/private/password", formData)
      console.log("수정:", res.status)
    } catch (error) {
      console.log(error)
      alert("수정 실패. 형식을 준수해주세요.")
    }
  }

  return (
    <S.SignupForm>
      <S.SignupTitle>
        <S.TitleEmphasis>비밀번호 변경</S.TitleEmphasis>
      </S.SignupTitle>
      <S.ProfileInputcontainer>
        <ProfileInput
          placeholder="현재 비밀번호 8자리"
          name="password"
          value={password}
          handleChange={handleChange}>
          현재 비밀번호
        </ProfileInput>
        <ProfileInput
          placeholder="신규 비밀번호 8자리"
          name="password2"
          value={password2}
          handleChange={handleChange}>
          신규 비밀번호
        </ProfileInput>
      </S.ProfileInputcontainer>
      <S.ButtonContainer>
        <Button
          onClick={handleBackPage}
          variant="main"
          disabled={!$isValid}
          size="lg">
          이전
        </Button>
        <Button
          type="submit"
          onClick={handleSubmit}
          variant="main"
          disabled={!$isValid}
          size="lg">
          비밀번호 변경하기
        </Button>
      </S.ButtonContainer>
    </S.SignupForm>
  )
}

export default FixPassword
