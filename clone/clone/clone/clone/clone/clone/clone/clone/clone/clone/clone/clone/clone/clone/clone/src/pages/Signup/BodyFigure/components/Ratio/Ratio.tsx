import IconButton from "@components/IconButton/IconButton"

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
    ratios: [
      { icon: "AddRound", operator: "+" },
      { icon: "MinusRound", operator: "-" },
    ],
  },
  {
    name: "하체 비중",
    id: 1,
    ratios: [
      { icon: "MinusRound", operator: "+" },
      { icon: "AddRound", operator: "-" },
    ],
  },
] as const

const Ratio = ({ ratioValue, ratioText, handleRatio }: RatioProps) => {
  return (
    <S.RatioWrapper>
      <S.RatioTitle>상/하체 균형을 조절해주세요</S.RatioTitle>
      <S.RatioBoxWrapper>
        {RATIO_LIST.map(({ name, id, ratios }) => (
          <S.RatioBox key={id}>
            <S.RatioContent>
              <S.RatioBoxTitle>{name}</S.RatioBoxTitle>
              <S.RatioPercentBox>
                <S.RatioPercent>
                  {name === "상체 비중"
                    ? ratioValue * 10
                    : 100 - ratioValue * 10}
                  %
                </S.RatioPercent>
              </S.RatioPercentBox>
            </S.RatioContent>
            <S.RatioButtonBox>
              {ratios.map(({ icon, operator }) => (
                <IconButton
                  key={icon}
                  size={28}
                  icon={icon}
                  onClick={() => handleRatio(operator)}
                />
              ))}
            </S.RatioButtonBox>
          </S.RatioBox>
        ))}
      </S.RatioBoxWrapper>
      <S.RatioMessage>{ratioText}</S.RatioMessage>
    </S.RatioWrapper>
  )
}

export default Ratio
