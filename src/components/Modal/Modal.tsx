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
  $useFlexCenter?: boolean
}

const ModalMain = ({
  children,
  isCloseButton = false,
  isOpen,
  onClose,
  disableInteraction = false,
  $useFlexCenter = false,
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
    <BackOverlay
      onClick={handleWrapperClick}
      $useFlexCenter={$useFlexCenter}>
      <ModalWrapper
        $isCloseButton={isCloseButton}
        $useFlexCenter={$useFlexCenter}>
        {isCloseButton && (
          <IconButton
            icon="CloseBold"
            style={{ position: "absolute", top: "24px", right: "24px" }}
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

const BackOverlay = styled.div<{ $useFlexCenter?: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #00000033;
  z-index: 1000;
`

const ModalWrapper = styled.div<{
  $isCloseButton: boolean
  $useFlexCenter?: boolean
}>`
  display: flex;
  min-width: 480px;
  padding: 24px;
  padding-top: ${({ $isCloseButton }) => ($isCloseButton ? "48px" : "24px")};
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  position: fixed;
  ${({ $useFlexCenter }) =>
    $useFlexCenter
      ? `
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
		width: 420px;
		min-width: 420px;
    height: 560px;
		gap: 0;
  `
      : `
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
		gap: 24px;
		padding: 24px;
  `}
  background: ${theme.Netural0};
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.12);
`
