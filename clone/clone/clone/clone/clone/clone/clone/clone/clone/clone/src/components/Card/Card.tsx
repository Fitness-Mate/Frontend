import { ButtonHTMLAttributes } from "react"

import Badge from "@components/Badge/Badge"

import * as S from "./StyledCard"

interface CardProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  src: string
  title: string
  badges: string[]
}

const Card = ({ src, title, badges, ...props }: CardProps) => {
  return (
    <S.CardWrapper {...props}>
      <S.CardImg
        src={src}
        alt="운동 이미지"
        loading="lazy"
      />
      <S.CardContents>
        <S.CardText>{title}</S.CardText>
        <S.BadgeList>
          {badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </S.BadgeList>
      </S.CardContents>
    </S.CardWrapper>
  )
}

export default Card
