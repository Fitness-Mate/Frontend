import { useState } from "react"

import type { Meta, StoryObj } from "@storybook/react"

import styled from "styled-components"

import Button from "@components/Button/Button"
import Motion from "@components/Motion/Motion"

import { animation } from "@styles/theme"

const meta: Meta<typeof Motion> = {
  component: Motion,
  title: "components/Motion",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof Motion>

export const Primary: Story = {
  args: {},
  render: (_) => {
    const [isExecute, setExecute] = useState(false)
    const [motionValue, setMotionValue] = useState({
      stiffness: 100,
      damping: 100,
    })

    return (
      <Wrapper>
        <Motion
          isExecute={isExecute}
          motionValue={motionValue}
        />
        <ButtonWrapper>
          {Object.entries(animation).map(([key, value]) => (
            <Button
              onClick={() => {
                setExecute(!isExecute)
                setMotionValue(value)
              }}>
              {key}
            </Button>
          ))}
        </ButtonWrapper>
      </Wrapper>
    )
  },
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`
