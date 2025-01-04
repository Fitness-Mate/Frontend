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
  margin-top: 4.8rem;
  display: flex;
  justify-content: center;
`

export const MypageHomeArea = styled.ul`
  width: 87rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 10rem;
`

export const MypageTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const MyInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1rem;
`

export const MyBodyInfotmation = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`

export const FixIconButtonWrapper = styled.div`
  display: flex;
  width: 2.4rem;
  height: 2.4rem;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  background-color: ${theme.Netural300};
  border-radius: 0.6rem;
`

export const RoutineListWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
`

export const RoutinesContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`

export const RoutineList = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  width: 100%;
  border-bottom: 0.1rem solid ${theme.Netural300};
`

export const AddIconButtonWrapper = styled.div`
  display: flex;
  width: 2.4rem;
  height: 2.4rem;
  justify-content: center;
  align-items: center;
  background-color: ${theme.Netural300};
  border-radius: 0.6rem;
`

export const AddWorkoutWrapper = styled.div`
  display: flex;
  padding: 1.6rem 0.8rem;
  align-items: center;
  gap: 1.2rem;
  color: ${theme.Netural800};
  ${fonts.b2}
`

export const EmptyWorkoutWrapper = styled.div`
  width: 100%;
  margin-top: 3.7rem;
  padding: 9.8rem 0;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  flex-direction: column;
  color: ${theme.Netural900};
  ${fonts.h4}
`

export const DragAndDropWrapper = styled.div`
  display: flex;
  gap: 1.8rem;
`

export const WorkoutNumList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`

export const WorkoutNum = styled.div`
  padding: 2rem 0.2rem 0 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  .line {
    width: 0.3rem;
    height: 10rem;
    align-items: stretch;
    border-radius: 1rem;
    background: ${theme.Netural300};
  }

  &:last-child .line {
    display: none;
  }
`

export const NumCircle = styled.div`
  display: flex;
  width: 2.4rem;
  height: 2.4rem;
  align-items: center;
  justify-content: center;
  border-radius: 3.86rem;
  background: ${theme.Netural700};
  color: ${theme.Netural0};
  ${fonts.d2}
`

export const PlaceholderWrapper = styled.div<{
  isVisible: boolean
  top: string
}>`
  position: absolute;
  height: 15rem;
  width: 77rem;
  border-radius: 2rem;
  z-index: 1;
  pointer-events: none;
  top: ${({ top }) => top};
  background: ${({ isVisible }) =>
    isVisible ? `${theme.Netural300}` : "transparent"};
  transition:
    background 0.2s ease,
    border 0.2s ease;
`
