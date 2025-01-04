import { Meta, StoryObj } from "@storybook/react"

import Card from "@components/Card/Card"

const meta: Meta<typeof Card> = {
  component: Card,
  title: "components/Card",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof Card>

export const Primary: Story = {
  render: () => (
    <Card
      src="https://fitness-mate.s3.ap-northeast-2.amazonaws.com/images/workout/2d844f66-72a2-4189-99f0-bdf3a38d2963.png"
      title="런지"
      badges={["등", "가슴"]}>
      {" "}
    </Card>
  ),
}
