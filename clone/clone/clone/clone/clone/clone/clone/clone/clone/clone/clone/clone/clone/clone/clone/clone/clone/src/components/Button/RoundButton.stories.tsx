import type { Meta, StoryObj } from "@storybook/react"

import RoundButton from "@components/Button/RoundButton"
import { ICON_MAP } from "@components/Icon/Icon"

const meta: Meta<typeof RoundButton> = {
  component: RoundButton,
  title: "components/RoundButton",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    leftIcon: {
      control: {
        type: "select",
      },
      options: Object.keys(ICON_MAP),
    },
    rightIcon: {
      control: {
        type: "select",
      },
      options: Object.keys(ICON_MAP),
    },
    size: {
      control: {
        type: "radio",
      },
      options: ["big", "small"],
    },
  },
}

export default meta
type Story = StoryObj<typeof RoundButton>

export const Primary: Story = {
  args: {
    disabled: false,
    variant: "black",
    children: "다음",
    rightIcon: "RightArrowWhite",
    size: "big",
  },
}
