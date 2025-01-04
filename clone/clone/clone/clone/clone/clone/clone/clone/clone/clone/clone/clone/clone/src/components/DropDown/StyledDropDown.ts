import { Interpolation, css, styled } from "styled-components"

import theme, { fonts } from "@styles/theme"

export const DropDownWrapper = styled.div<{
  $positionStyle: Interpolation<object>
}>`
  display: flex;
  flex-direction: column;
  padding: 0.6rem;
  gap: 0.4rem;
  border-radius: 1.2rem;
  background: ${theme.Netural0};
  box-shadow: 0rem 0.1rem 2rem 0rem rgba(0, 0, 0, 0.12);

  ${({ $positionStyle }) => $positionStyle};s
`

export const DropDownButton = styled.button<{
  $variantStyle: Interpolation<object>
}>`
  display: flex;
  width: 14.9rem;
  padding: 1rem 1.2rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.8rem;
  ${({ $variantStyle }) => $variantStyle};
`

export const Line = styled.div`
  height: 0.1rem;
  background: ${theme.Netural200};
`

export const VARIANTS = {
  grey: css`
    color: ${theme.Netural700};
    ${fonts.d1};

    &:hover {
      color: ${theme.Netural800};
      background: ${theme.Netural200};
    }
  `,
  red: css`
    color: ${theme.Error};
    ${fonts.d1};

    &:hover {
      background: ${theme.ErrorWeak};
    }
  `,
}

export const POSITION = {
  my: css`
    position: absolute;
    right: 1.9rem;
    bottom: 1.4rem;
  `,
  nav: css`
    position: absolute;
    top: 5.6rem;
    right: 0;
  `,
}

export const FixIconButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1.4rem;
  right: 1.4rem;
  background-color: ${theme.Netural150};
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 0.8rem;
`

export const DropDownContainer = styled.div`
  position: relative;
`

export const NavNameButton = styled.button`
  font-size: 1.8rem;
  padding: 1rem 2.4rem;
  border-radius: 1.2rem;
  font-weight: 700;
  color: ${theme.Brand600};
  &:hover {
    background-color: ${theme.Netural200};
  }
`
