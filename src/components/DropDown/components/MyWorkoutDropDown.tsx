import DropDown from "@components/DropDown/DropDown"
import Icon from "@components/Icon/Icon"
import IconButton from "@components/IconButton/IconButton"

import useDeleteMyWorkout from "@hooks/mutation/useDeleteMyWorkout"
import { useDropDown } from "@hooks/useDropDown"

import * as S from "../StyledDropDown"

interface MyWorkoutDropDownProps {
  myWorkoutId: number
  routineId: number
}

const MyWorkoutDropDown = ({
  myWorkoutId,
  routineId,
}: MyWorkoutDropDownProps) => {
  const { mutate: removeWorkout } = useDeleteMyWorkout()

  const { isOpen, dropDownRef, toggleDropDown } = useDropDown()

  return (
    <S.MyWorkoutDropDownWrapper>
      <S.FixIconButtonWrapper ref={dropDownRef}>
        <IconButton
          icon="PencilGrey"
          size={18}
          onClick={toggleDropDown}
        />
      </S.FixIconButtonWrapper>
      {isOpen && (
        <DropDown position="my">
          <DropDown.DropDownButton variant="grey">
            운동량 수정하기
            <Icon
              icon="PencilDarkGrey"
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
    </S.MyWorkoutDropDownWrapper>
  )
}

export default MyWorkoutDropDown