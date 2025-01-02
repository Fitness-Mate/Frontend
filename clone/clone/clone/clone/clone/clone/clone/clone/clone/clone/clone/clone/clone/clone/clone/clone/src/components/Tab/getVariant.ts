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
        ${fonts.b4};
        border-radius: 3.4rem;
        &:hover {
          background-color: ${!isSelected && theme.Netural200};
        }
      `
    case "line":
      return css`
        color: ${isSelected ? theme.Netural950 : theme.Netural700};
        position: relative;
        padding: ${isFirstChild ? "1rem 1rem 1rem 0" : "1rem 1rem 1rem 1rem"};
        ${fonts.b2};
        border-radius: ${isFirstChild ? 0 : "0.8rem"};
        &:hover {
          background: ${theme.Netural200};
        }

        ${isSelected &&
        css`
          &::before {
            content: "";
            position: absolute;
            bottom: 0;
            width: ${isFirstChild ? "calc(100% - 1rem)" : "calc(100% - 2rem)"};
            border-radius: 0.2rem;
            border-bottom: 0.3rem solid ${theme.Netural900};
          }
        `}
      `
    default:
  }
}
