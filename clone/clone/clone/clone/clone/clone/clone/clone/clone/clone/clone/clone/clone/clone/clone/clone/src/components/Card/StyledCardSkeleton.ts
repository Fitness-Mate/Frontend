import styled from "styled-components"

import { theme } from "@styles/theme"

export const CardWrapper = styled.div`
  width: 100%;
  max-width: 103.2rem;
  padding-top: 5.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`

export const CardImg = styled.img`
  border-radius: 1.2rem;
  border: 0.1rem solid ${theme.Netural200};
  background: #ccc;
  max-width: 31.2rem;
  width: 100%;
  height: 100%;
`

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 31.2rem;
  width: 100%;
  height: 30rem;
  gap: 1.8rem;
  justify-content: flex-start;
`

export const CardContents = styled.div`
  max-width: 26.7rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.8rem;
  width: 100%;
`

export const CardTextBox = styled.div`
  background-color: ${theme.Netural990};
  border-radius: 0.4rem;
  background: #d9d9d9;
  max-width: 25.6rem;
  height: 3rem;
  width: 100%;
`

export const BadgeList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.4rem;
  width: 100%;
`

export const Badge = styled.div`
  border-radius: 0.4rem;
  background: #e3e3e3;
  max-width: 5.5rem;
  width: 100%;
  height: 2.9rem;
  color: transparent;
`
