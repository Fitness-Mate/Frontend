import { Interpolation, css, styled } from "styled-components"

import theme, { fonts } from "@styles/theme"

export const TitleWrapper = styled.div<{
  $variantStyle: Interpolation<object>
}>`
  display: flex;
  gap: 4px;
  flex-direction: column;
  ${({ $variantStyle }) => $variantStyle};
  &.bold {
    font-weight: 700;
  }
  &.thin {
    font-weight: 400;
  }
`

export const SubTopTitleText = styled.span`
  color: ${theme.Brand750};
`
export const SubBottomTitleText = styled.span`
  color: ${theme.Netural800};
`

export const VARIANTS = {
  big: css`
    color: ${theme.Netural900};
    ${fonts.h1};
    .topTitleText {
      color: ${theme.Brand750};
      ${fonts.b6};
    }

    .bottomTitleText {
      color: ${theme.Netural800};
      ${fonts.b4};
      padding-top: 8px;
    }
  `,
  midA: css`
    color: ${theme.Netural990};
    ${fonts.h2};
    .topTitleText {
      color: ${theme.Brand750};
      ${fonts.d1};
    }
    .bottomTitleText {
      color: ${theme.Netural800};
      ${fonts.b4};
      padding-top: 4px;
    }
  `,
  midB: css`
    color: ${theme.Netural990};
    ${fonts.h2};
    .topTitleText {
      color: ${theme.Brand750};
      ${fonts.d1};
    }
    .bottomTitleText {
      color: ${theme.Brand600};
      ${fonts.b5};
    }
  `,
  small: css`
    color: ${theme.Netural990};
    ${fonts.h3};
    gap: 2px;

    .topTitleText {
      color: ${theme.Brand750};
      ${fonts.d2};
    }
    .bottomTitleText {
      color: ${theme.Netural800};
      ${fonts.b6};
      padding-top: 6px;
    }
  `,
}
