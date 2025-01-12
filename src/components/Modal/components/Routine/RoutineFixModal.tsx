import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"

import Button from "@components/Button/Button"
import Icon from "@components/Icon/Icon"
import Input from "@components/Input/Input"
import Modal from "@components/Modal/Modal"
import "@components/Modal/components/Routine/StyledRoutineModal"
import Title from "@components/Title/Title"

import { MyRoutines } from "@typpes/type"

import { usePostMakeRoutine } from "@hooks/mutation/usePostMakeRoutine"
import { useGetMyRoutines } from "@hooks/query/useGetMyRoutines"
import { useModal } from "@hooks/useModal"

import * as S from "./StyledRoutineModal"

const RoutineFixModal = () => {
  const { isOpen, onClose } = useModal("루틴수정")
  const { mutate } = usePostMakeRoutine()
  const { onOpen } = useModal("삭제")

  const { data: routines = [] } = useGetMyRoutines()

  // react-hook-form 초기화
  const { handleSubmit, setValue, watch, register } = useForm<{
    routines: MyRoutines[]
  }>({
    mode: "onChange",
    defaultValues: {
      routines: [],
    },
  })

  // 초기 데이터 설정
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

  // 폼 데이터 가져오기
  const watchedRoutines = watch("routines")

  const onSubmit = (data: { routines: MyRoutines[] }) => {
    mutate({ routines: data.routines })
    onClose()
  }

  const dragItem = useRef<number | null>(null)
  const dragOverItem = useRef<number | null>(null)

  const [dragPreview, setDragPreview] = useState<{
    content: string
    x: number
    y: number
  } | null>(null)

  const dragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    dragItem.current = position

    setDragPreview({
      content: watchedRoutines[position].routineName,
      x: e.currentTarget.getBoundingClientRect().left, // 초기 x값 고정
      y: e.clientY,
    })

    e.dataTransfer.setDragImage(new Image(), 0, 0) // 기본 드래그 이미지를 숨김
  }

  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    if (dragPreview) {
      setDragPreview((prev) =>
        prev
          ? {
              ...prev,
              x: dragPreview.x, // 기존의 x값 유지 (고정)
              y: e.clientY, // y값은 마우스 위치를 따라감
            }
          : null,
      )
    }
  }

  const dragEnter = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    const element = e.currentTarget
    const isFirstItem = dragItem.current === 0 // 드래그된 요소가 첫 번째 요소인지 확인
    const isLastItem = position === watchedRoutines.length - 1 // 마지막 요소 확인
    const rect = element.getBoundingClientRect()
    const mouseY = e.clientY

    // 기존 클래스 제거
    document
      .querySelectorAll(".item")
      .forEach((el) => el.classList.remove("dragover-top", "dragover-bottom"))

    if (isFirstItem && position === 0) {
      // 첫 번째 요소를 첫 번째 위치에 드롭하는 경우 처리
      element.classList.add("dragover-top")
      dragOverItem.current = 0 // 첫 번째 위치 유지
    } else if (isFirstItem && position === 1) {
      // 첫 번째 요소를 두 번째 요소에 드랍할 경우 항상 위로 삽입
      element.classList.add("dragover-top")
      dragOverItem.current = 0 // 첫 번째 위치로 삽입
    } else if (isLastItem) {
      // 마지막 요소 처리
      const isTopHalf = mouseY < rect.top + rect.height / 2

      if (dragItem.current === position) {
        // 마지막 요소를 마지막 요소 위에 드롭하는 경우
        element.classList.add("dragover-top")
        dragOverItem.current = position // 마지막 위치 유지
      } else if (isTopHalf) {
        element.classList.add("dragover-top")
        dragOverItem.current = position - 1 // 마지막 요소 위로 삽입
      } else {
        element.classList.add("dragover-bottom")
        dragOverItem.current = position // 마지막 위치 유지
      }
    } else {
      // 일반 요소 처리
      const isDraggingAbove = dragItem.current! < position // 드래그한 요소가 현재 위치보다 위에 있는지 확인

      if (isDraggingAbove) {
        // 드래그된 요소의 인덱스가 drop 인덱스보다 작음
        element.classList.add("dragover-top")
        dragOverItem.current = position - 1 // 현재 위치보다 하나 위로 삽입
      } else {
        // 드래그된 요소의 인덱스가 drop 인덱스보다 큼
        element.classList.add("dragover-top")
        dragOverItem.current = position // 현재 위치로 삽입
      }
    }
  }

  const drop = (_: React.DragEvent<HTMLDivElement>) => {
    if (dragItem.current === null || dragOverItem.current === null) return

    const updatedRoutines = [...watchedRoutines]

    if (dragItem.current !== dragOverItem.current) {
      // 드래그한 요소를 원래 위치에서 제거
      const [movedItem] = updatedRoutines.splice(dragItem.current, 1)

      // 새로운 위치에 삽입
      updatedRoutines.splice(dragOverItem.current, 0, movedItem)
    }

    // 루틴 인덱스 재정렬
    updatedRoutines.forEach((routine, index) => {
      routine.routineIndex = index + 1 // 새 인덱스 설정
    })

    // 폼 상태 업데이트
    setValue("routines", updatedRoutines)

    // 상태 초기화
    dragItem.current = null
    dragOverItem.current = null

    // 모든 클래스 제거
    document
      .querySelectorAll(".item")
      .forEach((el) => el.classList.remove("dragover-top", "dragover-bottom"))

    setDragPreview(null) // 드래그 프리뷰 제거
  }

  const dragEnd = () => {
    setDragPreview(null) // 드래그 종료 시 커스텀 프리뷰 제거
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
              {watchedRoutines.map((routine, idx) => (
                <S.RoutineItemContainer
                  key={idx}
                  className={"item"}
                  data-index={idx}
                  onDragEnter={(e) => dragEnter(e, idx)}
                  onDrop={(e) => drop(e)}
                  onDragEnd={dragEnd}>
                  <S.HandleIconButtonWrapper
                    draggable
                    onDragStart={(e) => dragStart(e, idx)}>
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
                            ...register(`routines.${idx}.routineName`), // react-hook-form 연결
                            value: routine.routineName, // 폼 상태에서 가져온 값
                            onChange: (
                              e: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                              const updatedRoutine = {
                                ...routine,
                                routineName: e.target.value, // 새로운 값
                              }

                              // setValue로 react-hook-form 상태 업데이트
                              setValue(
                                `routines.${idx}.routineName`,
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
