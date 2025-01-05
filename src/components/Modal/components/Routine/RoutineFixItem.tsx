import React from "react"
import { UseFormRegister, UseFormSetValue } from "react-hook-form"

import { DraggableProvided } from "@hello-pangea/dnd"

import Icon from "@components/Icon/Icon"
import Input from "@components/Input/Input"

import { useModal } from "@hooks/useModal"

import * as S from "./StyledRoutineModal"

interface RoutineItemProps {
  routine: { routineId: number; routineName: string }
  index: number
  register: UseFormRegister<{
    routines: { routineId: number; routineName: string; routineIndex: number }[]
  }>
  provided: DraggableProvided
  setValue: UseFormSetValue<{
    routines: { routineId: number; routineName: string; routineIndex: number }[]
  }>
}

const RoutineItem: React.FC<RoutineItemProps> = ({
  routine,
  index,
  register,
  provided,
  setValue,
}) => {
  const { onOpen } = useModal("삭제")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // input 값이 수정될 때마다 해당 루틴을 업데이트
    const updatedRoutine = {
      ...routine,
      routineName: e.target.value,
    }

    // setValue로 수정된 루틴 이름을 반영
    setValue(`routines.${index}.routineName`, updatedRoutine.routineName)
    console.log(updatedRoutine)
  }

  const handleDeleteClick = () => {
    // 삭제 모달을 연다
    onOpen()
  }

  return (
    <S.RoutineItemContainer
      ref={(el) => {
        provided.innerRef(el)
      }}
      {...provided.draggableProps}>
      <S.HandleIconButtonWrapper {...provided.dragHandleProps}>
        <Icon
          icon="Handle"
          size={18}
        />
      </S.HandleIconButtonWrapper>
      <S.RoutineHoverArea>
        <S.InputWrapper>
          <Input key={routine.routineId}>
            <Input.Input
              props={{
                ...register(`routines.${index}.routineName`),
                value: routine.routineName, // 현재 값 표시
                onChange: handleInputChange, // 수정 시 업데이트
              }}
            />
          </Input>
        </S.InputWrapper>
        <S.DeleteIconButton onClick={handleDeleteClick}>
          <Icon
            icon="RedTrash"
            size={18}
          />
        </S.DeleteIconButton>
      </S.RoutineHoverArea>
    </S.RoutineItemContainer>
  )
}

export default RoutineItem
