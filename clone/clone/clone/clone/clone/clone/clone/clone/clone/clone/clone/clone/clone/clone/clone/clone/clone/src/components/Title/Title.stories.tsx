import type { Meta, StoryObj } from "@storybook/react"

import Title from "@components/Title/Title"

import Variant from "./Title"

const meta: Meta<typeof Title> = {
  title: "components/Title",
  component: Title,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    componentSubtitle: "Title 가이드를 제공해주는 컴포넌트입니다.",
    docs: {
      description: {
        component: `
  - 다음과 같은 컴포넌트를 children으로 사용할 수 있습니다.
        - <Title.TopSubTtile> 상단의 텍스트를 나타냅니다.
        - <Title.BottomSubTitle> 하단의 텍스트를 나타냅니다.
        `,
      },
    },

    argTypes: {
      variant: {
        control: {
          type: "radio",
        },
        options: typeof Variant,
      },
    },
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
