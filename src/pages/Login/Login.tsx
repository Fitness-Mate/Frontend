// < 로그인 페이지 >
// @ts-nocheck
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import BigButton from "@components/Button/BigButton"

import { loginPostAPI } from "@apis/API"

import theme from "@styles/theme"

import * as S from "./StyledLogin"

const Login = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isEmailClicked, setIsEmailClicked] = useState(false)
  const [isPWClicked, setIsPWClicked] = useState(false)
  // 로그인 유지
  const [isKeepLoginClicked, setIsKeppLoginClicked] = useState(false)
  const [isError, setIsError] = useState(false)

  const navigate = useNavigate()

  const handleSignup = () => {
    navigate("/signup/profile")
  }

  const handleLogin = async (e) => {
    console.log(isKeepLoginClicked)
    e.preventDefault()

    const submission = {
      loginEmail: email,
      password: password,
      // (false일 경우 토큰관련 오류가 존재)??
      rememberMe: isKeepLoginClicked,
    }
    try {
      const res = await loginPostAPI.post("", submission)
      if (res.status === 200) {
        const accessToken = res.data.accessToken
        const refreshToken = res.data.refreshToken
        // 토큰 저장
        localStorage.setItem("accessToken", accessToken)
        localStorage.setItem("refreshToken", refreshToken)
        localStorage.setItem("rememberMe", isKeepLoginClicked)
        navigate("/")
      }
    } catch (err) {
      setIsError(true)
    }
  }

  return (
    <S.LoginContainer>
      <S.Title>로그인</S.Title>
      <form onSubmit={handleLogin}>
        <S.InputFrame>
          <S.LoginInput
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => {
              setIsEmailClicked(true)
            }}
            onBlur={() => {
              setIsEmailClicked(false)
            }}
            placeholder={"이메일"}
          />
          <S.LoginInput
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => {
              setIsPWClicked(true)
            }}
            onBlur={() => {
              setIsPWClicked(false)
            }}
            placeholder={"비밀번호"}
          />
        </S.InputFrame>
        <S.AutomaticLogin>
          <input
            type="checkbox"
            onClick={() => setIsKeppLoginClicked(!isKeepLoginClicked)}
          />
          로그인 유지
        </S.AutomaticLogin>
        {isError ? (
          <span className="warning">
            이메일 또는 비밀번호를 잘못 입력하셨습니다
          </span>
        ) : (
          ""
        )}
        <BigButton
          email={props.email}
          type="submit">
          로그인
        </BigButton>
      </form>
      <BigButton
        backcolor={theme.White}
        fontcolor={theme.Brand}
        onClick={handleSignup}>
        회원가입
      </BigButton>
    </S.LoginContainer>
  )
}

export default Login
