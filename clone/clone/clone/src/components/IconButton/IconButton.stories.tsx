import type { Meta, StoryObj } from "@storybook/react"

import IconButton from "@components/IconButton/IconButton"

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "components/IconButton",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Primary: Story = {
  args: {
    icon: "Check",
  },
}
