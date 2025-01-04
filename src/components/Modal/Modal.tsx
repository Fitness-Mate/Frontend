import { PropsWithChildren } from "react"
import { createPortal } from "react-dom"

import { styled } from "styled-components"

import IconButton from "@components/IconButton/IconButton"
import ModalContent from "@components/Modal/ModalContent"
import ModalFooter from "@components/Modal/ModalFooter"
import ModalTitle from "@components/Modal/ModalTitle"

import theme from "@styles/theme"

interface ModalMainProps {
  isCloseButton?: boolean
  isOpen: boolean
  onClose: () => void
  disableInteraction?: boolean
}

const ModalMain = ({
  children,
  isCloseButton = false,
  isOpen,
  onClose,
  disableInteraction = false,
}: PropsWithChildren<ModalMainProps>) => {
  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && !disableInteraction) {
      onClose()
    }
  }

  if (!isOpen) {
    return null
  }

  return createPortal(
    <BackOverlay onClick={handleWrapperClick}>
      <ModalWrapper $isCloseButton={isCloseButton}>
        {isCloseButton && (
          <IconButton
            icon="CloseBold"
            style={{ position: "absolute", top: "2.4rem", right: "2.4rem" }}
            onClick={onClose}
          />
        )}
        {children}
      </ModalWrapper>
    </BackOverlay>,
    document.body,
  )
}

const Modal = Object.assign(ModalMain, {
  Content: ModalContent,
  Title: ModalTitle,
  Footer: ModalFooter,
})

export default Modal

const BackOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #00000033;
  z-index: 1000;
`

const ModalWrapper = styled.div<{ $isCloseButton: boolean }>`
  display: flex;
  min-width: 48rem;
  padding: 2.4rem;
  padding-top: ${({ $isCloseButton }) =>
    $isCloseButton ? "4.8rem" : "2.4rem"};
  flex-direction: column;
  align-items: flex-start;
  gap: 2.4rem;
  border-radius: 2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${theme.Netural0};
  box-shadow: 0rem 0.4rem 1.5rem 0rem rgba(0, 0, 0, 0.12);
`
