import { Draggable } from "@hello-pangea/dnd"

import MyWorkout from "@pages/MyPage/Routine/MyWorkout/MyWorkout"

import { MyWorkoutList } from "@typpes/type"

const MyWorkoutItem = ({
  workout,
  index,
  routineId,
}: {
  workout: MyWorkoutList
  index: number
  routineId: number
}) => {
  const {
    workoutId,
    myWorkoutId,
    bodyParts,
    caution,
    setCount,
    rep,
    weight,
    workoutName,
  } = workout

  return (
    <Draggable
      key={workoutId}
      draggableId={`item-${workoutId}`}
      index={index}>
      {(providedSpace, snapshot) => (
        <MyWorkout
          routineId={routineId}
          workoutId={workoutId}
          myWorkoutId={myWorkoutId}
          bodyParts={bodyParts.join(", ")}
          caution={caution || "주의사항이 없습니다."}
          setCount={setCount?.toString() || "0"}
          rep={rep?.toString() || "0"}
          weight={weight?.toString() || "0"}
          onClick={() => {}}
          draggableProps={providedSpace.draggableProps}
          dragHandleProps={providedSpace.dragHandleProps}
          innerRef={providedSpace.innerRef}
          isDragging={snapshot.isDragging}
          index={index}>
          {workoutName}
        </MyWorkout>
      )}
    </Draggable>
  )
}

export default MyWorkoutItem
