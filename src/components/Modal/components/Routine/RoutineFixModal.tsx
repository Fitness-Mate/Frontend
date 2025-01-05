import { useEffect } from "react"
import { useForm } from "react-hook-form"

import SortableList from "@badahertz52/sortable-list-tsc/dist/SortableList"

import Button from "@components/Button/Button"
import Modal from "@components/Modal/Modal"
import "@components/Modal/components/Routine/StyledRoutineModal"
import Title from "@components/Title/Title"

import { MyRoutines } from "@typpes/type"

import { usePostMakeRoutine } from "@hooks/mutation/usePostMakeRoutine"
import { useGetMyRoutines } from "@hooks/query/useGetMyRoutines"
import { useModal } from "@hooks/useModal"

import RoutineItem from "./RoutineFixItem"
import * as S from "./StyledRoutineModal"

const RoutineFixModal = () => {
  const { isOpen, onClose } = useModal("루틴수정")
  const { mutate } = usePostMakeRoutine()

  const { data: routines = [] } = useGetMyRoutines()
  const { register, handleSubmit, setValue, watch } = useForm<{
    routines: MyRoutines[]
  }>({
    mode: "onChange",
    defaultValues: {
      routines: [],
    },
  })

  useEffect(() => {
    if (routines.length > 0) {
      setValue(
        "routines",
        routines.map((routine) => ({
          routineId: routine.routineId,
          routineName: routine.routineName,
          routineIndex: routine.routineIndex,
        })),
      )
    }
  }, [routines, setValue])
  const watchedRoutines = watch("routines")

  const onSubmit = (data: { routines: MyRoutines[] }) => {
    mutate({ routines: data.routines })
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCloseButton
      disableInteraction
      $useFlexCenter={true}>
      <Modal.Title>
        <Title variant="midA">루틴 편집</Title>
      </Modal.Title>
      <Modal.Content>
        <S.RoutineFixForm onSubmit={handleSubmit(onSubmit)}>
          <S.MyRoutineWrapper>
            <S.MyRoutineList>
              <SortableList
                data={watchedRoutines}
                renderItem={(item: MyRoutines, index: number) => (
                  <RoutineItem
                    routine={item}
                    index={index}
                    register={register}
                    setValue={setValue}
                    startDrag={(dragIndex) =>
                      alert(`Dragging started at index ${dragIndex}`)
                    }
                  />
                )}
                onClickItem={(index: number) =>
                  alert(`Clicked item at index ${index}`)
                }
              />
            </S.MyRoutineList>
          </S.MyRoutineWrapper>
          <Modal.Footer>
            <Button
              variant="main"
              size="full"
              type="submit">
              적용하기
            </Button>
          </Modal.Footer>
        </S.RoutineFixForm>
      </Modal.Content>
    </Modal>
  )
}

export default RoutineFixModal
