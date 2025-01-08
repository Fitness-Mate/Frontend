import { css } from "styled-components"

import { Variant } from "@components/Tab/Tab"

import theme, { fonts } from "@styles/theme"

export const getVariant = (variant: Variant, isSelected: boolean) => {
  switch (variant) {
    case "fill":
      return css`
        color: ${isSelected ? theme.Netural0 : theme.Netural800};
        background: ${isSelected ? theme.Brand600 : theme.Netural0};
        padding: 1rem 1.4rem;
        border-radius: 3.4rem;
        ${fonts.b4};
        &:hover {
          background-color: ${!isSelected && theme.Netural200};
        }
      `
    case "line":
      return css`
        color: ${isSelected ? theme.Netural950 : theme.Netural700};
        ${fonts.b2};
        padding: 1rem;
        &:hover {
          background: ${theme.Netural200};
        }
        ${isSelected &&
        css`
          &::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 0.2rem;
            background-color: ${theme.Netural900};
          }
        `}
      `
    default:
  }
}
