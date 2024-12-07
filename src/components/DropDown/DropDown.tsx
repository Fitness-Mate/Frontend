import Icon from "@components/Icon/Icon"

import MyFitAPI from "@apis/domain/myfit"

import * as S from "./StyledDropDown"

const DropDown = ({
  myWorkoutId,
  isRemoveSuccess,
}: {
  myWorkoutId: number
  isRemoveSuccess: () => void
}) => {
  const isRemoveWorkout = async (myWorkoutId: number) => {
    try {
      await MyFitAPI.deleteMyWorkout(myWorkoutId)
      isRemoveSuccess()
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <S.DropDownWrapper>
      <S.DropDownButton>
        <div className="fixWorkout">운동량 수정하기</div>
        <Icon
          icon="PencilDarkGrey"
          size={18}
        />
      </S.DropDownButton>
      <S.DropDownButton
        onClick={() => {
          isRemoveWorkout(myWorkoutId)
        }}>
        <div className="removeWorkout">운동 삭제하기</div>
        <Icon
          icon="RedTrash"
          size={18}
        />
      </S.DropDownButton>
    </S.DropDownWrapper>
  )
}

export default DropDown
