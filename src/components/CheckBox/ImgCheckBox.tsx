import { ButtonHTMLAttributes } from "react"

import { css } from "styled-components"

import Icon from "@components/Icon/Icon"

import { StrictPropsWithChildren } from "@typpes/type"

import theme from "@styles/theme"

import * as S from "./StyledCheckBox"

type Variant = "big" | "small"

const getVariant = (variant: Variant, isSelected: boolean) => {
  switch (variant) {
    case "big":
      return {
        sizeStyle: css`
          gap: 1.2rem;
          width: 16.9rem;
        `,
        borderStyle: css`
          border: ${isSelected
            ? `0.35rem solid ${theme.Brand600}`
            : `0.1rem solid ${theme.Netural300}`};
        `,
      }
    case "small":
      return {
        sizeStyle: css`
          gap: 0.8rem;
          width: 11.4rem;
        `,
        borderStyle: css`
          border: ${isSelected
            ? `0.3rem solid ${theme.Brand600}`
            : `0.1rem solid ${theme.Netural300}`};
        `,
      }
    default:
      return {
        sizeStyle: css``,
        borderStyle: css``,
      }
  }
}

interface ImgCheckBoxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: Variant
  src: string
  alt: string
  isSelected: boolean

  handleToggle: () => void
}

const ImgCheckBox = ({
  variant,
  src,
  alt,
  isSelected,
  handleToggle,
  children,
  ...props
}: StrictPropsWithChildren<ImgCheckBoxProps>) => {
  const { sizeStyle, borderStyle } = getVariant(variant, isSelected)

  return (
    <S.ImgCheckBoxWrapper
      $sizeStyle={sizeStyle}
      onClick={handleToggle}
      {...props}>
      <S.ImageCheckBoxImg
        $borderStyle={borderStyle}
        src={src}
        alt={alt}
      />
      {isSelected && (
        <Icon
          icon="CircleChecked"
          size={variant === "big" ? 58 : 44}
        />
      )}
      <S.ImageCheckBoxText>{children}</S.ImageCheckBoxText>
    </S.ImgCheckBoxWrapper>
  )
}

export default ImgCheckBox
