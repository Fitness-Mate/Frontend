import { LabelHTMLAttributes, PropsWithChildren } from "react"

import styled, { css } from "styled-components"

import theme, { fonts } from "@styles/theme"

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  isRequired?: boolean
}

const InputLabel = ({
  children,
  isRequired = false,
  ...props
}: PropsWithChildren<InputLabelProps>) => {
  return (
    <InputName
      $isRequired={isRequired}
      {...props}>
      {children}
    </InputName>
  )
}

export default InputLabel

const InputName = styled.label<{ $isRequired: boolean }>`
  color: ${theme.Netural800};
  ${fonts.b4};
  ${({ $isRequired }) =>
    $isRequired &&
    css`
      &::after {
        content: " *";
        color: ${theme.Error};
        ${fonts.b6};
      }
    `}
`
