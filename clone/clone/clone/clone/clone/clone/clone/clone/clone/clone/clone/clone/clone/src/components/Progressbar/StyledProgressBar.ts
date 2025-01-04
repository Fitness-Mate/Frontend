import styled, { css } from "styled-components"

import theme from "@styles/theme"

export const ProgressBarBox = styled.div`
  position: relative;
  width: 100%;
  height: 1rem;
  background: ${theme.Netural300};
  border-radius: 2.4rem;
`

export const ProgressBarItem = styled.div<{
  $progress: number
}>`
  position: absolute;
  width: ${({ $progress }) => `${(100 / 4) * $progress}%`};
  background: ${theme.Brand600};
  height: 100%;

  ${({ $progress }) =>
    css`
    border-radius: 2.4rem;
      width: {(100 / 3) * ${$progress}%;
    `}
`
