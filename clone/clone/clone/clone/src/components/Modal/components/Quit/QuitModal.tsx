import Button from "@components/Button/Button"
import Modal from "@components/Modal/Modal"
import Title from "@components/Title/Title"

import { useModal } from "@hooks/useModal"

const QuitModal = () => {
  const { isOpen, onClose } = useModal("나가기")

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      disableInteraction>
      <Modal.Title>
        <Title variant="midA">
          페이지를 나가시겠어요?
          <Title.SubBottomTitle>
            추천 결과가 저장되지 않아요.
          </Title.SubBottomTitle>
        </Title>
      </Modal.Title>
      <Modal.Footer>
        <Button
          variant="text"
          size="lg"
          onClick={onClose}>
          그만할래요
        </Button>
        <Button
          variant="main"
          size="lg">
          이어서 보기
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default QuitModal
