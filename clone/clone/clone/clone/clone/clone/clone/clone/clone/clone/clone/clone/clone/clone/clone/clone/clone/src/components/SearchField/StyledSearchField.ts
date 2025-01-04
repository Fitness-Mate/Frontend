import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const InputWrapper = styled.div<{ $width: string }>`
  display: flex;
  padding: 1rem 1.8rem 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 1.6rem;
  background: ${theme.Netural900};
  box-shadow: 0rem 0.4rem 2.34rem 0rem rgba(0, 0, 0, 0.15);
  width: ${({ $width }) => $width};
  height: 6.4rem;
`

export const IconButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2.7rem;
`

export const Input = styled.input`
  width: 100%;
  color: ${theme.Netural0};
  &::-webkit-input-placeholder {
    color: ${theme.Netural0};
  }
  ${fonts.h4};
`
