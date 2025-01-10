import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const FallbackWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  justify-content: center;
`

export const FallbackTitle = styled.span`
  ${fonts.h1};
  font-size: 5rem;
  color: ${theme.Netural900};
`
