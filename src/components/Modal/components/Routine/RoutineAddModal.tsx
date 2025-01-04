import { useState } from "react"

import { useModalStore } from "@store/useModalStore"

import Button from "@components/Button/Button"
import Icon from "@components/Icon/Icon"
import Modal from "@components/Modal/Modal"
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
  const { onOpen: openAddRoutine } = useModal("루틴생성")

  const { setRoutineState, workoutState = { koreanName: "" } } = useModalStore()

  const { data: routines = [] } = useGetMyRoutines()
  const { data: workouts } = useGetRoutineQueries(routines)

  const isFullRoutine = routines.length >= 6

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
          <S.AddRoutine
            onClick={() => {
              openAddRoutine()
              onClose()
            }}>
            <S.AddRoutineButton
              $isFullRoutine={isFullRoutine}
              disabled={isFullRoutine}>
              <Icon
                icon="AddRoundGray"
                size={32}
              />
              추가하기
            </S.AddRoutineButton>

            {isFullRoutine && (
              <S.FullRoutineWarning>
                루틴은 최대 5개까지만 만들 수 있어요
              </S.FullRoutineWarning>
            )}
          </S.AddRoutine>
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
        <Button
          variant="main"
          size="full"
          disabled={!selectedRoutines.size}
          onClick={() => {
            onOpen()
            onClose()
            saveRoutineState()
          }}>
          다음
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RoutineAddModal
