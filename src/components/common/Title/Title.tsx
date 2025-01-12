import { StrictPropsWithChildren } from "@typpes/type"

import * as S from "./StyledTitle"
import { VARIANTS } from "./StyledTitle"

interface TitleProps {
  variant: (typeof Variant)[number]
}

export const Variant = [
  "big",
  "midA",
  "midB",
  "midC",
  "midD",
  "midE",
  "small",
] as const

/**
 * <h3>Title 가이드를 제공해주는 컴포넌트입니다.</h3>
 * 다음과 같은 컴포넌트를 children으로 사용할 수 있습니다.
 * - <Title.TopSubTtile> 상단의 텍스트를 나타냅니다.
 * - <Title.BottomSubTitle> 하단의 텍스트를 나타냅니다.
 */
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

const SubBottomTitleContent = ({ children }: StrictPropsWithChildren) => (
  <S.SubBottomTitleWrapper className="bottomTitleContentText">
    {children}
  </S.SubBottomTitleWrapper>
)

Title.SubTopTitle = SubTopTitle
Title.SubBottomTitle = SubBottomTitle
Title.SubBottomTitleContent = SubBottomTitleContent
Title.SubTopIconTitle = SubTopIconTitle

export default Title
