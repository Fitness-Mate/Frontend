import type { Meta, StoryObj } from "@storybook/react"

import Accordion from "@components/Accordion/Accordion"

const DUMMY_DATA = (
  <Accordion
    bodyParts={"가슴, 등"}
    onOpen={() => {}}
    workout={{
      id: 249960,
      englishName: "Hanging Leg Raise",
      koreanName: "행잉 레그레이즈",
      imgPath:
        "https://fitness-mate.s3.ap-northeast-2.amazonaws.com/images/workout/e9e4947f-6cb7-4eb0-9db8-441c5ae2c2a7.png",
      videoLink: "https://www.youtube.com/watch?v=tNFciUXMy1s",
      description:
        "행잉레그레이즈(Hanging Leg Raise)는 철봉이나 다른 기구에 매달린 후 손을 잡아 고정합니다. 상체와 다리를 일직선으로 유지한 채로 다리를 들어올려 복근을 수축시킨 후 천천히 원래 자세로 돌아갑니다. 척추나 목을 부상하지 않도록 주의하며, 초기에는 다리를 낮게 들어올려 시작하여 난이도를 높여가는 것이 좋습니다.",
      atcetera: null,
      bodyPartKoreanName: ["복부", "허벅지(앞)"],
      machineKoreanName: ["파워랙", "치닝디핑", "하프랙"],
      createdAt: "2024-08-11T20:46:56",
    }}>
    <Accordion.Header>푸쉬업</Accordion.Header>
    <Accordion.Content
      recommend={["20kg", "5세트", "12회"]}
      videoId="Og9pgOtL-04"
      description="팔굽혀펴기 또는 푸쉬업은 대표적인 근력 운동 중 하나이다. 일반적으로 기구
      등을 사용하지 않고 할 수 있는 운동으로, 엎드린 상태에서 전신의 체중을 두
      손과 두 발가락의 4개소에 집중하여 양팔을 늘리는 힘에 의해 신체를 올린다.
      동작과 팔꿈치 관절을 굽혀 몸을 지상에 붙지 않을 정도까지 낮추고, 반복하는
      것이 기본적인 방법이다. 군대에서 기본적인 얼차려로 많이 적용된다."
      caution="조심 하세요!"
    />
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
        <div style={{ width: "71.6rem" }}>
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
