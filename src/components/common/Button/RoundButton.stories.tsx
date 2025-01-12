import type { Meta, StoryObj } from "@storybook/react"

import RoundButton from "@components/common/Button/RoundButton"

const meta: Meta<typeof RoundButton> = {
  component: RoundButton,
  title: "components/RoundButton",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof RoundButton>

export const Primary: Story = {
  args: {
    disabled: false,
    variant: "black",
    children: "다음",
    rightIcon: "RightArrowWhite",
    size: "lg",
  },
}
