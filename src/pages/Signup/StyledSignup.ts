import styled, { css } from "styled-components"

import theme, { fonts } from "@styles/theme"

export const SignupWrapper = styled.div`
  padding-top: 10rem;
  width: 47.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  gap: 5.2rem;
  padding-bottom: 3rem;
`
export const SignupForm = styled.form`
  position: relative;
  padding-top: 10rem;
  width: 47.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 3rem;
`

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SignupTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

export const BodyFigureWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10.5rem;
`

export const SignupTitle = styled.span`
  color: ${theme.Netural990};
  ${fonts.h1};
  font-size: 3rem;
`

export const StatusText = styled.span`
  color: ${theme.Brand750};
  ${fonts.b6};
`

export const ButtonContainer = styled.div`
  margin-left: auto;
  gap: 0.6rem;
  display: flex;
  align-items: center;
  padding-top: 6.4rem;
`

export const SexList = styled.div`
  display: flex;
  align-items: center;
`

export const SexLabel = styled.label<{ $isSelected: boolean }>`
  cursor: pointer;
  display: flex;
  padding: 1.2rem 1.4rem;
  ${fonts.b5};
  color: ${theme.Netural800};
  ${({ $isSelected }) =>
    $isSelected &&
    css`
      border-radius: 0.6rem;
      border: 0.15rem solid ${theme.Brand600};
      color: ${theme.Brand600};
    `}
`

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4.2rem;
  width: 100%;
  align-items: flex-end;
`
