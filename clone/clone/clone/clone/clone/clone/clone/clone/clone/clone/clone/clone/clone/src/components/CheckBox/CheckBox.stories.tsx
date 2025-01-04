/* eslint-disable react-hooks/rules-of-hooks */
import { useArgs } from "@storybook/preview-api"
import type { Meta, StoryObj } from "@storybook/react"

import ImgCheckBox from "@components/CheckBox/ImgCheckBox"

const DUMMY = {
  src: "https://github.com/user-attachments/assets/6711e495-0014-42d3-9afd-490015d3adf5",
  alt: "테스트 이미지를 설명",
}

const meta: Meta<typeof ImgCheckBox> = {
  component: ImgCheckBox,
  title: "components/ImgCheckBox",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    variant: {
      control: {
        type: "radio",
      },
      options: ["big", "small"],
    },
  },
}

export default meta
type Story = StoryObj<typeof ImgCheckBox>

export const Primary: Story = {
  args: {
    variant: "big",
    ...DUMMY,
    isSelected: false,
    children: "기구 이름이 너무 길어서 두줄이 넘어가는 경우",
  },
  render: (args) => {
    const [{ isSelected }, setArgs] = useArgs()
    const handleToggle = () => {
      setArgs({ isSelected: !isSelected })
    }
    return (
      <ImgCheckBox
        {...args}
        isSelected={isSelected}
        handleToggle={handleToggle}>
        {args.children}
      </ImgCheckBox>
    )
  },
}
