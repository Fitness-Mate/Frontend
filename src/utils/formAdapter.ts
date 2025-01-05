import { ChangeEvent } from "react"
import {
  FieldValue,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form"

interface formAdapterProps {
  register: UseFormRegister<FieldValue<FieldValues>>
  validate: RegisterOptions
  name: string
  $isDirty?: boolean
  $isError?: boolean
  type?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const formAdapter = ({
  register,
  validate,
  name,
  ...props
}: formAdapterProps) => {
  return { ...register(name, validate), ...props }
}
