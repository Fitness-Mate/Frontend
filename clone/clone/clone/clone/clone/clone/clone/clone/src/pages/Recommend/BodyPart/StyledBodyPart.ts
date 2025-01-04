import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const BodyPartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 20.5rem);
`

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`

export const TabBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: flex-start;
`

export const TabTitle = styled.div`
  color: ${theme.Netural800};
  ${fonts.b3};
`

export const TabList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
`
