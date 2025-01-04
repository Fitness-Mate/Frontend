import { ChangeEvent, InputHTMLAttributes } from "react"
import {
  FieldValue,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form"

type ValidatorType = {
  attributes?: InputHTMLAttributes<HTMLInputElement>
  validate: RegisterOptions
}
interface formAdapterProps {
  register: UseFormRegister<FieldValue<FieldValues>>
  validator: ValidatorType
  name: string
  $isDirty?: boolean
  $isError?: boolean
  type?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const formAdapter = ({
  register,
  validator,
  name,
  ...props
}: formAdapterProps) => {
  const { validate, attributes } = validator
  return { ...register(name, { ...validate }), ...{ ...attributes, ...props } }
}
