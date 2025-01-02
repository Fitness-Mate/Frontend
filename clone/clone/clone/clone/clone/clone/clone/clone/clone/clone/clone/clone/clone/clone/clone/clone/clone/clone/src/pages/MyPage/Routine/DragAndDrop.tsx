import { useState } from "react"

import {
  DragDropContext,
  DragUpdate,
  DropResult,
  Droppable,
} from "@hello-pangea/dnd"

import { useQueryClient } from "@tanstack/react-query"

import { MyWorkoutIndex, MyWorkoutList } from "@typpes/type"

import useEditWorkout from "@hooks/mutation/useEditWorkoutList"
import useGetMyWorkouts from "@hooks/query/useGetMyWorkouts"

import MyWorkoutItem from "./MyWorkoutItem"
import * as S from "./StyledMyPage"

interface DragAndDropProps {
  selectedRoutineId: number
}

const DragAndDrop = ({ selectedRoutineId }: DragAndDropProps) => {
  const queryClient = useQueryClient()

  const [highlightedFrameIndex, setHighlightedFrameIndex] = useState<
    number | null
  >(null)

  const { myWorkouts } = useGetMyWorkouts(selectedRoutineId, {
    enabled: !!selectedRoutineId,
  })

  const editWorkout = useEditWorkout(selectedRoutineId)

  const onDragUpdate = (update: DragUpdate) => {
    if (update.destination) {
      setHighlightedFrameIndex(update.destination.index)
    } else {
      setHighlightedFrameIndex(null)
    }
  }

  const handleDrop = (droppedItem: DropResult) => {
    setHighlightedFrameIndex(null)

    if (!droppedItem.destination) return

    const updatedList: MyWorkoutList[] = [...myWorkouts]
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1)
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem)

    updatedList.forEach((workout, index) => {
      workout.myWorkoutIndex = index + 1
    })

    const myWorkoutId = updatedList[droppedItem.destination.index].myWorkoutId

    const workout: MyWorkoutIndex = {
      myWorkoutIndex: droppedItem.destination.index + 1,
      weight:
        updatedList[droppedItem.destination.index].weight?.toString() || "0",
      rep: updatedList[droppedItem.destination.index].rep?.toString() || "0",
      setCount:
        updatedList[droppedItem.destination.index].setCount?.toString() || "0",
      caution:
        updatedList[droppedItem.destination.index].caution ||
        "주의사항이 없습니다.",
    }

    queryClient.setQueryData<MyWorkoutList[]>(
      ["workoutList", selectedRoutineId],
      updatedList,
    )

    editWorkout.mutate({ myWorkoutId, workout })
  }

  return (
    <S.DragAndDropWrapper>
      <S.WorkoutNumList>
        {myWorkouts?.map((_, index) => (
          <S.WorkoutNum key={index}>
            <S.NumCircle>{index + 1}</S.NumCircle>
            <div className="line"></div>
          </S.WorkoutNum>
        ))}
      </S.WorkoutNumList>
      <DragDropContext
        onDragUpdate={onDragUpdate}
        onDragEnd={handleDrop}>
        <Droppable droppableId="workout-list">
          {(provided) => (
            <div
              className="list-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ position: "relative" }}>
              {highlightedFrameIndex !== null && (
                <S.PlaceholderWrapper
                  isVisible={highlightedFrameIndex !== null}
                  top={`${highlightedFrameIndex * (157 + 13)}px`}
                />
              )}
              {myWorkouts.map((workout, index) => (
                <MyWorkoutItem
                  key={workout.workoutId}
                  workout={workout}
                  index={index}
                  routineId={selectedRoutineId || 0}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </S.DragAndDropWrapper>
  )
}

export default DragAndDrop
