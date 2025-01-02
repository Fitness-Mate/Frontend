import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { DraggableProvided } from "@hello-pangea/dnd"

import MyWorkoutDropDown from "@components/DropDown/components/MyWorkoutDropDown"
import Icon from "@components/Icon/Icon"
import IconButton from "@components/IconButton/IconButton"
import Title from "@components/Title/Title"

import { StrictPropsWithChildren } from "@typpes/type"

import useEditWorkoutList from "@hooks/mutation/useEditWorkoutList"

import DynamicInput from "./DynamicInput"
import * as S from "./StyledMyWorkout"

interface MyWorkoutProps {
  routineId: number
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
  index: number
}

const MyWorkout = ({
  routineId,
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
  index,
}: StrictPropsWithChildren<MyWorkoutProps>) => {
  const navigate = useNavigate()
  const [isEditMode, setIsEditMode] = useState(false)

  const [weightValue, setWeightValue] = useState(weight)
  const [repValue, setRepValue] = useState(rep)
  const [setCountValue, setSetCountValue] = useState(setCount)

  const { mutate: editWorkout } = useEditWorkoutList(routineId)

  const handleDetailWorkout = (workoutId: number) => {
    navigate(`/workoutdetail/${workoutId}`)
  }

  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev)
  }

  const handleSave = () => {
    editWorkout({
      myWorkoutId,
      workout: {
        myWorkoutIndex: index + 1,
        weight: weightValue,
        rep: repValue,
        setCount: setCountValue,
        caution,
      },
    })

    setIsEditMode(false)
  }

  return (
    <S.MyWorkoutWrapper
      ref={innerRef}
      {...draggableProps}>
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
            {isEditMode ? (
              <>
                <S.HeaderRightInfo>
                  중량
                  <S.HeaderRightInfoContent>
                    <DynamicInput
                      value={weightValue}
                      placeholder={weight}
                      onChange={(e) => setWeightValue(e.target.value)}
                    />
                    <S.HeaderRightInfoUnit>kg</S.HeaderRightInfoUnit>
                  </S.HeaderRightInfoContent>
                </S.HeaderRightInfo>
                <S.HeaderRightInfo>
                  횟수
                  <S.HeaderRightInfoContent>
                    <DynamicInput
                      value={repValue}
                      placeholder={rep}
                      onChange={(e) => setRepValue(e.target.value)}
                    />
                    <S.HeaderRightInfoUnit>회</S.HeaderRightInfoUnit>
                  </S.HeaderRightInfoContent>
                </S.HeaderRightInfo>
                <S.HeaderRightInfo>
                  세트 수
                  <S.HeaderRightInfoContent>
                    <DynamicInput
                      value={setCountValue}
                      placeholder={setCount}
                      onChange={(e) => setSetCountValue(e.target.value)}
                    />
                    <S.HeaderRightInfoUnit>세트</S.HeaderRightInfoUnit>
                  </S.HeaderRightInfoContent>
                </S.HeaderRightInfo>
              </>
            ) : (
              <>
                <S.HeaderRightInfo>
                  중량
                  <S.HeaderRightInfoContent>
                    {weightValue}
                    <S.HeaderRightInfoUnit>kg</S.HeaderRightInfoUnit>
                  </S.HeaderRightInfoContent>
                </S.HeaderRightInfo>
                <S.HeaderRightInfo>
                  횟수
                  <S.HeaderRightInfoContent>
                    {repValue}
                    <S.HeaderRightInfoUnit>회</S.HeaderRightInfoUnit>
                  </S.HeaderRightInfoContent>
                </S.HeaderRightInfo>
                <S.HeaderRightInfo>
                  세트 수
                  <S.HeaderRightInfoContent>
                    {setCountValue}
                    <S.HeaderRightInfoUnit>세트</S.HeaderRightInfoUnit>
                  </S.HeaderRightInfoContent>
                </S.HeaderRightInfo>
              </>
            )}
          </S.HeaderRight>
        </S.HeaderWrapper>
        <S.BottomWrapper>
          <S.BottomTitle>주의사항</S.BottomTitle>
          {caution}
        </S.BottomWrapper>
        {isEditMode ? (
          <S.CompleteIconButtonWrapper>
            <IconButton
              icon="CheckBlue"
              size={18}
              onClick={handleSave}
            />
          </S.CompleteIconButtonWrapper>
        ) : (
          <MyWorkoutDropDown
            myWorkoutId={myWorkoutId}
            routineId={routineId}
            onEditClick={toggleEditMode}
          />
        )}
      </S.MyWorkoutContent>
      <S.HandleIconButtonWrapper {...dragHandleProps}>
        <Icon
          icon="Handle"
          size={28}
        />
      </S.HandleIconButtonWrapper>
    </S.MyWorkoutWrapper>
  )
}

export default MyWorkout
