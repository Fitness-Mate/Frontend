import DropDown from "@components/DropDown/DropDown"
import Icon from "@components/Icon/Icon"
import IconButton from "@components/IconButton/IconButton"

import useDeleteMyWorkout from "@hooks/mutation/useDeleteMyWorkout"
import { useDropDown } from "@hooks/useDropDown"

import * as S from "../StyledDropDown"

interface MyWorkoutDropDownProps {
  myWorkoutId: number
  routineId: number
  onEditClick: () => void
}

const MyWorkoutDropDown = ({
  myWorkoutId,
  routineId,
  onEditClick,
}: MyWorkoutDropDownProps) => {
  const { mutate: removeWorkout } = useDeleteMyWorkout()

  const { isOpen, dropDownRef, toggleDropDown } = useDropDown()

  return (
    <>
      <S.FixIconButtonWrapper
        ref={dropDownRef}
        onClick={toggleDropDown}>
        <IconButton
          icon="PencilGrey"
          size={18}
        />
      </S.FixIconButtonWrapper>
      {isOpen && (
        <DropDown position="my">
          <DropDown.DropDownButton
            variant="grey"
            onClick={() => {
              toggleDropDown()
              onEditClick()
            }}>
            운동량 수정하기
            <Icon
              icon="PencilGrey"
              size={18}
            />
          </DropDown.DropDownButton>
          <DropDown.DropDownButton
            variant="red"
            onClick={() => removeWorkout({ myWorkoutId, routineId })}>
            운동 삭제하기
            <Icon
              icon="RedTrash"
              size={18}
            />
          </DropDown.DropDownButton>
        </DropDown>
      )}
    </>
  )
}

export default MyWorkoutDropDown
