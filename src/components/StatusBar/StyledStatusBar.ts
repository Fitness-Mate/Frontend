import styled from "styled-components"

import theme from "@styles/theme"

interface StatusBarItemProps {
  $status: number
}

export const StatusBarBox = styled.div`
  position: relative;
  height: 4px;
  background: ${theme.Brand300};
  margin-bottom: 24px;
`

export const StatusBarItem = styled.div<StatusBarItemProps>`
  position: absolute;
  width: ${({ $status }) => `${(100 / 4) * $status}%`};
  height: 4px;
  background: ${theme.Brand600};
`
