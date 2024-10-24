// @ts-nocheck
import { create } from "zustand"

export const useSignupStore = create((set) => ({
  profile: {},
  bodyinfo: {},
  bodyfigure: {},
  setProfile: (profileFormValue) => set(() => ({ profile: profileFormValue })),
  setBodyInfo: (bodyinfoFormValue) =>
    set(() => ({ bodyinfo: bodyinfoFormValue })),
  setBodyfigure: (bodyfigureFormValue) =>
    set(() => ({ bodyfigure: bodyfigureFormValue })),
}))
