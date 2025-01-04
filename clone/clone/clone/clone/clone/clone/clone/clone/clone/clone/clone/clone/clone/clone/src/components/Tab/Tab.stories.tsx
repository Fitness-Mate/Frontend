import type { Meta, StoryObj } from "@storybook/react"

import Tab from "@components/Tab/Tab"

const meta: Meta<typeof Tab> = {
  component: Tab,
  title: "components/Tab",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof Tab>

export const Primary: Story = {
  args: {
    children: "가슴",
    variant: "fill",
    count: 2,
    index: 0,
  },
}
