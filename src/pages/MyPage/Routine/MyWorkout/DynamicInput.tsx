import React, { useEffect, useRef, useState } from "react"

import * as S from "./StyledMyWorkout"

interface DynamicInputProps {
  value: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const DynamicInput = ({ value, placeholder, onChange }: DynamicInputProps) => {
  const spanRef = useRef<HTMLSpanElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [width, setWidth] = useState(30)
  const localValueRef = useRef(value)

  useEffect(() => {
    localValueRef.current = value
  }, [value])

  useEffect(() => {
    const updateWidth = () => {
      if (spanRef.current && inputRef.current) {
        setWidth(spanRef.current.offsetWidth + 18)
        inputRef.current.focus()
      }
    }

    requestAnimationFrame(updateWidth)
  }, [localValueRef.current])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9]/g, "")
    localValueRef.current = newValue
    setTimeout(() => {
      onChange({
        ...e,
        target: { ...e.target, value: newValue },
      })
    }, 0)
  }

  const handleBlur = () => {
    if (localValueRef.current.trim() === "") {
      const defaultValue = placeholder
      localValueRef.current = defaultValue
      onChange({
        target: { value: defaultValue },
      } as unknown as React.ChangeEvent<HTMLInputElement>)
    }
  }
  return (
    <S.HeaderRightInfoArea width={`${width}px`}>
      <S.HeaderRightInfoInput
        ref={inputRef}
        value={localValueRef.current}
        placeholder={placeholder}
        onChange={handleInputChange}
        onBlur={handleBlur}
        maxLength={2}
      />
      <S.InputWidthItem ref={spanRef}>
        {localValueRef.current || placeholder}
      </S.InputWidthItem>
      <S.CustomCursor />
    </S.HeaderRightInfoArea>
  )
}

export default DynamicInput
