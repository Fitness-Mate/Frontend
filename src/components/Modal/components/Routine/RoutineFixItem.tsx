import React from "react"
import { UseFormRegister, UseFormSetValue } from "react-hook-form"

import Icon from "@components/Icon/Icon"
import Input from "@components/Input/Input"

import { MyRoutines } from "@typpes/type"

import { useModal } from "@hooks/useModal"

import * as S from "./StyledRoutineModal"

interface RoutineItemProps {
  routine: MyRoutines
  items: MyRoutines[]
  index: number
  dragStart: (
    e: React.DragEvent<HTMLDivElement>,
    position: number,
    content: string,
  ) => void
  dragOver: (e: React.DragEvent<HTMLDivElement>) => void
  dragEnter: (e: React.DragEvent<HTMLDivElement>, position: number) => void
  drop: (e: React.DragEvent<HTMLDivElement>) => void
  dragEnd: (e: React.DragEvent<HTMLDivElement>) => void
  register: UseFormRegister<{ routines: MyRoutines[] }>
  setValue: UseFormSetValue<{ routines: MyRoutines[] }>
}

const RoutineItem: React.FC<RoutineItemProps> = ({
  routine,
  items,
  index,
  dragStart,
  dragOver,
  dragEnter,
  drop,
  dragEnd,
  register,
  setValue,
}) => {
  const { onOpen } = useModal("삭제")

  return (
    <S.RoutineItemContainer
      className="item"
      onDragEnter={(e) => dragEnter(e, index)}
      onDragOver={dragOver}
      onDrop={drop}
      onDragEnd={dragEnd}>
      <S.HandleIconButtonWrapper
        draggable={items.length > 1}
        onDragStart={(e) => dragStart(e, index, routine.routineName)}>
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
                value: routine.routineName,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                  const updatedRoutine = {
                    ...routine,
                    routineName: e.target.value,
                  }

                  // setValue로 react-hook-form 상태 업데이트
                  setValue(
                    `routines.${index}.routineName`,
                    updatedRoutine.routineName,
                  )
                },
              }}
            />
          </Input>
        </S.InputWrapper>
        <S.DeleteIconButton onClick={() => onOpen()}>
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
