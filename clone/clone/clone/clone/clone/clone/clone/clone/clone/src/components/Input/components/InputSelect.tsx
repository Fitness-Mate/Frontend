import { FieldValues, Path, PathValue, UseFormReturn } from "react-hook-form"
import { Fragment } from "react/jsx-runtime"

import styled from "styled-components"

import theme from "@styles/theme"

interface SelectGroup<T extends FieldValues, K extends Path<T>> {
  groupName: PathValue<T, K>
  imgSrc: string
  id: number
}

interface InputSelectProps<T extends FieldValues, K extends Path<T>> {
  name: Path<T>
  list: SelectGroup<T, K>[]
  methods: UseFormReturn<T>
}

const InputSelect = <T extends FieldValues, K extends Path<T>>({
  list,
  methods,
  name,
}: InputSelectProps<T, K>) => {
  const { register, getValues, setValue } = methods

  const handleClick = (value: PathValue<T, Path<T>>) => {
    setValue(name, value, { shouldValidate: true })
  }

  return (
    <SelectList>
      {list.map(({ groupName, imgSrc, id }) => (
        <Fragment key={id}>
          <input
            type="radio"
            id={name}
            value={groupName}
            aria-label={groupName}
            {...register(name)}
          />
          <SelectItem
            onClick={() => {
              handleClick(groupName)
            }}
            type="button"
            $isChecked={getValues(name) === groupName}>
            <SelectImg
              src={imgSrc}
              alt={groupName}
            />
            <SelectText $isChecked={getValues(name) === groupName}>
              {groupName}
            </SelectText>
          </SelectItem>
        </Fragment>
      ))}
    </SelectList>
  )
}

export default InputSelect

const SelectList = styled.div`
  display: flex;
  gap: 1rem;
  input {
    display: none;
  }
`

const SelectItem = styled.button<{ $isChecked: boolean }>`
  transition: all 0.3s ease-out;
  border-radius: 1.6rem;
  background: ${({ $isChecked }) =>
    $isChecked ? theme.Netural100 : theme.Netural0};
  border: ${({ $isChecked }) =>
    $isChecked ? `0.3rem solid ${theme.Brand600}` : "0.3rem solid transparent"};
  display: flex;
  width: 12.6rem;
  height: 12.6rem;
  padding: 1.8rem 3.2rem 1.9rem 3.1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.8rem;
  &:hover {
    background: ${theme.Netural100};
    border: 0.3rem solid
      ${({ $isChecked }) =>
        $isChecked ? `${theme.Brand600}` : `${theme.Netural300}`};
  }
`
const SelectImg = styled.img`
  width: 6rem;
  height: 6rem;
`

const SelectText = styled.span<{ $isChecked: boolean }>`
  transition: all 0.3s ease-out;
  color: ${({ $isChecked }) =>
    $isChecked ? theme.Brand950 : theme.Netural800};
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.03rem;
`
