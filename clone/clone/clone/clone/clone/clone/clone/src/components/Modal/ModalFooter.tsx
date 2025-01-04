import { PropsWithChildren } from "react"

import { styled } from "styled-components"

const ModalFooter = ({ children }: PropsWithChildren) => {
  return <FooterWrapper>{children}</FooterWrapper>
}

export default ModalFooter

const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  gap: 0.8rem;
`
