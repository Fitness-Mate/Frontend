import { PropsWithChildren } from "react"

import styled from "styled-components"

import theme from "@styles/theme"

const InputText = ({ children }: PropsWithChildren) => {
  return <Text>{children}</Text>
}

export default InputText

const Text = styled.span`
  ${theme.Netural900};
  font-size: 1.5rem;
  font-weight: 400;
`
