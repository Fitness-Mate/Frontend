import IconButton from "@components/common/IconButton/IconButton"

import * as S from "./StyledRatio"

interface RatioProps {
  ratioValue: number
  ratioText: string
  handleRatio: (ratio: string) => void
}

const RATIO_LIST = [
  {
    name: "상체 비중",
    id: 0,
  },
  {
    name: "하체 비중",
    id: 1,
  },
] as const

const Ratio = ({ ratioValue, ratioText, handleRatio }: RatioProps) => {
  return (
    <S.RatioWrapper>
      <S.RatioTitle>상/하체 균형을 조절해주세요</S.RatioTitle>
      <S.RatioBoxWrapper>
        {RATIO_LIST.map(({ name, id }) => (
          <S.RatioBox key={id}>
            <S.RatioBoxLabel>{name}</S.RatioBoxLabel>
            <S.RatioPercentBox>
              <IconButton
                key="Minus"
                size={28}
                icon="Minus"
                onClick={() => {
                  if (name.includes("상체")) {
                    handleRatio("-")
                  } else {
                    handleRatio("+")
                  }
                }}
              />
              <S.RatioPercent>
                {name === "상체 비중" ? ratioValue * 10 : 100 - ratioValue * 10}
                %
              </S.RatioPercent>
              <IconButton
                key="Plus"
                size={28}
                icon="Plus"
                onClick={() => {
                  if (name.includes("상체")) {
                    handleRatio("+")
                  } else {
                    handleRatio("-")
                  }
                }}
              />
            </S.RatioPercentBox>
          </S.RatioBox>
        ))}
        {<S.RatioSeparator>:</S.RatioSeparator>}
      </S.RatioBoxWrapper>
      <S.RatioMessage>{ratioText}</S.RatioMessage>
    </S.RatioWrapper>
  )
}

export default Ratio
