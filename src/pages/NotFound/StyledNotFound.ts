import styled from "styled-components"

import { theme } from "@styles/theme"

import { fonts } from "../../styles/theme"

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  gap: 3rem;
  transform: translate(-50%, -50%);
`

export const NotFoundImg = styled.img`
  width: 50rem;
  height: 30rem;
  border-radius: 2rem;
`

export const NotFoundButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const NotFoundTitle = styled.span`
  ${fonts.h1};
  color: ${theme.Netural990};
`
