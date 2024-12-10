import Icon from "@components/Icon/Icon"

import useDeleteMyWorkout from "@hooks/mutation/useDeleteMyWorkout"

import * as S from "./StyledDropDown"

const DropDown = ({
  myWorkoutId,
  isRemoveSuccess,
}: {
  myWorkoutId: number
  isRemoveSuccess: () => void
}) => {
  const { mutate: removeWorkout } = useDeleteMyWorkout({
    onSuccess: isRemoveSuccess,
  })

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
          removeWorkout(myWorkoutId)
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
