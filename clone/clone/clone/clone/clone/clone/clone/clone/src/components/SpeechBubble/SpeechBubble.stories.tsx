import type { Meta, StoryObj } from "@storybook/react"

import Icon from "@components/Icon/Icon"
import SpeechBubble from "@components/SpeechBubble/SpeechBubble"

const meta: Meta<typeof SpeechBubble> = {
  title: "components/SpeechBubble",
  component: SpeechBubble,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    componentSubtitle: "SpeechBubble은 가이드를 제공해주는 컴포넌트입니다.",
    docs: {
      description: {
        component: `
  - 다음과 같은 컴포넌트를 children으로 사용할 수 있습니다.
        - <SpeechBubble.MainText> 메인이되는 텍스트를 나타냅니다. 렌더링되는 부분이 2줄일 경우 상단의 텍스트를 나타냅니다.
        - <SpeechBubble.SubText> 렌더링되는 부분이 2줄일 경우 하단의 텍스트를 나타냅니다.
        - <SpeechBubble.Icon> 렌더링되는 부분이 2줄일 경우 상단의 아이콘을 나타냅니다.
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof SpeechBubble>

export const Primary: Story = {
  render: () => (
    <SpeechBubble>
      <SpeechBubble.MainText>{DUMMY_TEXT}</SpeechBubble.MainText>
    </SpeechBubble>
  ),
}
export const WithSubtext: Story = {
  render: () => (
    <SpeechBubble>
      <SpeechBubble.MainText>{DUMMY_TEXT}</SpeechBubble.MainText>
      <SpeechBubble.SubText>{DUMMY_TEXT}</SpeechBubble.SubText>
    </SpeechBubble>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <SpeechBubble>
      <SpeechBubble.Icon>
        <Icon icon={DUMMY_ICON} />
      </SpeechBubble.Icon>
      <SpeechBubble.MainText>{DUMMY_TEXT}</SpeechBubble.MainText>
    </SpeechBubble>
  ),
}

const DUMMY_TEXT = "여기에 대화를 입력해 주세요"
const DUMMY_ICON = "Star"
