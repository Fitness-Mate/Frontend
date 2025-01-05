import React from "react"
import { UseFormRegister, UseFormSetValue } from "react-hook-form"

import Icon from "@components/Icon/Icon"
import Input from "@components/Input/Input"

import { useModal } from "@hooks/useModal"

import * as S from "./StyledRoutineModal"

interface RoutineItemProps {
  routine: {
    routineId: number
    routineName: string
    routineIndex: number
  }
  index: number
  register: UseFormRegister<{
    routines: {
      routineId: number
      routineName: string
      routineIndex: number
    }[]
  }>
  setValue: UseFormSetValue<{
    routines: {
      routineId: number
      routineName: string
      routineIndex: number
    }[]
  }>
  startDrag: (index: number) => void
}

const RoutineItem: React.FC<RoutineItemProps> = ({
  routine,
  index,
  register,
  setValue,
}) => {
  const { onOpen } = useModal("삭제")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(`routines.${index}.routineName`, e.target.value)
  }

  const handleDeleteClick = () => {
    onOpen()
  }

  return (
    <S.RoutineItemContainer>
      <S.HandleIconButtonWrapper>
        <Icon
          icon="Handle"
          size={18}
        />
      </S.HandleIconButtonWrapper>
      <S.RoutineHoverArea>
        <S.InputWrapper>
          <Input>
            <Input.Input
              props={{
                ...register(`routines.${index}.routineName`),
                value: routine.routineName,
                onChange: handleInputChange,
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
