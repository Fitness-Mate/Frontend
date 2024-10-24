import { PropsWithChildren } from "react"

import styled from "styled-components"

const ModalContent = ({ children }: PropsWithChildren) => {
  return <ModalContentWrapper>{children}</ModalContentWrapper>
}

export default ModalContent

export const ModalContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
