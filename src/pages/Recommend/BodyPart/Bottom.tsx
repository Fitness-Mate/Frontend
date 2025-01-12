import RoundButton from "@components/common/Button/RoundButton"

import * as S from "../StyledRecommend"

interface BottomProps {
  handleNextPage: () => void
  selectedBodyPartLength: number
}

const Bottom = ({ handleNextPage, selectedBodyPartLength }: BottomProps) => {
  return (
    <S.BottomWrapper>
      <S.BottomInner>
        <S.BottomText>
          {selectedBodyPartLength}개
          <S.BottomSubText> 부위 선택됨</S.BottomSubText>
        </S.BottomText>
        <RoundButton
          onClick={handleNextPage}
          variant="black"
          size="lg"
          rightIcon="RightArrowWhite"
          disabled={selectedBodyPartLength <= 0}>
          다음
        </RoundButton>
      </S.BottomInner>
      <S.BottomTopLine>{}</S.BottomTopLine>
    </S.BottomWrapper>
  )
}

export default Bottom
