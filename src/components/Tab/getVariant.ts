import { css } from "styled-components"

import { Variant } from "@components/Tab/Tab"

import theme, { fonts } from "@styles/theme"

export const getVariant = (variant: Variant, isSelected: boolean) => {
  switch (variant) {
    case "fill":
      return css`
        color: ${isSelected ? theme.Netural0 : theme.Netural800};
        background: ${isSelected ? theme.Brand600 : theme.Netural0};
        padding: 10px 14px;
        ${fonts.b4};
        border-radius: 34px;
        &:hover {
          background-color: ${!isSelected && theme.Netural200};
        }
      `
    case "line":
      return css`
        color: ${isSelected ? theme.Netural950 : theme.Netural700};
        position: relative;
        padding: 10px;
        ${fonts.b2};
        border-radius: 8px;
        &:hover {
          background: ${theme.Netural200};
        }

        ${isSelected &&
        css`
          &::before {
            content: "";
            position: absolute;
            bottom: 0;
            width: calc(100% - 20px);
            border-radius: 2px;
            border-bottom: 2px solid ${theme.Netural900};
          }
        `}
      `
    default:
  }
}
