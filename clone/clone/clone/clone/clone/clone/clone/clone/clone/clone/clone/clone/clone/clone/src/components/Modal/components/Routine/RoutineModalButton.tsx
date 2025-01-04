import { useModalStore } from "@store/useModalStore"

import { useAccordion } from "@components/Accordion/Accordion"
import RoundButton from "@components/Button/RoundButton"

import { Recommend } from "@typpes/type"

interface RecommendModalButtonProps {
  onOpen: () => void
}

const RecommendModalButton = ({ onOpen }: RecommendModalButtonProps) => {
  const { workout } = useAccordion()
  const { setWorkoutState } = useModalStore()

  return (
    <RoundButton
      leftIcon="Add"
      variant="blue"
      size="small"
      onClick={() => {
        onOpen()
        setWorkoutState(workout as Recommend)
      }}>
      운동 루틴
    </RoundButton>
  )
}

export default RecommendModalButton
