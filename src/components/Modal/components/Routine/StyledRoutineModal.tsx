import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

import theme, { fonts } from "@styles/theme"

export const ContentWrapper = styled.div`
  height: 217px;
  width: 100%;
`

export const ContentForm = styled.form`
  display: flex;
  gap: 12px;
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
  min-height: 36px;
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
  gap: 31px;
`

export const MachineInput = styled.input`
  color: ${theme.Netural800};
  ${fonts.h1};
  font-weight: 500;
  font-size: 28px;
  display: flex;
  padding: 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: ${theme.Netural200};
  text-align: center;

  &::-webkit-input-placeholder {
    color: ${theme.Netural500};
    ${fonts.h1};
    font-weight: 500;
  }

  min-height: 61px;
  width: 61px;

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
  gap: 20px;
`

export const MachineInputItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  &:first-child input {
    width: 80px;
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
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const AddRoutineButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  width: 100%;
  &:disabled {
    cursor: default;
  }
`

export const RoutineList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  overflow: auto;
`

export const RoutineItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-radius: 12px;
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
  gap: 12px;
  align-items: center;
  color: ${theme.Netural800};
  ${fonts.b2};
  opacity: ${({ $isFullRoutine }) => ($isFullRoutine ? "0.5" : "1")};
  cursor: ${({ $isFullRoutine }) =>
    $isFullRoutine ? "not-allowed" : "pointer"};
`

export const FullRoutineWarning = styled.span`
  padding: 8px 10px;
  color: ${theme.Error};
  ${fonts.d1};
  border-radius: 6px;
  background: ${theme.ErrorWeak};
`

export const RoutineFixForm = styled.form`
  width: 100%;
  height: 100%;
`

export const MyRoutineWrapper = styled.div`
  height: 394px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const MyRoutineList = styled.div`
  z-index: 6000;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 24px 0 32px 0;

  .item.dragover {
    border-top: 2px solid rgb(112, 112, 112);
  }

  .drag-handle {
    cursor: grab;
    margin-right: 10px;
  }

  .content {
    flex: 1;
    width: 100%;
    background: lightblue;
    height: 42px;
  }
`

export const RoutineItemContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
  align-items: center;
  margin: 0;
  padding: 4px 0;
  border-top: 2px solid rgba(112, 112, 112, 0);
  border-bottom: 2px solid rgba(112, 112, 112, 0);

  &.dragover-top {
    border-top: 2px solid rgb(112, 112, 112);
  }

  &.dragover-bottom {
    border-bottom: 2px solid rgb(112, 112, 112);
  }
`

export const DragPreviewContainer = styled.div`
  position: fixed;
  pointer-events: none;
  opacity: 0.9;
  display: flex;
  gap: 4px;
  align-items: center;
  margin: 0;
  z-index: 9999;
  transform: translateX(0); /* x축 이동을 막음 */
`

export const DragPreview = styled.div`
  ${fonts.b4};
  display: flex;
  height: 54px;
  width: 336px;
  padding: 16px 8px 16px 16px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid ${theme.Netural400};
  background: ${theme.Netural0};
`

export const DeleteIconButton = styled.button`
  width: 0;
  height: 32px;
  opacity: 0;
  overflow: hidden;
  transition:
    width 0.3s ease,
    opacity 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
`

export const InputWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 100%;
  transition: width 0.3s ease;
  height: 54px;
`

export const RoutineHoverArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;

  &:hover ${DeleteIconButton} {
    width: 32px;
    opacity: 1;
    background: ${theme.ErrorWeak};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  &:hover ${InputWrapper} {
    width: calc(100% - 40px);
  }
`

export const HandleIconButtonWrapper = styled.div`
  cursor: grab;
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`

export const ModalStyle = createGlobalStyle`
  .sortable-list .item.dragstart {
    opacity: 1 !important; /* 반투명 효과 제거 */
  }
`
