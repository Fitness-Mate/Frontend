import Button from "@components/Button/Button"
import Modal from "@components/Modal/Modal"
import Title from "@components/Title/Title"

import { useModal } from "@hooks/useModal"

const LoadingModal = () => {
  const { isOpen, onClose } = useModal("로딩")
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <Modal.Title>
        <Title variant="midA">
          추천 시간이 <br />
          예상보다 길어지고 있어요
          <Title.SubBottomTitle>
            잠시 후 다시 시도해 주세요
          </Title.SubBottomTitle>
        </Title>
      </Modal.Title>
      <Modal.Footer>
        <Button
          variant="main"
          size="lg"
          onClick={onClose}>
          확인
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default LoadingModal
