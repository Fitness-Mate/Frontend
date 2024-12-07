import { DraggableProvided } from "@hello-pangea/dnd"
import type { Meta, StoryObj } from "@storybook/react"

import MyWorkout from "@components/MyWorkout/MyWorkout"

const DUMMY_DATA = (
  <MyWorkout
    myWorkoutId={249959}
    workoutId={249959}
    onClick={() => {}}
    bodyParts={"가슴, 등, 삼두"}
    weight="20"
    setCount="4"
    rep="12"
    caution="머신 풀오버를 할 때는 등을 곧게 펴고 균형을 잘 유지해야 합니다."
    draggableProps={{} as DraggableProvided["draggableProps"]}
    dragHandleProps={{} as DraggableProvided["dragHandleProps"]}
    innerRef={() => {}}
    isDragging={false}
    isRemoveSuccess={() => {}}>
    "머신 풀 오버"
  </MyWorkout>
)

const meta: Meta<typeof MyWorkout> = {
  component: MyWorkout,
  title: "components/MyWorkout",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "#F2F4F6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <div style={{ width: "716px" }}>
          <Story />
        </div>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof MyWorkout>

export const Primary: Story = {
  render: () => {
    return DUMMY_DATA
  },
}
