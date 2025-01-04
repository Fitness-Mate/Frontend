import { Meta, StoryObj } from "@storybook/react"

import ProgressBar from "@components/Progressbar/ProgressBar"

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    progress: { control: { type: "range", min: 1, max: 4, step: 1 } },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "47.4rem" }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Primary: Story = {
  args: {
    progress: 1,
  },
}
