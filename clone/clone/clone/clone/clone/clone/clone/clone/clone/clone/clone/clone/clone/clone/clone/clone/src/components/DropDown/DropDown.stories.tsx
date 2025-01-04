import type { Meta, StoryObj } from "@storybook/react"

import DropDown from "@components/DropDown/DropDown"
import Icon from "@components/Icon/Icon"

import * as S from "./StyledDropDown"

const meta: Meta<typeof DropDown> = {
  component: DropDown,
  title: "components/DropDown",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof DropDown>

export const MyWorkout: Story = {
  render: () => (
    <DropDown>
      <DropDown.DropDownButton variant="grey">
        운동량 수정하기
        <Icon
          icon="PencilGrey"
          size={18}
        />
      </DropDown.DropDownButton>
      <DropDown.DropDownButton variant="red">
        운동 삭제하기
        <Icon
          icon="RedTrash"
          size={18}
        />
      </DropDown.DropDownButton>
    </DropDown>
  ),
}

export const NavBar: Story = {
  render: () => (
    <DropDown>
      <DropDown.DropDownButton variant="grey">
        계정 정보 수정
      </DropDown.DropDownButton>
      <DropDown.DropDownButton variant="grey">
        신체 정보 수정
      </DropDown.DropDownButton>
      <S.Line />
      <DropDown.DropDownButton variant="grey">로그아웃</DropDown.DropDownButton>
    </DropDown>
  ),
}
