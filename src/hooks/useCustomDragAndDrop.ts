import { useRef, useState } from "react"

import { MyRoutines } from "@typpes/type"

export const useCustomDragAndDrop = (
  items: MyRoutines[],
  updateItems: (updatedItems: MyRoutines[]) => void,
) => {
  const dragItem = useRef<number | null>(null)
  const dragOverItem = useRef<number | null>(null)
  const [dragPreview, setDragPreview] = useState<{
    content: string
    x: number
    y: number
  } | null>(null)

  const dragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    document.body.style.cursor = "grabbing" // 전역 커서 설정
    e.currentTarget.classList.add("dragging") // dragging 클래스 추가

    dragItem.current = position

    const rect = e.currentTarget.getBoundingClientRect() // 요소 위치 정보

    setDragPreview({
      content: items[position].routineName,
      x: rect.left - 2, // x값을 살짝 왼쪽으로 이동 (-3px)
      y: e.clientY - 30, // y값은 그대로
    })

    e.dataTransfer.setDragImage(new Image(), 0, 0) // 기본 드래그 이미지를 숨김
  }

  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    const rect = e.currentTarget.getBoundingClientRect()

    const yInElement = e.clientY - rect.top - 30
    const adjustedY = Math.max(20, Math.min(yInElement, rect.height - 20))

    setDragPreview((prev) =>
      prev
        ? {
            ...prev,
            y: rect.top + adjustedY,
          }
        : null,
    )

    // `dragOver`에서도 드래그 위치를 업데이트
    if (dragItem.current !== null) {
      dragOverItem.current = Math.floor(
        (yInElement / rect.height) * items.length,
      )
    }
  }

  const dragEnter = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    e.preventDefault()
    document.body.style.cursor = "grabbing" // 드래그 중에도 grabbing 커서 유지

    const element = e.currentTarget

    const isFirstItem = dragItem.current === 0 // 드래그된 요소가 첫 번째 요소인지 확인
    const isLastItem = position === items.length - 1 // 마지막 요소 확인

    const rect = e.currentTarget.getBoundingClientRect()
    const mouseY = e.clientY

    // 정상적으로 드래그 가능한 영역인 경우
    dragOverItem.current = position

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

  const drop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (dragItem.current === null || dragOverItem.current === null) return

    const updatedItems = [...items]

    if (dragItem.current !== dragOverItem.current) {
      const [movedItem] = updatedItems.splice(dragItem.current, 1)
      updatedItems.splice(dragOverItem.current, 0, movedItem)
    }

    updatedItems.forEach((item, index) => {
      item.routineIndex = index + 1
    })

    updateItems(updatedItems)
    dragItem.current = null
    dragOverItem.current = null
    setDragPreview(null)
  }

  const dragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    document.body.style.cursor = "" // 전역 커서 복구
    e.currentTarget.classList.remove("dragging") // dragging 클래스 제거
    setDragPreview(null) // 드래그 종료 시 커스텀 프리뷰 제거

    // 모든 클래스 제거
    document
      .querySelectorAll(".item")
      .forEach((el) => el.classList.remove("dragover-top", "dragover-bottom"))
  }

  return { dragPreview, dragStart, dragOver, dragEnter, drop, dragEnd }
}
