import Button from "@components/Button/Button"
import Modal from "@components/Modal/Modal"
import Title from "@components/Title/Title"

import { useModal } from "@hooks/useModal"

const AlertModal = () => {
  const { isOpen, onClose } = useModal("알림")

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <Modal.Title>
        <Title variant="midA">
          현재 수정중인 페이지에요
          <Title.SubBottomTitle>
            10월 말에 출시될 예정이에요!
          </Title.SubBottomTitle>
        </Title>
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

export default AlertModal
