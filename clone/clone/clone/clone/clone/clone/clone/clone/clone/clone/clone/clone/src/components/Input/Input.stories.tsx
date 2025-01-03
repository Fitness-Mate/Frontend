/* eslint-disable react-hooks/rules-of-hooks */
import { useForm } from "react-hook-form"

import { Meta, StoryObj } from "@storybook/react"

import Input from "@components/Input/Input"

import { formAdapter } from "../../utils/formAdapter"

const meta: Meta<typeof Input> = {
  title: "components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    componentSubtitle:
      "Input은 회원가입, 로그인, 내 정보 수정, 검색 등에 쓰이는 컴포넌트입니다.",
    docs: {
      description: {
        component: `
  - <h3>다음과 같은 컴포넌트를 children으로 사용할 수 있습니다.</h3>
        - <h4><Input.Label> 무엇에 대한 입력인지를 나타냅니다.</h4>
            - isRequired: 반드시 입력해야 할때 나타내는 속성
            - htmlFor: 웹 접근성을 위해 form의 name값을 그대로 주입시킵니다.
        - <h4><Input.Input> Input 내부를 나타냅니다.</h4>
            - react hook form에서 제공하는 기능을 사용해 props로 바로 주입시키기 위해 사용되는 어댑터입니다.
            - register: react hook form에서 제공하는 속성입니다.
            - validator: 따로 상수한 정의한 placeholder, validation값이 객체 형태로 담겨있습니다.
            - $isDirty, $isError: 시각적으로 Input의 validation 상태를 보여줍니다.
            - 이외에도 다양한 속성들이 있으며 페이지마다 다르게 사용되고 있습니다.
        - <h4><Input.Error> validation 에러를 나타냅니다.</h4>
          `,
      },
    },
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
            isRequired,
            $isDirty = false,
            $isError = false,
            disabled = false,
          }) => (
            <Input key={id}>
              <Input.Label
                isRequired={isRequired}
                htmlFor={name}>
                {label}
              </Input.Label>
              <Input.Input
                props={{
                  ...formAdapter({
                    register,
                    name,
                    validator: DUMMY_INPUTS[name],
                    $isDirty,
                    $isError,
                  }),
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
    isRequired: true,
    $isDirty: false,
    $isError: false,
    disabled: false,
  },
  {
    id: 1,
    name: "success",
    label: "Success",
    isRequired: true,
    $isDirty: true,
    $isError: false,
    disabled: false,
  },

  {
    id: 2,
    name: "error",
    label: "Error",
    isRequired: true,
    $isDirty: true,
    $isError: true,
    disabled: false,
  },
  {
    id: 3,
    name: "disabled",
    label: "Disabled",
    isRequired: false,
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
