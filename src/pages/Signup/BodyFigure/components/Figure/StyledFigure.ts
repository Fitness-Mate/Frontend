import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const FigureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  width: 100%;
`

export const FigureTitle = styled.span`
  color: ${theme.Netural990};
  ${fonts.h4};
`

export const FigureOptionList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 1.8rem;
`

export const FigureOptionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const DirectFigureOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const DirectFigureOptionList = styled.div`
  display: flex;
  justify-content: center;
  gap: 5.2rem;
  padding: 9.2rem 0;
  width: 50%;
  align-items: center;
`

export const DirectFigureOptionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const DirectFigureOptionMessage = styled.div`
  ${theme.Netural800};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border-radius: 1.2rem;
  background: ${theme.Netural200};
  padding: 2rem 2.4rem;
`

export const DirectFigureOptionInnerMessage = styled.span`
  color: ${theme.Netural950};
  ${fonts.b3};
`

export const DirectFigureOptionInnerMessage2 = styled.span`
  color: ${theme.Netural600};
  ${fonts.b6};
`

export const FigureOptionInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`

export const FigureCheckBoxButton = styled.button<{ $isSelected: boolean }>`
  display: flex;
  width: 100%;
  gap: 1rem;
  padding: 0.6rem 1.8rem;
  align-items: center;
  border-radius: 1.2rem;
  background: ${({ $isSelected }) => ($isSelected ? "#f2f4f6" : "#fff")};
  height: 5rem;
  &:hover {
    background: ${({ $isSelected }) =>
      $isSelected ? "#f2f4f6" : `${theme.Netural200}`};
  }
`

export const FigureCheckBoxText = styled.span<{ $isSelected: boolean }>`
  color: ${({ $isSelected }) => ($isSelected ? "#272e38" : "#6b7684")};
  text-align: center;
  font-size: 14px;
`
