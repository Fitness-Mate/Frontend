import Button from "@components/Button/Button"
import Modal from "@components/Modal/Modal"
import Title from "@components/Title/Title"

import { useModal } from "@hooks/useModal"

const SuccessModal = () => {
  const { isOpen, onClose } = useModal("성공")

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <Modal.Title>
        <Title variant="big">요청에 성공했어요</Title>
      </Modal.Title>
      <Modal.Footer>
        <Button
          variant="main"
          onClick={onClose}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SuccessModal
