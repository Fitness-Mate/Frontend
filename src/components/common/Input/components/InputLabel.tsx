import { LabelHTMLAttributes, PropsWithChildren } from "react"

import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

const InputLabel = ({
  children,
  ...props
}: PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>) => {
  return <InputName {...props}>{children}</InputName>
}

export default InputLabel

const InputName = styled.label`
  color: ${theme.Netural900};
  ${fonts.b4};
`
