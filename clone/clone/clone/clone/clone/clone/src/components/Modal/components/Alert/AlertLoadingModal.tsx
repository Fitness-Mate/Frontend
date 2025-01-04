import Button from "@components/Button/Button"
import Modal from "@components/Modal/Modal"
import Title from "@components/Title/Title"

import { useModal } from "@hooks/useModal"

const AlertLoadingModal = () => {
  const { isOpen, onClose } = useModal("로딩")

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <Modal.Title>
        <Title variant="midA">
          추천 중에 오류가 발생했어요.
          <Title.SubBottomTitle>
            다른 조합으로 시도해주세요!
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

export default AlertLoadingModal
