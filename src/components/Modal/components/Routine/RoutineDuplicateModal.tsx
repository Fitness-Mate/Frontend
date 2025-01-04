import Button from "@components/Button/Button"
import Modal from "@components/Modal/Modal"
import Title from "@components/Title/Title"

import { useModal } from "@hooks/useModal"

const RoutineDuplicateModal = () => {
  const { isOpen, onClose } = useModal("루틴중복")

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <Modal.Title>
        <Title variant="big">루틴은 최대 5개까지만 생성이 가능합니다</Title>
        <Modal.Footer>
          <Button
            variant="main"
            onClick={onClose}>
            확인
          </Button>
        </Modal.Footer>
      </Modal.Title>
    </Modal>
  )
}

export default RoutineDuplicateModal
