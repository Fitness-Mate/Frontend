import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const LoginContainer = styled.div`
  display: flex;
  gap: 4.8rem;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const LoginForm = styled.form`
  min-width: 43.3rem;
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
`

export const Title = styled.h1`
  color: ${theme.Netural990};
  ${fonts.h1};
  font-size: 2.8rem;
`

export const InputFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`

export const FindPass = styled.button`
  color: ${theme.Brand600};
  ${fonts.h4};
  font-weight: 500;
  width: fit-content;
  padding-left: 0.2rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const Warning = styled.span`
  color: ${theme.Error};
  ${fonts.b4};
  padding-top: 2.35rem;
`
