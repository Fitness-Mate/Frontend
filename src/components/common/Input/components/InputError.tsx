import { PropsWithChildren } from "react"

import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

const InputError = ({ children }: PropsWithChildren) => {
  return <Warning>{children}</Warning>
}

export default InputError

const Warning = styled.span`
  color: ${theme.Error};
  ${fonts.b4};
`
