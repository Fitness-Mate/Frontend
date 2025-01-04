import { CardList } from "../../pages/Search/StyledSearch"
import * as S from "./StyledCardSkeleton"

const CardSkeleton = () => {
  return (
    <S.CardWrapper>
      <CardList>
        {Array(12)
          .fill(0)
          .map((_, idx) => (
            <S.CardBox key={idx}>
              <S.CardImg />
              <S.CardContents>
                <S.CardTextBox></S.CardTextBox>
                <S.BadgeList>
                  <S.Badge key={0} />
                  <S.Badge key={1} />
                </S.BadgeList>
              </S.CardContents>
            </S.CardBox>
          ))}
      </CardList>
    </S.CardWrapper>
  )
}
export default CardSkeleton
