import styled from "styled-components"

import theme from "@styles/theme"

export const FigureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  width: 100%;
`

export const FigureTitle = styled.span`
  padding-bottom: 1rem;
  color: ${theme.Netural900};
  font-size: 2rem;
  font-weight: 600;
`

export const FigureOptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  margin-left: 1rem;
  width: 100%;
  padding: 1rem;
`

export const FigureOptionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const DirectFigureOptionWrapper = styled.div`
  padding-top: 6.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6.4rem;
  align-items: center;
`

export const DirectFigureOptionList = styled.div`
  display: flex;
  justify-content: center;
  gap: 5.2rem;
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
  gap: 1rem;
  border-radius: 1.2rem;
  background: var(--Neutral-200, #f2f4f6);
  padding: 2.5rem;
`

export const DirectFigureOptionInnerMessage = styled.span`
  ${theme.Netural950};
  font-size: 1.6rem;
`

export const DirectFigureOptionInnerMessage2 = styled.span`
  ${theme.Netural800};
  font-size: 1.5rem;
`

export const FigureOptionInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const FigureCheckBoxButton = styled.button<{ $isChecked: boolean }>`
  display: flex;
  width: 100%;
  gap: 1rem;
  padding: 0.6rem 1.8rem;
  align-items: center;
  border-radius: 1.2rem;
  background: ${({ $isChecked }) => ($isChecked ? "#f2f4f6" : "#fff")};
  height: 5rem;
  &:hover {
    background: ${({ $isChecked }) =>
      $isChecked ? "#f2f4f6" : `${theme.Netural200}`};
  }
`

export const FigureCheckBoxText = styled.span<{ $isChecked: boolean }>`
  color: ${({ $isChecked }) => ($isChecked ? "#272e38" : "#6b7684")};
  text-align: center;
  font-size: 14px;
`
