import styled from "styled-components"

import theme from "@styles/theme"

export const SearchContainer = styled.div<{ $isClicked: boolean }>`
  width: 100%;
  height: 56px;
  padding: 14px;
  border-radius: 10px;
  border: 1px solid
    ${({ $isClicked }) => ($isClicked ? theme.Netural100 : theme.Netural800)};
  display: flex;
  gap: 14px;
  align-items: center;
  box-shadow: ${({ $isClicked }) =>
    $isClicked ? "2px 2px 9px 0px rgba(0,0,0,0.1)" : "none"};

  .searchIcon {
    width: 24px;
    height: 24px;
  }
`

export const SearchInputContent = styled.input`
  &::-webkit-input-placeholder {
    color: ${theme.Netural500};
  }
  border: none;
  width: 100%;
  color: ${({ theme }) => theme.Netural500};
  font-size: 18px;
  font-weight: 500;
`
