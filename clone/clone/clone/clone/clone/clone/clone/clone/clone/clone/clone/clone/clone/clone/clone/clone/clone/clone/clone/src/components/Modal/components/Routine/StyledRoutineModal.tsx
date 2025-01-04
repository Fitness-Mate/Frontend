import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const ContentWrapper = styled.div`
  height: 21.7rem;
  width: 100%;
`

export const ContentForm = styled.form`
  display: flex;
  gap: 1.2rem;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContentInput = styled.input<{ $isError: boolean }>`
  &::-webkit-input-placeholder {
    color: ${theme.Netural500};
    ${fonts.h1}
  }
  text-align: center;
  width: 100%;
  min-height: 3.6rem;
  ${fonts.h1};
  color: ${({ $isError }) => ($isError ? theme.Error : theme.Netural900)};

  &:focus::-webkit-input-placeholder,
  textarea:focus::-webkit-input-placeholder {
    color: transparent;
  }

  &:focus:-moz-placeholder,
  textarea:focus:-moz-placeholder {
    color: transparent;
  }

  &:focus:-ms-input-placeholder,
  textarea:focus:-ms-input-placeholder {
    color: transparent;
  }
`
export const ContentInputLabel = styled.span<{ $isError: boolean }>`
  ${fonts.b7};
  color: ${({ $isError }) => ($isError ? theme.Error : theme.Netural450)};
`

export const ContentMachineForm = styled(ContentForm)`
  gap: 3.1rem;
`

export const MachineInput = styled.input`
  color: ${theme.Netural800};
  ${fonts.h1};
  font-weight: 500;
  font-size: 2.8rem;
  display: flex;
  padding: 1.4rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 1.2rem;
  background: ${theme.Netural200};
  text-align: center;

  &::-webkit-input-placeholder {
    color: ${theme.Netural500};
    ${fonts.h1};
    font-weight: 500;
  }

  min-height: 6.1rem;
  width: 6.1rem;

  &:focus::-webkit-input-placeholder,
  textarea:focus::-webkit-input-placeholder {
    color: transparent;
  }

  &:focus:-moz-placeholder,
  textarea:focus:-moz-placeholder {
    color: transparent;
  }

  &:focus:-ms-input-placeholder,
  textarea:focus:-ms-input-placeholder {
    color: transparent;
  }
`

export const MachineInputList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const MachineInputItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  &:first-child input {
    width: 8rem;
  }
`

export const Unit = styled.span`
  color: ${theme.Netural600};
  ${fonts.h3};
  font-weight: 500;
`

export const MachineButton = styled.button`
  text-align: center;
  color: ${theme.Netural700};
  ${fonts.b4};
`

export const ContentBigWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-bottom: 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`

export const AddRoutineButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 0;
  width: 100%;
  &:disabled {
    cursor: default;
  }
`

export const RoutineList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
  overflow: auto;
`

export const RoutineItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 0;
  border-radius: 1.2rem;
  background: ${theme.Netural0};
  &:disabled {
    cursor: default;
  }
`

export const RoutineName = styled.span<{
  $isSelected: boolean
  $isAdded: boolean
}>`
  color: ${({ $isAdded, $isSelected }) =>
    $isAdded
      ? theme.Netural500
      : $isSelected
        ? theme.Brand600
        : theme.Netural800};
  ${fonts.b2};
`

export const RoutineState = styled.span`
  color: ${theme.Netural600};
  ${fonts.b6};
`

export const ButtonNavBox = styled.div<{ $isFullRoutine: boolean }>`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  color: ${theme.Netural800};
  ${fonts.b2};
  opacity: ${({ $isFullRoutine }) => ($isFullRoutine ? "0.5" : "1")};
  cursor: ${({ $isFullRoutine }) =>
    $isFullRoutine ? "not-allowed" : "pointer"};
`

export const FullRoutineWarning = styled.span`
  padding: 0.8rem 1rem;
  color: ${theme.Error};
  ${fonts.d1};
  border-radius: 0.6rem;
  background: ${theme.ErrorWeak};
`
