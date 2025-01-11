import type { Meta, StoryObj } from "@storybook/react"

import Icon from "@components/Icon/Icon"
import SpeechBubble from "@components/SpeechBubble/SpeechBubble"

const meta: Meta<typeof SpeechBubble> = {
  title: "components/SpeechBubble",
  component: SpeechBubble,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
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
