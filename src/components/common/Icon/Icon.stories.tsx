import type { Meta, StoryObj } from "@storybook/react"

import Icon from "@components/common/Icon/Icon"

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "components/Icon",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    color: { control: "color" },
    stroke: { control: "color" },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const Primary: Story = {
  args: {
    icon: "ChangeCircle",
    size: 20,
  },
}
