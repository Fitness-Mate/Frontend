import type { Meta, StoryObj } from "@storybook/react"

import Title from "@components/Title/Title"

const meta: Meta<typeof Title> = {
  title: "components/Title",
  component: Title,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof Title>

export const Primary: Story = {
  render: () => <Title variant="big">메인 타이틀</Title>,
}
export const Big: Story = {
  render: () => (
    <Title variant="big">
      <Title.SubTopTitle>보조 타이틀이에요</Title.SubTopTitle>
      헤드 타이틀이에요
      <Title.SubBottomTitle>보조 타이틀이에요</Title.SubBottomTitle>
    </Title>
  ),
}

export const midA: Story = {
  render: () => (
    <Title variant="midA">
      <Title.SubTopTitle>보조 타이틀이에요</Title.SubTopTitle>
      헤드 타이틀이에요
      <Title.SubBottomTitle>보조 타이틀이에요</Title.SubBottomTitle>
    </Title>
  ),
}

export const midB: Story = {
  render: () => (
    <Title variant="midB">
      헤드 타이틀이에요
      <Title.SubBottomTitle>보조 타이틀이에요</Title.SubBottomTitle>
    </Title>
  ),
}

export const small: Story = {
  render: () => (
    <Title variant="small">
      <Title.SubTopTitle>보조 타이틀이에요</Title.SubTopTitle>
      헤드 타이틀이에요
      <Title.SubBottomTitle>보조 타이틀이에요</Title.SubBottomTitle>
    </Title>
  ),
}
