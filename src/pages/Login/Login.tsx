import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { LOGIN_INPUTS, LOGIN_LIST } from "constants/validation"

import Button from "@components/common/Button/Button"
import Input from "@components/common/Input/Input"

import { PostLoginPayload } from "@typpes/type"

import { useLogin } from "@hooks/mutation/useLogin"

import { formAdapter } from "@utils/formAdapter"

import * as S from "./StyledLogin"

const Login = () => {
  const { handleSubmit, register, formState, setError } = useForm({
    mode: "onChange",
    defaultValues: LOGIN_INPUTS.DEFAULT_VALUES,
  })

  const navigate = useNavigate()
  const { mutate: login } = useLogin(setError)

  const handleSignup = () => {
    navigate("/signup/profile")
  }

  const onSubmit = (submission: Omit<PostLoginPayload, "rememberMe">) => {
    login({ ...submission, rememberMe: true })
  }

  return (
    <S.LoginContainer>
      <S.Title>로그인</S.Title>
      <S.LoginForm
        onSubmit={handleSubmit(onSubmit)}
        noValidate>
        <S.InputFrame>
          {LOGIN_LIST.map(({ id, name }) => (
            <Input key={id}>
              <Input.Input
                props={{
                  ...formAdapter({
                    register,
                    validate: LOGIN_INPUTS[name].validate,
                    name,
                  }),
                  ...LOGIN_INPUTS[name].attributes,
                }}
              />
            </Input>
          ))}
          <S.MoreInfo>
            <S.Warning>{formState.errors.root?.message}</S.Warning>
            <S.FindPass type="button">비밀번호 찾기</S.FindPass>
          </S.MoreInfo>
        </S.InputFrame>
        <S.ButtonContainer>
          <Button
            variant="main"
            type="submit"
            size="full">
            로그인
          </Button>
          <Button
            onClick={handleSignup}
            variant="weak"
            size="full">
            회원가입
          </Button>
        </S.ButtonContainer>
      </S.LoginForm>
    </S.LoginContainer>
  )
}

export default Login
