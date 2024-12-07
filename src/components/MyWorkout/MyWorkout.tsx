import { useNavigate } from "react-router-dom"

import { DraggableProvided } from "@hello-pangea/dnd"

import DropDown from "@components/DropDown/DropDown"
import Icon from "@components/Icon/Icon"
import IconButton from "@components/IconButton/IconButton"
import Title from "@components/Title/Title"

import { StrictPropsWithChildren } from "@typpes/type"

import { useDropDown } from "@hooks/useDropDown"

import * as S from "./StyledMyWorkout"

interface MyWorkoutProps {
  workoutId: number
  myWorkoutId: number
  children: string
  bodyParts: string
  caution: string
  setCount: string
  weight: string
  rep: string
  onClick: () => void
  draggableProps: DraggableProvided["draggableProps"]
  dragHandleProps: DraggableProvided["dragHandleProps"]
  innerRef: (element: HTMLElement | null) => void
  isDragging: boolean
  isRemoveSuccess: () => void
}

const MyWorkout = ({
  workoutId,
  myWorkoutId,
  children,
  bodyParts,
  setCount,
  rep,
  weight,
  caution,
  draggableProps,
  dragHandleProps,
  innerRef,
  isDragging,
  isRemoveSuccess,
}: StrictPropsWithChildren<MyWorkoutProps>) => {
  const navigate = useNavigate()
  const handleDetailWorkout = (workoutId: number) => {
    navigate(`/workoutdetail/${workoutId}`)
    console.log(workoutId)
  }

  const { isOpen, dropDownRef, toggleDropDown } = useDropDown()

  return (
    <S.MyWorkoutWrapper
      ref={innerRef}
      {...draggableProps}
      {...dragHandleProps}>
      <S.MyWorkoutContent isDragging={isDragging}>
        <S.HeaderWrapper>
          <S.HeaderLeft>
            <Title variant="midC">
              <Title.SubTopIconTitle>
                {children}
                <S.DetailIconButtonWrapper>
                  <IconButton
                    icon="RightArrowGrey"
                    size={24}
                    onClick={() => {
                      handleDetailWorkout(workoutId)
                    }}
                  />
                </S.DetailIconButtonWrapper>
              </Title.SubTopIconTitle>
              <Title.SubBottomTitle>{bodyParts}</Title.SubBottomTitle>
            </Title>
          </S.HeaderLeft>
          <S.HeaderRight>
            <S.HeaderRightInfo>
              중량
              <S.HeaderRightInfoContent>
                {weight}
                <S.HeaderRightInfoUnit>kg</S.HeaderRightInfoUnit>
              </S.HeaderRightInfoContent>
            </S.HeaderRightInfo>
            <S.HeaderRightInfo>
              횟수
              <S.HeaderRightInfoContent>
                {rep}
                <S.HeaderRightInfoUnit>회</S.HeaderRightInfoUnit>
              </S.HeaderRightInfoContent>
            </S.HeaderRightInfo>
            <S.HeaderRightInfo>
              세트 수
              <S.HeaderRightInfoContent>
                {setCount}
                <S.HeaderRightInfoUnit>세트</S.HeaderRightInfoUnit>
              </S.HeaderRightInfoContent>
            </S.HeaderRightInfo>
          </S.HeaderRight>
        </S.HeaderWrapper>
        <S.BottomWrapper>
          <S.BottomTitle>주의사항</S.BottomTitle>
          {caution}
        </S.BottomWrapper>
        <S.FixIconButtonWrapper ref={dropDownRef}>
          <IconButton
            icon="PencilGrey"
            size={18}
            onClick={toggleDropDown}
          />
        </S.FixIconButtonWrapper>
        {isOpen && (
          <DropDown
            myWorkoutId={myWorkoutId}
            isRemoveSuccess={isRemoveSuccess}
          />
        )}
      </S.MyWorkoutContent>
      <S.HandleIconButtonWrapper>
        <Icon
          icon="Handle"
          size={24}
        />
      </S.HandleIconButtonWrapper>
    </S.MyWorkoutWrapper>
  )
}

export default MyWorkout
