import { ButtonHTMLAttributes } from "react"

import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

const Chip = ({ children, ...props }: ChipProps) => (
  <ChipWrapper
    {...props}
    type="button">
    # {children}
  </ChipWrapper>
)

export default Chip

const ChipWrapper = styled.button`
  display: flex;
  padding: 0.8rem 1.2rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 0.1rem solid ${theme.Netural200};
  background: ${theme.Netural200};
  color: ${theme.Netural700};
  ${fonts.l1};
  font-size: 1.6rem;
`
