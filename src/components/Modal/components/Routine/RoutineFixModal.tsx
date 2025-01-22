import { useEffect } from "react"
import { useForm } from "react-hook-form"

import Button from "@components/Button/Button"
import Icon from "@components/Icon/Icon"
import Modal from "@components/Modal/Modal"
import Title from "@components/Title/Title"

import { MyRoutines } from "@typpes/type"

import { usePostMakeRoutine } from "@hooks/mutation/usePostMakeRoutine"
import { useGetMyRoutines } from "@hooks/query/useGetMyRoutines"
import { useCustomDragAndDrop } from "@hooks/useCustomDragAndDrop"
import { useModal } from "@hooks/useModal"

import RoutineFixItem from "./RoutineFixItem"
import * as S from "./StyledRoutineModal"

const RoutineFixModal = () => {
  const { isOpen, onClose } = useModal("루틴수정")
  const { mutate } = usePostMakeRoutine()

  const { data: routines = [] } = useGetMyRoutines()

  const { handleSubmit, setValue, watch, register } = useForm<{
    routines: MyRoutines[]
  }>({
    mode: "onChange",
    defaultValues: {
      routines: [],
    },
  })

  useEffect(() => {
    if (routines.length > 0) {
      setValue(
        "routines",
        routines.map((routine) => ({
          routineId: routine.routineId,
          routineName: routine.routineName,
          routineIndex: routine.routineIndex,
        })),
      )
    }
  }, [routines, setValue])

  const watchedRoutines = watch("routines")

  const { dragPreview, dragStart, dragOver, dragEnter, drop, dragEnd } =
    useCustomDragAndDrop(watchedRoutines, (updatedItems) => {
      setValue("routines", updatedItems) // useForm의 상태를 직접 업데이트
    })

  const onSubmit = (data: { routines: MyRoutines[] }) => {
    mutate({ routines: data.routines })
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCloseButton
      disableInteraction
      $useFlexCenter={true}>
      <Modal.Title>
        <Title variant="midA">루틴 편집</Title>
      </Modal.Title>
      <Modal.Content>
        <S.RoutineFixForm onSubmit={handleSubmit(onSubmit)}>
          <S.MyRoutineWrapper>
            <S.MyRoutineList onDragOver={dragOver}>
              {watchedRoutines.map((routine, index) => (
                <RoutineFixItem
                  key={routine.routineId}
                  routine={routine}
                  items={routines}
                  index={index}
                  dragStart={dragStart}
                  dragOver={dragOver}
                  dragEnter={dragEnter}
                  drop={(e) => drop(e)}
                  register={register}
                  dragEnd={(e) => dragEnd(e)}
                  setValue={setValue}
                />
              ))}
              {dragPreview && (
                <S.DragPreviewContainer
                  style={{
                    top: `${dragPreview.y}px`,
                    left: `${dragPreview.x}px`,
                  }}>
                  <S.HandleIconButtonWrapper>
                    <Icon
                      icon="Handle"
                      size={18}
                    />
                  </S.HandleIconButtonWrapper>
                  <S.DragPreview>{dragPreview.content}</S.DragPreview>
                </S.DragPreviewContainer>
              )}
            </S.MyRoutineList>
          </S.MyRoutineWrapper>
          <Modal.Footer>
            <Button
              variant="main"
              size="full"
              type="submit">
              적용하기
            </Button>
          </Modal.Footer>
        </S.RoutineFixForm>
      </Modal.Content>
    </Modal>
  )
}

export default RoutineFixModal
