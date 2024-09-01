import {
  FooterSubText,
  FooterText,
  FooterTopLine,
  FooterWrapper,
} from "@components/Footer/StyledFooter"

import { StrictPropsWithChildren } from "@typpes/type"

const Footer = ({ children }: StrictPropsWithChildren) => {
  return (
    <FooterWrapper>
      {children}
      <FooterTopLine>{}</FooterTopLine>
    </FooterWrapper>
  )
}

Footer.Text = FooterText
Footer.SubText = FooterSubText

export default Footer
