import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const MypageBackground = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  background: ${theme.Netural200};
  z-index: -999;
`

export const MypageContainer = styled.ul`
  margin-top: 48px;
  display: flex;
  justify-content: center;
`

export const MypageHomeArea = styled.ul`
  width: 870px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 100px;
`

export const MypageTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const MyInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 10px;
`

export const MyBodyInfotmation = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const FixIconButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: ${theme.Netural150};
  width: 32px;
  height: 32px;
  border-radius: 8px;
`

export const RoutinesContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-top: 10px;
`

export const RoutineList = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${theme.Netural300};
`

export const AddIconButtonWrapper = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.Netural300};
  border-radius: 6px;
`

export const AddWorkoutWrapper = styled.div`
  display: flex;
  padding: 16px 8px;
  align-items: center;
  gap: 12px;
  color: ${theme.Netural800};
  ${fonts.b2}
`

export const EmptyWorkoutWrapper = styled.div`
  width: 100%;
  margin-top: 37px;
  padding: 98px 0;
  display: flex;
  gap: 8px;
  align-items: center;
  flex-direction: column;
  color: ${theme.Netural900};
  ${fonts.h4}
`

export const DragAndDropWrapper = styled.div`
  display: flex;
  gap: 18px;
`

export const WorkoutNumList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`

export const WorkoutNum = styled.div`
  padding: 20px 2px 0 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  .line {
    width: 3px;
    height: 100px;
    align-items: stretch;
    border-radius: 10px;
    background: ${theme.Netural300};
  }

  &:last-child .line {
    display: none;
  }
`

export const NumCircle = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-radius: 38.571px;
  background: ${theme.Netural700};
  color: ${theme.Netural0};
  ${fonts.d2}
`

export const PlaceholderWrapper = styled.div<{
  isVisible: boolean
  top: string
}>`
  position: absolute;
  height: 150px;
  width: 770px;
  border-radius: 20px;
  z-index: 1;
  pointer-events: none;
  top: ${({ top }) => top};
  background: ${({ isVisible }) =>
    isVisible ? `${theme.Netural300}` : "transparent"};
  transition:
    background 0.2s ease,
    border 0.2s ease;
`
