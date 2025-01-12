import { SIGNUP_INPUTS } from "constants/validation"
import { create } from "zustand"

type Profile = typeof SIGNUP_INPUTS.DEFAULT_VALUES.PROFILE
type WithoutPasswordCheck = Omit<Profile, "passwordCheck">

interface useSignupStoreProps {
  profile: WithoutPasswordCheck
  bodyinfo: typeof SIGNUP_INPUTS.DEFAULT_VALUES.BODYINFO
  bodyfigure: typeof SIGNUP_INPUTS.DEFAULT_VALUES.BODYFIGURE
  setProfile: (profileFormValue: WithoutPasswordCheck) => void
  setBodyInfo: (
    profileFormValue: typeof SIGNUP_INPUTS.DEFAULT_VALUES.BODYINFO,
  ) => void
  setBodyFigure: (
    profileFormValue: typeof SIGNUP_INPUTS.DEFAULT_VALUES.BODYFIGURE,
  ) => void
}

export const useSignupStore = create<useSignupStoreProps>((set) => ({
  profile: (({ passwordCheck: _passwordCheck, ...rest }) => rest)(
    SIGNUP_INPUTS.DEFAULT_VALUES.PROFILE,
  ),
  bodyinfo: SIGNUP_INPUTS.DEFAULT_VALUES.BODYINFO,
  bodyfigure: SIGNUP_INPUTS.DEFAULT_VALUES.BODYFIGURE,
  setProfile: (profileFormValue) => set(() => ({ profile: profileFormValue })),
  setBodyInfo: (bodyinfoFormValue) =>
    set(() => ({ bodyinfo: bodyinfoFormValue })),
  setBodyFigure: (bodyfigureFormValue) =>
    set(() => ({ bodyfigure: bodyfigureFormValue })),
}))
