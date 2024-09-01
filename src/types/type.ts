import { ReactNode } from "react"

export interface User {
  userName: string
  loginId: string
  birthDate: number
  sex: string
}

export interface Workout {
  englishName: string
  koreanName: string
  imageURL: string
  videoLink: string
  description: string
  bodyPartKoreanName: string
}

export interface Machine {
  machineId: number
  bodyPartKoreanName: string
  englishName: string
  koreanName: string
}

export interface BodyData {
  date: string
  bodyDataId: number
  height: number
  weight: number
  bodyFat: number
  muscleMass: number
  upDownBalance: number
}

export type StrictPropsWithChildren<P = unknown> = P & {
  children: ReactNode
}
