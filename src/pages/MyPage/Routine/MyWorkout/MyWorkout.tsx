import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { DraggableProvided } from "@hello-pangea/dnd"

import MyWorkoutDropDown from "@components/DropDown/components/MyWorkoutDropDown"
import Icon from "@components/Icon/Icon"
import IconButton from "@components/IconButton/IconButton"
import Title from "@components/Title/Title"

import { RoutineInfoType, StrictPropsWithChildren } from "@typpes/type"

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

  const handleDetailWorkout = (workoutId: number) => {
    navigate(`/workoutdetail/${workoutId}`)
  }

  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev)
  }

  const { register, handleSubmit, watch, setValue } = useForm<RoutineInfoType>({
    defaultValues: {
      weight,
      rep,
      setCount,
    },
  })

  const { mutate: editWorkout } = useEditWorkoutList(routineId)

  const handleSave: SubmitHandler<RoutineInfoType> = (data) => {
    editWorkout({
      myWorkoutId,
      workout: {
        myWorkoutIndex: index + 1,
        ...data,
        caution,
      },
    })

    setIsEditMode(false)
  }

  return (
    <S.MyWorkoutWrapper
      ref={innerRef}
      {...draggableProps}>
      <S.MyWorkoutContent
        onSubmit={handleSubmit(handleSave)}
        isDragging={isDragging}>
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
                      name="weight"
                      placeholder={weight}
                      register={register}
                      setValue={setValue}
                      watchValue={watch("weight") || ""}
                    />
                    <S.HeaderRightInfoUnit>kg</S.HeaderRightInfoUnit>
                  </S.HeaderRightInfoContent>
                </S.HeaderRightInfo>
                <S.HeaderRightInfo>
                  횟수
                  <S.HeaderRightInfoContent>
                    <DynamicInput
                      name="rep"
                      placeholder={rep}
                      register={register}
                      setValue={setValue}
                      watchValue={watch("rep") || ""}
                    />
                    <S.HeaderRightInfoUnit>회</S.HeaderRightInfoUnit>
                  </S.HeaderRightInfoContent>
                </S.HeaderRightInfo>
                <S.HeaderRightInfo>
                  세트 수
                  <S.HeaderRightInfoContent>
                    <DynamicInput
                      name="setCount"
                      placeholder={setCount}
                      register={register}
                      setValue={setValue}
                      watchValue={watch("setCount") || ""}
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
              </>
            )}
          </S.HeaderRight>
        </S.HeaderWrapper>
        <S.BottomWrapper>
          <S.BottomTitle>주의사항</S.BottomTitle>
          {caution}
        </S.BottomWrapper>
        {isEditMode ? (
          <S.CompleteIconButtonWrapper type="submit">
            <IconButton
              icon="CheckBlue"
              size={18}
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
