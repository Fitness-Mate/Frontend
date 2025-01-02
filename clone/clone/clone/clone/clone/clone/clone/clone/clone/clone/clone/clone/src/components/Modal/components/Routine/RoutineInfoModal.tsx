import { SubmitHandler, useFormContext } from "react-hook-form"

import { useModalStore } from "@store/useModalStore"

import Button from "@components/Button/Button"
import Modal from "@components/Modal/Modal"
import {
  ContentMachineForm,
  ContentWrapper,
} from "@components/Modal/components/Routine/StyledRoutineModal"
import Title from "@components/Title/Title"

import { RoutineInfoTypes } from "@typpes/type"

import { usePostAddRoutine } from "@hooks/mutation/usePostAddRoutine"
import { useModal } from "@hooks/useModal"

import * as S from "./StyledRoutineModal"

const RoutineInfoModal = () => {
  const { isOpen, onClose } = useModal("루틴정보")
  const { onClose: closeAddModal } = useModal("루틴추가")

  const { register, handleSubmit, reset } = useFormContext<RoutineInfoTypes>()
  const { mutate, reset: resetMutation } = usePostAddRoutine()
  const {
    routineState,
    resetRoutineState,
    workoutState: {
      workoutId,
      caution,
      set: defaultSet,
      weight: defaultWeight,
      repeat: defaultRepeat,
    },
  } = useModalStore()

  const defaultInput = {
    set: defaultSet,
    weight: defaultWeight,
    repeat: defaultRepeat,
  }

  const handleRoutine: SubmitHandler<RoutineInfoTypes> = ({
    weight,
    repeat,
    set,
  }) => {
    routineState.forEach((routineId) => {
      mutate(
        {
          routineId,
          routineInfo: {
            workoutIds: [workoutId],
            weight,
            rep: repeat,
            setCount: set,
            caution: caution,
          },
        },
        {
          onSuccess: () => {
            onClose()
            resetMutation()
            closeAddModal()
          },
        },
      )
    })
    resetRoutineState()
    reset()
  }

  const handleFormAdapter = () => {
    handleSubmit(handleRoutine)()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCloseButton
      disableInteraction>
      <Modal.Title>
        <Title variant="midA">
          운동을 루틴에 추가해보세요
          <Title.SubBottomTitle>
            운동량은 언제든 수정할 수 있어요
          </Title.SubBottomTitle>
        </Title>
      </Modal.Title>
      <Modal.Content>
        <ContentWrapper>
          <ContentMachineForm onSubmit={handleSubmit(handleRoutine)}>
            <S.MachineInputList>
              {MACHINE_INFO_INPUT.map(({ key, name, label, maxLength }) => (
                <S.MachineInputItem key={key}>
                  <S.MachineInput
                    defaultValue={defaultInput[name]}
                    maxLength={maxLength}
                    {...register(name, { required: true })}
                  />
                  <S.Unit>{label}</S.Unit>
                </S.MachineInputItem>
              ))}
            </S.MachineInputList>
            <S.MachineButton
              type="reset"
              onClick={() => reset()}>
              되돌리기
            </S.MachineButton>
          </ContentMachineForm>
        </ContentWrapper>
      </Modal.Content>
      <Modal.Footer>
        <Button
          variant="main"
          size="full"
          onClick={handleFormAdapter}>
          추가하기
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RoutineInfoModal

const MACHINE_INFO_INPUT = [
  { key: 0, name: "weight", label: "kg", maxLength: 3 },
  { key: 1, name: "repeat", label: "회", maxLength: 2 },
  { key: 2, name: "set", label: "세트", maxLength: 2 },
] as const
