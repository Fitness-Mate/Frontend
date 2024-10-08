import { FormProvider, useForm } from "react-hook-form"

import { Meta, StoryObj } from "@storybook/react"

import SearchField from "@components/SearchField/SearchField"

import { SearchTypes } from "@typpes/type"

const meta: Meta<typeof SearchField> = {
  component: SearchField,
  title: "components/SearchField",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof SearchField>

export const Primary: Story = {
  args: {
    placeholder: "어떤 운동이 좋을까요?",
    width: "500px",
    name: "search",
    triggerSubmit: () => {},
  },

  render: (args) => {
    const methods = useForm<SearchTypes>()
    return (
      <FormProvider {...methods}>
        <SearchField {...args} />
      </FormProvider>
    )
  },
}
