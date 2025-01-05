import { useFormContext } from "react-hook-form"

import { CATEGORY_LIST } from "constants/validation"

import Icon from "@components/Icon/Icon"

import * as S from "./StyledFigure"

const FigureOption = () => {
  const { setValue, watch } = useFormContext()
  const muscleMassValue = watch("muscleMass")
  const bodyFatValue = watch("bodyFat")

  const handleFigure = (muscleMass: number, bodyFat: number) => {
    setValue("muscleMass", muscleMass, { shouldValidate: true })
    setValue("bodyFat", bodyFat, { shouldValidate: true })
  }

  return (
    <S.FigureOptionList>
      {CATEGORY_LIST.map(({ id, name, bodyFat, muscleMass }) => {
        const isSelected =
          bodyFat === bodyFatValue && muscleMassValue === muscleMass
        return (
          <S.FigureCheckBoxButton
            type="button"
            key={id}
            $isSelected={isSelected}
            onClick={() => {
              handleFigure(muscleMass, bodyFat)
            }}>
            <Icon icon={isSelected ? "CircleFill" : "CircleEmpty"} />
            <S.FigureCheckBoxText $isSelected={isSelected}>
              {name}
            </S.FigureCheckBoxText>
          </S.FigureCheckBoxButton>
        )
      })}
    </S.FigureOptionList>
  )
}

export default FigureOption
