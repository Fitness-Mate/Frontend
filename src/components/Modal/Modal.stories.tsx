import { FormProvider, useForm } from "react-hook-form"

import { Meta, StoryObj } from "@storybook/react"

import Button from "@components/Button/Button"
import Modal from "@components/Modal/Modal"
import AlertModal from "@components/Modal/components/Alert/AlertModal"
import DeleteModal from "@components/Modal/components/Delete/DeleteModal"
import LoadingModal from "@components/Modal/components/Loading/LoadingModal"
import QuitModal from "@components/Modal/components/Quit/QuitModal"
import RoutineAddModal from "@components/Modal/components/Routine/RoutineAddModal"
import RoutineMakeModal from "@components/Modal/components/Routine/RoutineMakeModal"
import RoutineModal from "@components/Modal/components/Routine/RoutineModal"

import { RoutineInfoTypes, RoutineNameTypes } from "@typpes/type"

import { useModal } from "@hooks/useModal"

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "components/Modal",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
}

export default meta
type Story = StoryObj<typeof Modal>

interface TriggerProps {
  name: string
}

const Trigger = ({ name }: TriggerProps) => {
  const { onOpen } = useModal(name)
  return (
    <Button
      onClick={onOpen}
      variant="main">
      {name}
    </Button>
  )
}

export const Alert: Story = {
  render: () => (
    <>
      <Trigger name={"알림"} />
      <AlertModal />
    </>
  ),
}

export const Loading: Story = {
  render: () => (
    <>
      <Trigger name={"로딩"} />
      <LoadingModal />
    </>
  ),
}

export const Quit: Story = {
  render: () => (
    <>
      <Trigger name={"나가기"} />
      <QuitModal />
    </>
  ),
}

export const Delete: Story = {
  render: () => (
    <>
      <Trigger name={"삭제"} />
      <DeleteModal bodyPart={"가슴"} />
    </>
  ),
}

export const RoutineStart: Story = {
  render: () => (
    <>
      <Trigger name={"루틴시작"} />
      <RoutineModal
        machine={"데드리프트"}
        isEmpty
      />
    </>
  ),
}

export const RoutineMake: Story = {
  render: () => {
    const methods = useForm<RoutineNameTypes>({
      mode: "onChange",
      defaultValues: { routineName: "" },
    })

    return (
      <FormProvider {...methods}>
        <Trigger name={"루틴생성"} />
        <RoutineMakeModal />
      </FormProvider>
    )
  },
}

export const RoutineMachine: Story = {
  render: () => {
    const methods = useForm<RoutineInfoTypes>()

    return (
      <FormProvider {...methods}>
        <Trigger name={"루틴운동량"} />
        <RoutineAddModal />
      </FormProvider>
    )
  },
}
