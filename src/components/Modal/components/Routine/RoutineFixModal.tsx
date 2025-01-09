import { useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"

import styled from "styled-components"

import Button from "@components/Button/Button"
import Modal from "@components/Modal/Modal"
import "@components/Modal/components/Routine/StyledRoutineModal"
import Title from "@components/Title/Title"

import { MyRoutines } from "@typpes/type"

import { usePostMakeRoutine } from "@hooks/mutation/usePostMakeRoutine"
import { useGetMyRoutines } from "@hooks/query/useGetMyRoutines"
import { useModal } from "@hooks/useModal"

import * as S from "./StyledRoutineModal"

export const DragPreview = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  background-color: lightblue;
  padding: 8px 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
  transform: translate(-50%, -50%);
`

const RoutineFixModal = () => {
  const { isOpen, onClose } = useModal("루틴수정")
  const { mutate } = usePostMakeRoutine()

  const { data: routines = [] } = useGetMyRoutines()
  const { handleSubmit, setValue } = useForm<{
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

  const onSubmit = (data: { routines: MyRoutines[] }) => {
    mutate({ routines: data.routines })
    onClose()
  }

  const dragItem = useRef<number | null>(null)
  const dragOverItem = useRef<number | null>(null)
  const [list, setList] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ])

  const [dragPreview, setDragPreview] = useState<{
    content: string
    x: number
    y: number
  } | null>(null)

  const dragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    dragItem.current = position
    setDragPreview({ content: list[position], x: e.clientX, y: e.clientY })
    e.dataTransfer.setDragImage(new Image(), 0, 0) // 기본 드래그 이미지를 숨김
  }

  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (dragPreview) {
      setDragPreview((prev) =>
        prev ? { ...prev, x: e.clientX, y: e.clientY } : null,
      )
    }
  }

  const dragEnter = (_: React.DragEvent<HTMLDivElement>, position: number) => {
    const previousElement = document.querySelector(
      `.item[data-index="${dragOverItem.current}"]`,
    )
    previousElement?.classList.remove("dragover")

    dragOverItem.current = position
    const currentElement = document.querySelector(
      `.item[data-index="${position}"]`,
    )
    currentElement?.classList.add("dragover")
  }

  const drop = (_: React.DragEvent<HTMLDivElement>) => {
    if (dragItem.current === null || dragOverItem.current === null) return

    const newList = [...list]
    const dragItemValue = newList[dragItem.current]
    newList.splice(dragItem.current, 1)
    newList.splice(dragOverItem.current, 0, dragItemValue)

    dragItem.current = null
    dragOverItem.current = null

    document
      .querySelectorAll(".item")
      .forEach((el) => el.classList.remove("dragstart", "dragover"))

    setDragPreview(null) // 커스텀 프리뷰 제거
    setList(newList)
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
            <div
              className="list-container"
              onDragOver={dragOver}>
              <S.MyRoutineList>
                {list.map((item, idx) => (
                  <div
                    key={idx}
                    className="item"
                    data-index={idx}
                    onDragEnter={(e) => dragEnter(e, idx)}
                    onDrop={(e) => drop(e)}
                    onDragEnd={dragEnd}>
                    <div
                      className="drag-handle"
                      draggable
                      onDragStart={(e) => dragStart(e, idx)}>
                      ☰
                    </div>
                    <div className="content">{item}</div>
                  </div>
                ))}
              </S.MyRoutineList>
              {dragPreview && (
                <DragPreview
                  style={{
                    top: `${dragPreview.y}px`,
                    left: `${dragPreview.x}px`,
                  }}>
                  {dragPreview.content}
                </DragPreview>
              )}
            </div>
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
