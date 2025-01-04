import React, { useEffect, useRef, useState } from "react"

import * as S from "./StyledMyWorkout"

interface DynamicInputProps {
  value: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const DynamicInput = ({ value, placeholder, onChange }: DynamicInputProps) => {
  const [localValue, setLocalValue] = useState(value)
  const spanRef = useRef<HTMLSpanElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [width, setWidth] = useState(30)

  useEffect(() => {
    if (spanRef.current && inputRef.current) {
      setWidth(spanRef.current.offsetWidth + 17)
      inputRef.current.focus()
    }
  }, [localValue])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9]/g, "")
    setLocalValue(newValue)
    onChange({
      target: { value: newValue },
    } as unknown as React.ChangeEvent<HTMLInputElement>)
  }

  const handleBlur = () => {
    if (!value.trim()) {
      onChange({
        target: { value: placeholder },
      } as unknown as React.ChangeEvent<HTMLInputElement>)
    }
  }

  return (
    <S.HeaderRightInfoArea width={`${width}px`}>
      <S.HeaderRightInfoInput
        ref={inputRef}
        value={localValue}
        placeholder={placeholder}
        onChange={handleInputChange}
        onBlur={handleBlur}
        maxLength={2}
      />
      <S.InputWidthItem ref={spanRef}>
        {localValue || placeholder}
      </S.InputWidthItem>
      <S.CustomCursor />
    </S.HeaderRightInfoArea>
  )
}

export default DynamicInput
