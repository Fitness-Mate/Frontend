import type { Meta, StoryObj } from "@storybook/react"

import Tabs from "@components/Tabs/Tabs"

const DUMMY_DATE = (
  <Tabs>
    <Tabs.TabList>
      <Tabs.Tab
        variant="line"
        index={0}
        count={3}>
        상체
      </Tabs.Tab>
      <Tabs.Tab
        index={1}
        variant="line"
        count={8}>
        하체
      </Tabs.Tab>
    </Tabs.TabList>
    <Tabs.TabPanels>
      <Tabs.TabPanel index={0}>상체 운동목록</Tabs.TabPanel>
      <Tabs.TabPanel index={1}>하체 운동목록</Tabs.TabPanel>
    </Tabs.TabPanels>
  </Tabs>
)

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: "components/Tabs",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Primary: Story = {
  render: () => {
    return DUMMY_DATE
  },
}
