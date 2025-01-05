import { useEffect } from "react"
import { useForm } from "react-hook-form"

import {
  DragDropContext,
  Draggable,
  DraggableProvidedDraggableProps,
  DropResult,
  Droppable,
} from "@hello-pangea/dnd"

import Button from "@components/Button/Button"
import Modal from "@components/Modal/Modal"
import "@components/Modal/components/Routine/StyledRoutineModal"
import Title from "@components/Title/Title"

import { MyRoutines } from "@typpes/type"

import { usePostMakeRoutine } from "@hooks/mutation/usePostMakeRoutine"
import { useGetMyRoutines } from "@hooks/query/useGetMyRoutines"
import { useModal } from "@hooks/useModal"

import RoutineItem from "./RoutineFixItem"
import * as S from "./StyledRoutineModal"

const RoutineFixModal = () => {
  const { isOpen, onClose } = useModal("루틴수정")
  const { mutate } = usePostMakeRoutine()

  const { data: routines = [] } = useGetMyRoutines()
  const { register, handleSubmit, setValue, watch } = useForm<{
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

  const handleDrop = (droppedItem: DropResult) => {
    if (!droppedItem.destination) return

    const updatedRoutines: MyRoutines[] = [...watchedRoutines]

    const [movedRoutine] = updatedRoutines.splice(droppedItem.source.index, 1)
    updatedRoutines.splice(droppedItem.destination.index, 0, movedRoutine)

    updatedRoutines.forEach((routine, index) => {
      routine.routineIndex = index + 1
    })

    setValue("routines", updatedRoutines)
  }

  const onSubmit = (data: { routines: MyRoutines[] }) => {
    mutate({ routines: data.routines })
    onClose()
  }

  const getItemStyle = (
    style?: DraggableProvidedDraggableProps["style"],
    index?: number,
  ) => {
    if (!style || !style.transform) return style

    const currentIndex = index ?? 0

    const listContainer = document.querySelector(
      ".list-container",
    ) as HTMLElement
    if (!listContainer) return style

    const containerHeight = 334
    const itemHeight = 54
    const itemSpacing = 16
    const containerTop = -(itemHeight + itemSpacing) * currentIndex
    const currentTransformMatch = style.transform.match(
      /translate\((-?\d+)px,\s+(-?\d+)px\)/,
    )
    if (currentTransformMatch) {
      const yTransform = parseInt(currentTransformMatch[2])
      const maxY = containerTop + containerHeight - itemHeight
      const adjustedY = Math.min(Math.max(yTransform, containerTop), maxY)

      return {
        ...style,
        transform: `translate(0px, ${adjustedY}px)`,
      }
    }

    return style
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
            <DragDropContext onDragEnd={handleDrop}>
              <Droppable
                droppableId="routineList"
                direction="vertical">
                {(provided) => (
                  <div
                    className="list-container"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{ position: "relative" }}>
                    <S.MyRoutineList>
                      {watchedRoutines.map((routine, index) => (
                        <Draggable
                          key={routine.routineId}
                          draggableId={`${routine.routineId}`}
                          index={index}>
                          {(provided) => {
                            return (
                              <RoutineItem
                                routine={routine}
                                index={index}
                                setValue={setValue}
                                register={register}
                                provided={{
                                  ...provided,
                                  draggableProps: {
                                    ...provided.draggableProps,
                                    style: getItemStyle(
                                      provided.draggableProps.style,
                                      index,
                                    ),
                                  },
                                }}
                              />
                            )
                          }}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </S.MyRoutineList>
                  </div>
                )}
              </Droppable>
            </DragDropContext>
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
