import { FormProvider, useForm } from "react-hook-form"

import { Meta, StoryObj } from "@storybook/react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import Button from "@components/Button/Button"
import Modal from "@components/Modal/Modal"
import AlertModal from "@components/Modal/components/Alert/AlertModal"
import DeleteModal from "@components/Modal/components/Delete/DeleteModal"
import LoadingModal from "@components/Modal/components/Loading/LoadingModal"
import QuitModal from "@components/Modal/components/Quit/QuitModal"
import RoutineAddModal from "@components/Modal/components/Routine/RoutineAddModal"
import RoutineInfoModal from "@components/Modal/components/Routine/RoutineInfoModal"
import RoutineMakeModal from "@components/Modal/components/Routine/RoutineMakeModal"
import RoutineModal from "@components/Modal/components/Routine/RoutineModal"

import { RoutineInfoTypes, RoutineNameTypes } from "@typpes/type"

import { useModal } from "@hooks/useModal"

import RoutineDuplicateModal from "./components/Alert/RoutineDuplicateModal"

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity, refetchOnMount: true } },
})

const DUMMY_ROUTINES = [
  {
    routineId: 1349988,
    routineIndex: 0,
    routineName: "가슴 집중",
  },
  {
    routineId: 1349989,
    routineIndex: 1,
    routineName: "집중",
  },
  {
    routineId: 1349990,
    routineIndex: 2,
    routineName: "어깨 집중",
  },
  {
    routineId: 1349991,
    routineIndex: 3,
    routineName: "하체 집중",
  },
  {
    routineId: 1349992,
    routineIndex: 4,
    routineName: "새로운 루틴",
  },
]

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "components/Modal",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  decorators: [
    (Story) => {
      queryClient.setQueryData(["myRoutines"], DUMMY_ROUTINES)
      return (
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      )
    },
  ],
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
      <RoutineModal />
    </>
  ),
}

const RoutineMakeStory = () => {
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
}

export const RoutineMake: Story = {
  render: () => <RoutineMakeStory />,
}

const RoutineInfoStory = () => {
  const methods = useForm<RoutineInfoTypes>()

  return (
    <FormProvider {...methods}>
      <Trigger name={"루틴정보"} />
      <RoutineInfoModal />
    </FormProvider>
  )
}

export const RoutineInfo: Story = {
  render: () => <RoutineInfoStory />,
}

export const RoutineAdd: Story = {
  render: () => {
    return (
      <>
        <Trigger name={"루틴추가"} />
        <RoutineAddModal />
      </>
    )
  },
}

export const RoutineAlert: Story = {
  render: () => {
    return (
      <>
        <Trigger name={"루틴중복"} />
        <RoutineDuplicateModal />
      </>
    )
  },
}
