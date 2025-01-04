import Button from "@components/Button/Button"
import Modal from "@components/Modal/Modal"
import { ContentWrapper } from "@components/Modal/components/Routine/StyledRoutineModal"
import Title from "@components/Title/Title"

import { useModal } from "@hooks/useModal"

const ROUTINE_START = {
  EMPTY_TITLE: ["나만의 운동 루틴을", "만들어 보세요"],
  EMPTY_SUBTITLE: ["아직 운동 루틴이 없어요"],
}

const RoutineModal = () => {
  const { isOpen, onClose } = useModal("루틴시작")
  const { onOpen: makeRoutine } = useModal("루틴생성")

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCloseButton
      disableInteraction>
      <Modal.Title>
        <Title variant="midA">
          {ROUTINE_START.EMPTY_TITLE[0]}
          <br />
          {ROUTINE_START.EMPTY_TITLE[1]}
          <Title.SubBottomTitle>
            {ROUTINE_START.EMPTY_SUBTITLE}
          </Title.SubBottomTitle>
        </Title>
      </Modal.Title>
      <Modal.Content>
        <ContentWrapper></ContentWrapper>
      </Modal.Content>
      <Modal.Footer>
        <Button
          variant="main"
          size="full"
          onClick={() => {
            onClose()
            makeRoutine()
          }}>
          루틴 생성하기
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default RoutineModal
