import type { Meta, StoryObj } from "@storybook/react"

import Chip from "@components/Chip/Chip"

const meta: Meta<typeof Chip> = {
  component: Chip,
  title: "components/Chip",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof Chip>

export const Primary: Story = {
  args: {
    children: "데드 리프트",
  },
}
