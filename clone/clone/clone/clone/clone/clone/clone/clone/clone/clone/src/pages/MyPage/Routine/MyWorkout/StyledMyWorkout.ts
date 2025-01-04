import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const MyWorkoutWrapper = styled.div`
  display: flex;
  gap: 1.8rem;
`

export const MyWorkoutContent = styled.div<{ isDragging: boolean }>`
  width: 77rem;
  z-index: 2;
  height: 15.7rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 2.2rem 2.2rem 1.8rem 2.2rem;
  margin-bottom: 1.3rem;

  align-items: center;
  border-radius: 2rem 2rem 1.6rem 1.6rem;
  box-shadow: ${({ isDragging }) =>
    isDragging ? "0rem 0.1rem 1.8rem 0rem rgba(0, 0, 0, 0.12)" : "none"};
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
  gap: 0.4rem;
`

export const DetailIconButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderRight = styled.div`
  display: flex;
  gap: 1rem;
  padding-right: 3.2rem;
`
export const HeaderRightInfo = styled.span`
  display: flex;
  padding: 0.4rem 1rem;
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
  left: calc(100% + 0.1rem);
  transform: translateY(-50%);
  width: 0.2rem;
  height: 2.4rem;
  border-radius: 0.2rem;
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
  height: 3.3rem;
  align-items: center;
  justify-content: right;
  position: relative;
  width: ${(props) => props.width};
  margin-right: 0.2rem;

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
  padding: 0 0 0.2rem 0.2rem;
  color: ${theme.Netural550};
  ${fonts.d1}
`

export const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 0.4rem 0rem;
  width: 100%;
  color: ${theme.Netural600};
  ${fonts.b7}
`

export const BottomTitle = styled.div`
  display: flex;
  width: 6rem;
  height: 2.7rem;
  justify-content: center;
  align-items: center;
  color: #ff9500;
  ${fonts.b7};
  background-color: #fff6e3;
  border-radius: 0.6rem;
`
export const CompleteIconButtonWrapper = styled.button<{
  isDisabled?: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1.4rem;
  right: 1.4rem;
  background-color: ${(props) =>
    props.isDisabled ? theme.Netural200 : theme.Brand50};
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 0.8rem;
`

export const HandleIconButtonWrapper = styled.div`
  padding-top: 6.05rem;
  cursor: grab;
`
