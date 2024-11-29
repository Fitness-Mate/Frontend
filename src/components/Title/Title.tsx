import { StrictPropsWithChildren } from "@typpes/type"

import * as S from "./StyledTitle"
import { VARIANTS } from "./StyledTitle"

interface TitleProps {
  variant: (typeof Variant)[number]
}

export const Variant = ["big", "midA", "midB", "midC", "small"] as const

const Title = ({ variant, children }: StrictPropsWithChildren<TitleProps>) => {
  const variantStyle = VARIANTS[variant]

  return (
    <S.TitleWrapper $variantStyle={variantStyle}>{children}</S.TitleWrapper>
  )
}

const SubTopTitle = ({ children }: StrictPropsWithChildren) => (
  <S.SubTopTitleText className="topTitleText">{children}</S.SubTopTitleText>
)

const SubTopIconTitle = ({ children }: StrictPropsWithChildren) => (
  <S.SubTopTitleText className="topIconTitle">{children}</S.SubTopTitleText>
)

const SubBottomTitle = ({ children, ...props }: StrictPropsWithChildren) => (
  <S.SubBottomTitleText
    className="bottomTitleText"
    {...props}>
    {children}
  </S.SubBottomTitleText>
)

Title.SubTopTitle = SubTopTitle
Title.SubBottomTitle = SubBottomTitle
Title.SubTopIconTitle = SubTopIconTitle

export default Title
