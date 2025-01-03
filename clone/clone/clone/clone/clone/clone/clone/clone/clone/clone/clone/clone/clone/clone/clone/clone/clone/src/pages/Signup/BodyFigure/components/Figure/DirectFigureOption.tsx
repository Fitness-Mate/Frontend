import { useFormContext } from "react-hook-form"

import { SIGNUP_INPUTS } from "constants/validation"

import Input from "@components/Input/Input"

import { formAdapter } from "@utils/formAdapter"

import * as S from "./StyledFigure"

const BodyFigureData = [
  { name: "muscleMass", label: "골격근량", id: 0 },
  { name: "bodyFat", label: "체지방량", id: 1 },
] as const

const DirectFigureOption = () => {
  const { register, formState } = useFormContext()

  return (
    <S.DirectFigureOptionWrapper>
      <S.DirectFigureOptionList>
        {BodyFigureData.map(({ name, label, id }) => (
          <S.DirectFigureOptionItem key={id}>
            <Input>
              <Input.Label htmlFor={name}>{label}</Input.Label>
              <S.FigureOptionInputWrapper>
                <Input.Input
                  props={formAdapter({
                    register,
                    name,
                    validator: SIGNUP_INPUTS[name],
                    $isDirty: !!formState.dirtyFields[name],
                    $isError: !!formState.errors[name],
                  })}
                />
                <Input.Text>kg</Input.Text>
              </S.FigureOptionInputWrapper>
            </Input>
          </S.DirectFigureOptionItem>
        ))}
      </S.DirectFigureOptionList>
      <S.DirectFigureOptionMessage>
        <S.DirectFigureOptionInnerMessage>
          어떻게 알 수 있나요?
        </S.DirectFigureOptionInnerMessage>
        <S.DirectFigureOptionInnerMessage2>
          골격근량과 체지방량은 In-body 기계를 통해 측정 가능해요{" "}
        </S.DirectFigureOptionInnerMessage2>
      </S.DirectFigureOptionMessage>
    </S.DirectFigureOptionWrapper>
  )
}

export default DirectFigureOption
