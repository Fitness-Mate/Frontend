import { Interpolation, css, styled } from "styled-components"

import theme, { fonts } from "@styles/theme"

export const TitleWrapper = styled.div<{
  $variantStyle: Interpolation<object>
}>`
  display: flex;
  gap: 0.4rem;
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

export const SubBottomTitleWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
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
      padding-top: 0.8rem;
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
      padding-top: 0.4rem;
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
  midC: css`
    .topIconTitle {
      color: ${theme.Netural900};
      ${fonts.h3};
      display: flex;
      align-items: center;
    }
    .bottomTitleText {
      color: ${theme.Netural550};
      ${fonts.b6};
    }
  `,
  midD: css`
    gap: 0.2rem;
    .topTitleText {
      color: ${theme.Netural950};
      ${fonts.b1};
    }
    .bottomTitleText {
      color: ${theme.Brand700};
      ${fonts.b7};
    }
  `,
  midE: css`
    .topIconTitle {
      color: ${theme.Netural900};
      ${fonts.h4};
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
    .bottomTitleContentText {
      color: ${theme.Netural550};
      ${fonts.b6};
    }
    .bottomTitleText {
      color: ${theme.Netural900};
      ${fonts.b6};
    }
  `,
  small: css`
    color: ${theme.Netural990};
    ${fonts.h3};
    gap: 0.2rem;

    .topTitleText {
      color: ${theme.Brand750};
      ${fonts.d2};
    }
    .bottomTitleText {
      color: ${theme.Netural800};
      ${fonts.b6};
      padding-top: 0.6rem;
    }
  `,
}
