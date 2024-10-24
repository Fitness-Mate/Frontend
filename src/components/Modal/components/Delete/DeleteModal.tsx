import Button from "@components/Button/Button"
import Modal from "@components/Modal/Modal"
import Title from "@components/Title/Title"

import { useModal } from "@hooks/useModal"

interface DeleteModalProps {
  bodyPart: string
}

const DeleteModal = ({ bodyPart }: DeleteModalProps) => {
  const { isOpen, onClose } = useModal("삭제")

  const handleDelete = () => {
    // 삭제 로직
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}>
      <Modal.Title>
        <Title variant="midA">
          '{bodyPart} 운동..' 루틴을 정말 삭제하시겠어요?
          <Title.SubBottomTitle>
            한번 삭제하면 되돌릴 수 없어요.
          </Title.SubBottomTitle>
        </Title>
      </Modal.Title>
      <Modal.Footer>
        <Button
          variant="text"
          size="lg"
          onClick={onClose}>
          취소하기
        </Button>
        <Button
          variant="main"
          size="lg"
          onClick={handleDelete}>
          삭제하기
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal
