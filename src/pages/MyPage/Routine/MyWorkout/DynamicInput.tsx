import { useEffect, useRef, useState } from "react"
import { UseFormRegister, UseFormSetValue } from "react-hook-form"

import { RoutineInfoType } from "@typpes/type"

import * as S from "./StyledMyWorkout"

interface DynamicInputProps {
  name: keyof RoutineInfoType
  placeholder: string
  register: UseFormRegister<RoutineInfoType>
  setValue: UseFormSetValue<RoutineInfoType>
  watchValue: string
  maxLength?: number
}

const DynamicInput = ({
  name,
  placeholder,
  register,
  setValue,
  watchValue,
  maxLength = 2,
}: DynamicInputProps) => {
  const spanRef = useRef<HTMLSpanElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [width, setWidth] = useState(30)

  useEffect(() => {
    if (spanRef.current && inputRef.current) {
      setWidth(spanRef.current.offsetWidth + 18)
      inputRef.current.focus()
    }
  }, [watchValue])

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value.trim()) {
      setValue(name, placeholder)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/[^0-9]/g, "")
    setValue(name, sanitizedValue)
  }

  return (
    <S.HeaderRightInfoArea width={`${width}px`}>
      <S.HeaderRightInfoInput
        {...register(name)}
        value={watchValue}
        onChange={handleChange}
        onBlur={handleBlur}
        maxLength={maxLength}
        placeholder={placeholder}
        ref={inputRef}
        style={{ width: `${width}px` }}
        autoComplete="off"
      />
      <S.InputWidthItem ref={spanRef}>
        {watchValue || placeholder}
      </S.InputWidthItem>
      <S.CustomCursor />
    </S.HeaderRightInfoArea>
  )
}

export default DynamicInput
