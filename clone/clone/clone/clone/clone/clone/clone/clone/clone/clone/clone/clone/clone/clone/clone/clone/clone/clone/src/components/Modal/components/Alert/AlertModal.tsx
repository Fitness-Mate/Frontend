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
          오류가 발생했어요
          <Title.SubBottomTitle>
            현재 비밀번호를 다시 확인해주세요
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
