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
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${theme.Netural200};
  background: ${theme.Netural200};
  color: ${theme.Netural700};
  ${fonts.l1};
  font-size: 16px;
`
