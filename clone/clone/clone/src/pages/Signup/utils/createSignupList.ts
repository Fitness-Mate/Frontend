import { ChangeEvent } from "react"

import { SIGNUP_LIST } from "constants/validation"

export const createSignupList = (
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onChange2: (e: ChangeEvent<HTMLInputElement>) => void,
) => [
  { ...SIGNUP_LIST[0] },
  { ...SIGNUP_LIST[1], onChange },
  { ...SIGNUP_LIST[2] },
  {
    ...SIGNUP_LIST[3],
    onChange2,
  },
]
