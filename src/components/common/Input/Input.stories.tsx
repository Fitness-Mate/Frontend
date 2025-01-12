/* eslint-disable react-hooks/rules-of-hooks */
import { useForm } from "react-hook-form"

import { Meta, StoryObj } from "@storybook/react"

import Input from "@components/common/Input/Input"

import { formAdapter } from "../../../utils/formAdapter"

const meta: Meta<typeof Input> = {
  title: "components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Primary: Story = {
  render: () => {
    const { register } = useForm<typeof DUMMY_INPUTS.DEFAULT_VALUES>({
      defaultValues: DUMMY_INPUTS.DEFAULT_VALUES,
    })
    return (
      <div
        style={{
          width: "40rem",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}>
        {DUMMY_LIST.map(
          ({
            id,
            name,
            label,
            $isDirty = false,
            $isError = false,
            disabled = false,
          }) => (
            <Input key={id}>
              <Input.Label htmlFor={name}>{label}</Input.Label>
              <Input.Input
                props={{
                  ...formAdapter({
                    register,
                    name,
                    validate: DUMMY_INPUTS[name].validate,
                    $isDirty,
                    $isError,
                  }),
                  ...DUMMY_INPUTS[name].attributes,
                  disabled,
                }}
              />
              {name === "error" && (
                <Input.Error>유효하지 않습니다.</Input.Error>
              )}
            </Input>
          ),
        )}
      </div>
    )
  },
}

const DUMMY_LIST = [
  {
    id: 0,
    name: "default",
    label: "Default",
    $isDirty: false,
    $isError: false,
    disabled: false,
  },
  {
    id: 1,
    name: "success",
    label: "Success",
    $isDirty: true,
    $isError: false,
    disabled: false,
  },

  {
    id: 2,
    name: "error",
    label: "Error",
    $isDirty: true,
    $isError: true,
    disabled: false,
  },
  {
    id: 3,
    name: "disabled",
    label: "Disabled",
    $isDirty: false,
    $isError: false,
    disabled: true,
  },
] as const

const DUMMY_INPUTS = {
  DEFAULT_VALUES: {
    default: "",
    success: "",
    error: "",
    disabled: "",
  },
  default: {
    attributes: {
      placeholder: "default",
    },
    validate: {},
  },
  success: {
    attributes: {
      placeholder: "success",
    },
    validate: {},
  },
  error: {
    attributes: {
      placeholder: "error",
    },
    validate: {
      pattern: {
        value: /a^/,
        message: "유효하지 않습니다.",
      },
    },
  },
  disabled: {
    attributes: {
      placeholder: "disabled",
    },
    validate: {},
  },
}
