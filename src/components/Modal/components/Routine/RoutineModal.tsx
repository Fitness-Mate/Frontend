import Button from "@components/Button/Button"
import Modal from "@components/Modal/Modal"
import { ContentWrapper } from "@components/Modal/components/Routine/StyledRoutineModal"
import Title from "@components/Title/Title"

import { useModal } from "@hooks/useModal"

const ROUTINE_START = {
  EMPTY_TITLE: ["나만의 운동 루틴을", "만들어 보세요"],
  EMPTY_SUBTITLE: ["아직 운동 루틴이 없어요"],
}

interface RoutineModalProps {
  isEmpty: boolean
  machine: string
}

const RoutineModal = ({ isEmpty, machine }: RoutineModalProps) => {
  const { isOpen, onClose } = useModal("루틴시작")
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCloseButton>
      <Modal.Title>
        <Title variant="midA">
          {isEmpty ? ROUTINE_START.EMPTY_TITLE[0] : `${machine}를 추가할`}
          <br />
          {isEmpty ? ROUTINE_START.EMPTY_TITLE[1] : "루틴을 선택해주세요"}
          <Title.SubBottomTitle>
            {isEmpty
              ? ROUTINE_START.EMPTY_SUBTITLE
              : `여러 개 선택할 수 있어요`}
          </Title.SubBottomTitle>
        </Title>
      </Modal.Title>
      <Modal.Content>
        <ContentWrapper></ContentWrapper>
      </Modal.Content>
      <Modal.Footer>
        <Button
          variant="main"
          size="full">
          루틴 생성하기
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default RoutineModal
