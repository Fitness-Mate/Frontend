import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 161px;
  padding: 6px;
  gap: 4px;
  border-radius: 12px;
  background: ${theme.Netural0};
  box-shadow: 0px 1px 20px 0px rgba(0, 0, 0, 0.12);

  position: absolute;
  right: 19px;
  bottom: 14px;
`

export const DropDownButton = styled.div`
  display: flex;
  width: 149px;
  padding: 10px 12px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  .fixWorkout {
    color: ${theme.Netural800};
    ${fonts.d1};
  }
  .removeWorkout {
    color: ${theme.Error};
    ${fonts.d1};
  }

  &:hover {
    background: ${theme.Netural150};
    cursor: pointer;
  }
`
