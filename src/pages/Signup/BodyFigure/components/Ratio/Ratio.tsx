// @ts-nocheck
// import minus from "@assets/images/minus.png"
// import plus from "@assets/images/plus.png"
import * as S from "./StyledRatio"

const Ratio = ({ ratioValue, ratioText, handleRatio }) => {
  return (
    <S.RatioWrapper>
      <S.RatioTitle>상/하체 균형을 조절해주세요</S.RatioTitle>
      <S.RatioBoxWrapper>
        <S.RatioBox>
          <S.RatioContent>
            <S.RatioBoxTitle>상체 비중</S.RatioBoxTitle>
            <S.RatioPercentBox>
              <S.RatioPercent>{ratioValue * 10}%</S.RatioPercent>
            </S.RatioPercentBox>
          </S.RatioContent>
          <S.RatioButtonBox>
            <S.RatioPlusButton
              onClick={() => {
                handleRatio("+")
              }}
              type="button">
              <S.RatioPlusButtonImg
                src={plus}
                alt="상체 비중 증가 버튼"
              />
            </S.RatioPlusButton>
            <S.RatioMinusButton
              type="button"
              onClick={() => {
                handleRatio("-")
              }}>
              <S.RatioMinusButtonImg
                src={minus}
                alt="상체 비중 감소 버튼"
              />
            </S.RatioMinusButton>
          </S.RatioButtonBox>
        </S.RatioBox>
        <S.RatioBox>
          <S.RatioContent>
            <S.RatioBoxTitle>하체 비중</S.RatioBoxTitle>
            <S.RatioPercentBox>
              <S.RatioPercent>{100 - ratioValue * 10}%</S.RatioPercent>
            </S.RatioPercentBox>
          </S.RatioContent>
          <S.RatioButtonBox>
            <S.RatioPlusButton
              onClick={() => {
                handleRatio("-")
              }}
              type="button">
              <S.RatioPlusButtonImg
                src={plus}
                alt="하체 비중 증가 버튼"
              />
            </S.RatioPlusButton>
            <S.RatioMinusButton
              type="button"
              onClick={() => {
                handleRatio("+")
              }}>
              <S.RatioMinusButtonImg
                src={minus}
                alt="하체 비중 감소 버튼"
              />
            </S.RatioMinusButton>
          </S.RatioButtonBox>
        </S.RatioBox>
      </S.RatioBoxWrapper>
      <S.RatioMessage>{ratioText}</S.RatioMessage>
    </S.RatioWrapper>
  )
}

export default Ratio
