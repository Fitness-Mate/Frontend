import { PropsWithChildren } from "react"

import styled from "styled-components"

interface ModalContentProps {
  isFull?: boolean
}
const ModalContent = ({
  children,
  isFull = false,
}: PropsWithChildren<ModalContentProps>) => {
  return <ModalContentWrapper $isFull={isFull}>{children}</ModalContentWrapper>
}

export default ModalContent

export const ModalContentWrapper = styled.div<{ $isFull: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: ${({ $isFull }) => ($isFull ? "40.4rem" : "auto")};
`
