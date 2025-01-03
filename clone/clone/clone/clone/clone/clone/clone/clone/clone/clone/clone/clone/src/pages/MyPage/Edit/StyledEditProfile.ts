import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const EditProfileForm = styled.form`
  padding: 6.3rem 0 3rem 0;
  padding-bottom: 3rem;
  width: 47.4rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const EditFormWrapper = styled.div`
  width: 100%;
  height: 64.2rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 4.5rem;
  margin-bottom: 13.7rem;
`

export const EditProfileTitle = styled.span`
  ${theme.Netural990};
  ${fonts.h1};
  font-size: 3rem;
`
export const EditProfileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.7rem;
`

export const EditPasswordButton = styled.button`
  color: ${theme.Brand700};
  ${fonts.b3};
  font-weight: 700;
  text-align: left;
  width: fit-content;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 0.2rem;
    width: 100%;
    background: ${theme.Brand700};
  }
`

export const EditButtonContainer = styled.div`
  display: flex;
  align-items: center;
`
