import { SubmitHandler, useForm } from "react-hook-form"

import Button from "@components/common/Button/Button"
import Modal from "@components/common/Modal/Modal"
import {
  ContentForm,
  ContentWrapper,
} from "@components/common/Modal/components/Routine/StyledRoutineModal"
import Title from "@components/common/Title/Title"

import { RoutineNameTypes } from "@typpes/type"

import { usePostMakeRoutine } from "@hooks/mutation/usePostMakeRoutine"
import { useGetMyRoutines } from "@hooks/query/useGetMyRoutines"
import { useModal } from "@hooks/useModal"

import * as S from "./StyledRoutineModal"

const RoutineMakeModal = () => {
  const { isOpen, onClose } = useModal("루틴생성")
  const { onOpen: openAddRoutine } = useModal("루틴추가")
  const { onOpen: openAlert } = useModal("루틴중복")
  const { data: routines = [] } = useGetMyRoutines()
  const { mutate } = usePostMakeRoutine()
  const { register, watch, handleSubmit, formState, reset } =
    useForm<RoutineNameTypes>({ mode: "onChange" })

  const inputValue = watch("routineName", "") || ""
  const isFullRoutine = routines.length >= 6

  const handleRoutineName: SubmitHandler<RoutineNameTypes> = ({
    routineName,
  }) => {
    if (isFullRoutine) {
      openAlert()
    } else {
      mutate({
        routines: [
          ...routines,
          { routineId: -1, routineIndex: routines.length + 1, routineName },
        ],
      })
    }
  }

  const handleFormAdapter = () => {
    if (formState.isValid) {
      handleSubmit(handleRoutineName)()
      reset()
      onClose()
      openAddRoutine()
    }
  }

  const handlePrevButton = () => {
    openAddRoutine()
    reset()
    onClose()
  }

  return (
    <Modal
      isCloseButton
      isOpen={isOpen}
      onClose={onClose}
      disableInteraction>
      <Modal.Title>
        <Title variant="midA">
          새로 만들
          <br />
          루틴 이름을 지어보세요
          <Title.SubBottomTitle>
            '가슴 정복'처럼 부위별로 이름을 지어보는 것도 좋아요
          </Title.SubBottomTitle>
        </Title>
      </Modal.Title>
      <Modal.Content>
        <ContentWrapper>
          <ContentForm onSubmit={handleSubmit(handleRoutineName)}>
            <S.ContentInput
              $isError={!!formState.errors.routineName}
              placeholder="어떤 이름이 좋을까요?"
              {...register("routineName", { required: true, maxLength: 7 })}
            />
            <S.ContentInputLabel
              $isError={formState.isDirty && !!formState.errors.routineName}>
              {inputValue.length}/7자
            </S.ContentInputLabel>
          </ContentForm>
        </ContentWrapper>
      </Modal.Content>
      <Modal.Footer>
        <Button
          variant="text"
          size="full"
          onClick={handlePrevButton}>
          이전
        </Button>
        <Button
          variant="main"
          size="full"
          type="submit"
          onClick={handleFormAdapter}>
          이 이름으로 할래요
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default RoutineMakeModal
