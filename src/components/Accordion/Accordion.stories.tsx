import type { Meta, StoryObj } from "@storybook/react"

import Accordion from "@components/Accordion/Accordion"

const DUMMY_DATA = (
  <Accordion>
    <Accordion.Header
      onClick={() => {}}
      bodyParts={"가슴, 등"}
      count={1}>
      푸쉬업
    </Accordion.Header>
    <Accordion.Content
      recommend={["20kg", "5세트", "12회"]}
      videoId="Og9pgOtL-04">
      팔굽혀펴기 또는 푸쉬업은 대표적인 근력 운동 중 하나이다. 일반적으로 기구
      등을 사용하지 않고 할 수 있는 운동으로, 엎드린 상태에서 전신의 체중을 두
      손과 두 발가락의 4개소에 집중하여 양팔을 늘리는 힘에 의해 신체를 올린다.
      동작과 팔꿈치 관절을 굽혀 몸을 지상에 붙지 않을 정도까지 낮추고, 반복하는
      것이 기본적인 방법이다. 군대에서 기본적인 얼차려로 많이 적용된다.
    </Accordion.Content>
    <Accordion.Trigger />
  </Accordion>
)

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "components/Accordion",
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
type Story = StoryObj<typeof Accordion>

export const Primary: Story = {
  render: () => {
    return DUMMY_DATA
  },
}
