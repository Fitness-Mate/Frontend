import { ButtonHTMLAttributes } from "react"

import Icon from "@components/Icon/Icon"
import { AddRoutineButton } from "@components/Modal/components/Routine/StyledRoutineModal"

import { useModal } from "@hooks/useModal"

import * as S from "./StyledRoutineModal"

interface RoutineAddModalButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClose: () => void
  isFullRoutine?: boolean
}

const RoutineAddModalButton = ({
  onClose,
  isFullRoutine = false,
}: RoutineAddModalButtonProps) => {
  const { onOpen } = useModal("루틴생성")

  return (
    <AddRoutineButton
      onClick={() => {
        onOpen()
        onClose()
      }}
      disabled={isFullRoutine}>
      <S.ButtonNavBox $isFullRoutine={isFullRoutine}>
        <Icon
          icon="AddRoundGray"
          size={32}
        />
        추가하기
      </S.ButtonNavBox>

      {isFullRoutine && (
        <S.FullRoutineWarning>
          루틴은 최대 5개까지만 만들 수 있어요
        </S.FullRoutineWarning>
      )}
    </AddRoutineButton>
  )
}

export default RoutineAddModalButton
