import { Meta, StoryObj } from "@storybook/react"

import Badge from "@components/Badge/Badge"

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "components/Badge",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Primary: Story = {
  args: {
    variant: "default",
    children: "등",
  },
}
