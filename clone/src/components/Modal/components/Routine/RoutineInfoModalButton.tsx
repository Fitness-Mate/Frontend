import Button from "@components/Button/Button"

interface RoutineInfoModalButtonProps {
  onOpen: () => void
  onClose: () => void
  saveRoutineState: () => void
  isDisabled: boolean
}

const RoutineInfoModalButton = ({
  onOpen,
  onClose,
  saveRoutineState,
  isDisabled,
}: RoutineInfoModalButtonProps) => {
  return (
    <Button
      variant="main"
      size="full"
      disabled={isDisabled}
      onClick={() => {
        onOpen()
        onClose()
        saveRoutineState()
      }}>
      다음
    </Button>
  )
}

export default RoutineInfoModalButton
