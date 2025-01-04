import { useEffect } from "react"

import { useModalStore } from "@store/useModalStore"

interface ModalOptions {
  beforeClose?: () => void | Promise<void>
  afterClose?: () => void | Promise<void>
}

export const useModal = (modalName: string, options: ModalOptions = {}) => {
  const { modalState, setModalState } = useModalStore()
  const { beforeClose, afterClose } = options

  const isOpen = modalState[modalName]
  const onOpen = () => {
    setModalState({ [modalName]: true })
  }

  const onClose = async () => {
    await beforeClose?.()
    setModalState({ [modalName]: false })
    await afterClose?.()
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return { isOpen, onOpen, onClose }
}
