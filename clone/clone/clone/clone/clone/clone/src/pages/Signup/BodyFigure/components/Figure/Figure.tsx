import { Fragment } from "react/jsx-runtime"

import CheckBox from "@components/CheckBox/CheckBox"

import DirectFigureOption from "@pages/Signup/BodyFigure/components/Figure/DirectFigureOption"
import { useFigure } from "@pages/Signup/BodyFigure/components/Figure/FigureContext"
import FigureOption from "@pages/Signup/BodyFigure/components/Figure/FigureOption"

import * as S from "./StyledFigure"

const BODYFIGURE_LIST = [
  {
    id: 0,
    name: "유형으로 선택하기",
    children: <FigureOption />,
  },
  {
    id: 1,
    name: "직접 입력하기",
    children: <DirectFigureOption />,
  },
]

const Figure = () => {
  const { activeMenu } = useFigure()
  return (
    <S.FigureWrapper>
      <S.FigureTitle>어떤 체형이신가요?</S.FigureTitle>
      <S.FigureOptionList>
        {BODYFIGURE_LIST.map(({ id, name, children }) => {
          return (
            <Fragment key={id}>
              <CheckBox id={id}>{name}</CheckBox>
              {activeMenu === id && children}
            </Fragment>
          )
        })}
      </S.FigureOptionList>
    </S.FigureWrapper>
  )
}

export default Figure
