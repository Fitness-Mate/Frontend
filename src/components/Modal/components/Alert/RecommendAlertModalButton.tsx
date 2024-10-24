import RoundButton from "@components/Button/RoundButton"

import { useModal } from "@hooks/useModal"

const RecommendAlertModalButton = () => {
  const { onOpen } = useModal("알림")
  return (
    <RoundButton
      leftIcon="Add"
      variant="blue"
      size="small"
      onClick={onOpen}>
      운동 루틴
    </RoundButton>
  )
}

export default RecommendAlertModalButton
