import styled from "styled-components"

import Button from "@components/common/Button/Button"
import Modal from "@components/common/Modal/Modal"
import Title from "@components/common/Title/Title"

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
        <ButtonContainer>
          <Button
            variant="main"
            size="lg"
            onClick={onClose}>
            확인
          </Button>
        </ButtonContainer>
      </Modal.Footer>
    </Modal>
  )
}

export default LoadingModal

const ButtonContainer = styled.div`
  margin-left: auto;
`
