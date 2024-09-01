import styled from "styled-components"

import theme from "@styles/theme"

export const SignupWrapper = styled.div`
  padding-top: 100px;
  width: 474px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  gap: 52px;
  padding-bottom: 30px;
`
export const SignupForm = styled.form`
  position: relative;
  padding-top: 100px;
  width: 474px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  gap: 52px;
  padding-bottom: 30px;
`

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SignupTitle = styled.span`
  align-items: center;
  width: 100%;
  color: ${theme.Gray80};
  font-size: 30px;
  font-weight: 600;
  letter-spacing: -0.6px;
`

export const ButtonContainer = styled.div`
  margin-left: auto;
  gap: 6px;
  display: flex;
  align-items: center;
`
