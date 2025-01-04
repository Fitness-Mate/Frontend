import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const MyWorkoutWrapper = styled.div`
  display: flex;
  gap: 18px;
`

export const MyWorkoutContent = styled.form<{ isDragging: boolean }>`
  width: 770px;
  z-index: 2;
  height: 157px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 22px 22px 18px 22px;
  margin-bottom: 13px;

  align-items: center;
  border-radius: 20px 20px 16px 16px;
  box-shadow: ${({ isDragging }) =>
    isDragging ? "0px 1px 18px 0px rgba(0, 0, 0, 0.12)" : "none"};
  background: ${theme.Netural0};
`

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLeft = styled.div`
  display: flex;
  gap: 4px;
`

export const DetailIconButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderRight = styled.form`
  display: flex;
  gap: 10px;
  padding-right: 32px;
`
export const HeaderRightInfo = styled.span`
  display: flex;
  padding: 4px 10px;
  flex-direction: column;
  color: ${theme.Netural550};
  ${fonts.d2}
`

export const HeaderRightInfoContent = styled.span`
  display: flex;
  align-items: flex-end;
  color: ${theme.Netural900};
  ${fonts.h2}
`
export const CustomCursor = styled.span`
  position: absolute;
  top: 50%;
  left: calc(100% + 1px);
  transform: translateY(-50%);
  width: 2px;
  height: 24px;
  border-radius: 2px;
  background-color: ${theme.Brand500};
  visibility: hidden;

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
  }
`

export const HeaderRightInfoArea = styled.div<{ width: string }>`
  display: flex;
  height: 33px;
  align-items: center;
  justify-content: right;
  position: relative;
  width: ${(props) => props.width};
  margin-right: 2px;

  &:focus-within ${CustomCursor} {
    visibility: visible;
    animation: blink 1s steps(1, start) infinite;
  }
`

export const HeaderRightInfoInput = styled.input`
  display: inline-flex;
  align-items: center;
  color: ${theme.Netural900};
  ${fonts.h2};
  width: 100%;
  max-width: 100%;
  text-align: right;
  caret-color: transparent;

  &::-webkit-input-placeholder {
    color: ${theme.Netural450};
  }
`

export const InputWidthItem = styled.span`
  position: absolute;
  visibility: hidden;
  whitespace: pre;
  fontsize: inherit;
  fontfamily: inherit;
  letterspacing: inherit;
  lineheight: inherit;
`

export const HeaderRightInfoUnit = styled.span`
  padding: 0 0 2px 2px;
  color: ${theme.Netural550};
  ${fonts.d1}
`

export const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px 0px;
  width: 100%;
  color: ${theme.Netural600};
  ${fonts.b7}
`

export const BottomTitle = styled.div`
  display: flex;
  width: 60px;
  height: 27px;
  justify-content: center;
  align-items: center;
  color: #ff9500;
  ${fonts.b7};
  background-color: #fff6e3;
  border-radius: 6px;
`
export const CompleteIconButtonWrapper = styled.button<{
  isDisabled?: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: ${(props) =>
    props.isDisabled ? theme.Netural200 : theme.Brand50};
  width: 32px;
  height: 32px;
  border-radius: 8px;
`

export const HandleIconButtonWrapper = styled.div`
  padding-top: 60.5px;
  cursor: grab;
`
