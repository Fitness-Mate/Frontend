import { useEffect, useState } from "react"

import { useModalStore } from "@store/useModalStore"

import Icon from "@components/Icon/Icon"
import Modal from "@components/Modal/Modal"
import RoutineAddModalButton from "@components/Modal/components/Routine/RoutineAddModalButton"
import RoutineInfoModalButton from "@components/Modal/components/Routine/RoutineInfoModalButton"
import "@components/Modal/components/Routine/StyledRoutineModal"
import Title from "@components/Title/Title"

import { useGetMyRoutines } from "@hooks/query/useGetMyRoutines"
import { useGetRoutineQueries } from "@hooks/query/useGetRoutineQueries"
import { useModal } from "@hooks/useModal"

import { checkKorean } from "@utils/checkKorean"

import * as S from "./StyledRoutineModal"

const RoutineAddModal = () => {
  const [selectedRoutines, setSelectedRoutines] = useState(new Set<number>())

  const { isOpen, onClose } = useModal("루틴추가", {
    beforeClose: () => {
      setSelectedRoutines(new Set())
    },
  })

  const { onOpen } = useModal("루틴정보")

  const { setRoutineState, workoutState = { koreanName: "" } } = useModalStore()

  const { data: routines = [] } = useGetMyRoutines()
  const { data: workouts } = useGetRoutineQueries(routines)

  const isFullRoutine = routines.length >= 5

  const filteredRoutines = [...routines].map((routine, index) =>
    workouts[index]?.some((workout) =>
      workout?.workoutName?.includes(workoutState?.koreanName || ""),
    )
      ? { ...routine, isAdded: true }
      : { ...routine, isAdded: false },
  )

  const updateSet = (set: Set<number>, id: number) => {
    const updatedSet = new Set(set)
    if (updatedSet.has(id)) {
      updatedSet.delete(id)
    } else {
      updatedSet.add(id)
    }
    return updatedSet
  }

  const handleToggleRoutine = (routineId: number) => {
    setSelectedRoutines((prevSet) => updateSet(prevSet, routineId))
  }

  const saveRoutineState = () => {
    setRoutineState([...selectedRoutines])
    setSelectedRoutines(new Set())
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCloseButton
      disableInteraction>
      <Modal.Title>
        <Title variant="midA">
          {checkKorean(workoutState?.koreanName)} 추가할
          <br />
          루틴을 선택해주세요
          <Title.SubBottomTitle>여러 개 선택할 수 있어요</Title.SubBottomTitle>
        </Title>
      </Modal.Title>
      <Modal.Content isFull>
        <S.ContentBigWrapper>
          <RoutineAddModalButton
            onClose={onClose}
            isFullRoutine={isFullRoutine}
          />
          <S.RoutineList>
            {filteredRoutines?.map(({ routineId, routineName, isAdded }) => (
              <S.RoutineItem
                key={routineId}
                onClick={() => {
                  handleToggleRoutine(routineId)
                }}
                disabled={isAdded}>
                <S.RoutineName
                  $isSelected={selectedRoutines.has(routineId)}
                  $isAdded={isAdded}>
                  {routineName}
                </S.RoutineName>
                <S.RoutineState>
                  {isAdded ? (
                    "추가됨"
                  ) : (
                    <Icon
                      icon={
                        selectedRoutines.has(routineId)
                          ? "CheckBlue"
                          : "CheckGray"
                      }
                      size={24}
                    />
                  )}
                </S.RoutineState>
              </S.RoutineItem>
            ))}
          </S.RoutineList>
        </S.ContentBigWrapper>
      </Modal.Content>
      <Modal.Footer>
        <RoutineInfoModalButton
          isDisabled={!selectedRoutines.size}
          onOpen={onOpen}
          onClose={onClose}
          saveRoutineState={saveRoutineState}
        />
      </Modal.Footer>
    </Modal>
  )
}

export default RoutineAddModal
