import styled from "styled-components"

import theme from "@styles/theme"

interface StatusBarItemProps {
  $progress: number
}

export const ProgressBarBox = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  background: ${theme.Netural300};
  border-radius: 24px;
`

export const ProgressBarItem = styled.div<StatusBarItemProps>`
  position: absolute;
  width: ${({ $progress }) => `${(100 / 5) * $progress}%`};
  height: 100%;
  border-radius: 24px;
  background: ${theme.Brand600};
`
