import type { Meta, StoryObj } from "@storybook/react"

import Button from "@components/Button/Button"

const meta: Meta<typeof Button> = {
  component: Button,
  title: "components/Button",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    disabled: false,
    size: "md",
    variant: "main",
    children: "Button",
  },
}
