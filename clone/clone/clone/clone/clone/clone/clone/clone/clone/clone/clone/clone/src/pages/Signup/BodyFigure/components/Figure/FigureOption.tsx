import { useFormContext } from "react-hook-form"

import { CATEGORY_LIST } from "constants/validation"

import Icon from "@components/Icon/Icon"

import { useFigure } from "@pages/Signup/BodyFigure/components/Figure/FigureContext"

import * as S from "./StyledFigure"

const FigureOption = () => {
  const { activeFigure, switchFigure } = useFigure()
  const { setValue } = useFormContext()

  const handleFigure = (bodyFat: number, muscleMass: number) => {
    setValue("muscleMass", muscleMass, { shouldValidate: true })
    setValue("bodyFat", bodyFat, { shouldValidate: true })
  }

  return (
    <S.FigureOptionList>
      {CATEGORY_LIST.map(({ id, name, bodyFat, muscleMass }) => {
        const $isChecked = id === activeFigure
        return (
          <S.FigureCheckBoxButton
            type="button"
            key={id}
            $isChecked={$isChecked}
            onClick={() => {
              switchFigure(id)
              handleFigure(bodyFat, muscleMass)
            }}>
            <Icon icon={$isChecked ? "CircleFill" : "CircleEmpty"} />
            <S.FigureCheckBoxText $isChecked={$isChecked}>
              {name}
            </S.FigureCheckBoxText>
          </S.FigureCheckBoxButton>
        )
      })}
    </S.FigureOptionList>
  )
}

export default FigureOption
