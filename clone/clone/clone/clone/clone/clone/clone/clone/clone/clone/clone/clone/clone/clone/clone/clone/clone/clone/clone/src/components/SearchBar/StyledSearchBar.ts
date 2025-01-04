import styled from "styled-components"

import theme from "@styles/theme"

export const SearchContainer = styled.div<{ $isClicked: boolean }>`
  width: 100%;
  height: 5.6rem;
  padding: 1.4rem;
  border-radius: 1rem;
  border: 0.1rem solid
    ${({ $isClicked }) => ($isClicked ? theme.Netural100 : theme.Netural800)};
  display: flex;
  gap: 1.4rem;
  align-items: center;
  box-shadow: ${({ $isClicked }) =>
    $isClicked ? "0.2rem 0.2rem 0.9rem 0rem rgba(0,0,0,0.1)" : "none"};

  .searchIcon {
    width: 2.4rem;
    height: 2.4rem;
  }
`

export const SearchInputContent = styled.input`
  &::-webkit-input-placeholder {
    color: ${theme.Netural500};
  }
  border: none;
  width: 100%;
  color: ${({ theme }) => theme.Netural500};
  font-size: 1.8rem;
  font-weight: 500;
`
