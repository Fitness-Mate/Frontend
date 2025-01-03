import type { Meta, StoryObj } from "@storybook/react"

import Avatar from "@components/Avatar/Avatar"

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: "components/Avatar",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Primary: Story = {}
