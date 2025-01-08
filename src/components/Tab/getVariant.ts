import { css } from "styled-components"

import { Variant } from "@components/Tab/Tab"

import theme, { fonts } from "@styles/theme"

export const getVariant = (
  variant: Variant,
  isSelected: boolean,
  isFirstChild: boolean,
) => {
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
        position: relative;
        padding: ${isFirstChild ? "1rem 1rem 1rem 0" : "1rem 1rem 1rem 1rem"};
        border-bottom: ${isSelected
          ? `0.2rem solid ${theme.Netural900}`
          : `0.05rem solid ${theme.Netural500}`};
        &:hover {
          background: ${theme.Netural200};
        }
      `
    default:
  }
}
