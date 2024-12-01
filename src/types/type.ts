import { ReactNode } from "react"

export type StrictPropsWithChildren<P = unknown> = P & {
  children: ReactNode
}
export interface User {
  userName: string
  loginEmail: string
  sex: string
  birthDate: string
}

export interface Workout {
  id: number
  englishName: string
  koreanName: string
  imgPath: string
  videoLink: string
  description: string
  atcetera: null
  bodyPartKoreanName: string[]
  machineKoreanName: string[]
  createdAt: string
}

export interface Machine {
  machineId: number
  bodyPartKoreanName: string
  englishName: string
  koreanName: string
}

export interface BodyData {
  birthDate: string
  bodyDataId: number
  height: number
  weight: number
  bodyFat: number
  muscleMass: number
  upDownBalance: number
}

export interface BodyFigureData {
  bodyFat: number
  muscleMass: number
}

export interface BodyInfoPayload {
  sex: string
  height: number
  weight: number
}

export interface SignupPayload {
  userName: string
  loginEmail: string
  password: string
  sex: string
  birthDate: string
  height: number
  weight: number
  bodyFat: number
  muscleMass: number
  upDownBalance: number
}

export interface SignupResponse {
  accessToken: string
  refreshToken: string
  rememberMe: boolean
}

export interface UpdateUserPayload {
  userName: string
  birthDate: string
}

export interface UpdateUserPasswordPayload {
  oldPassword: string
  newPassword: string
}

export interface PostUserDeletePayload {
  password: string
}

export interface PostLoginPayload {
  loginEmail: string
  password: string
  rememberMe: boolean
}

export type PostLoginResponse = SignupResponse

export type GetAccessTokenResponse = SignupResponse

export interface PostNewPasswordPayload {
  mailAdderss: string
}

export interface PostNewPasswordResponse {
  status: "ok" | "fail"
  message: string
}

export interface GetVerifyCodePayload {
  mailAdderss: string
  verificationCode: string
}

export type GetVerifyCodeResponse = PostNewPasswordResponse

export interface PostRecommendIdPayload {
  bodyPartKoreanName: string[]
  machineKoreanName: string[]
}

export interface Recommend {
  workoutId: number
  englishName: string
  koreanName: string
  imgPath: string
  videoLink: string
  description: string
  atcetera: null
  machineName: string
  bodyPartKoreanName: string[]
  weight: string
  repeat: string
  set: string
  caution: string
}
export interface PostRecommendResponse {
  date: string
  requestedBodyParts: string[]
  recommends: Recommend[]
}

export interface PostBodyDataPayload {
  date: string
  height: number
  weight: number
  bodyFat: number
  muscleMass: number
  upDownBalance: number
}

export interface GetBodyDataResponse extends PostBodyDataPayload {
  bodyDataId: number
}

export interface DeleteBodyDataResponse {
  status: "ok" | "fail"
  message: string
}

export interface GetWorkoutsPayload {
  page: number
  searchKeyword: string
  bodyPartKoreanName: string[] | []
}

export interface MachineList {
  englishName: string
  koreanName: string
  imgPath: string
}

export interface BodyPartList extends MachineList {
  bodyPartId: number
}

export interface PostMachineListPayload {
  bodyPartKoreanName: string[]
}

export type SearchTypes = {
  search: string
}

export interface MyfitList {
  userName: string
  userAge: string
  weight: number
  height: number
}

export interface MyRoutines {
  routineId: number
  routineIndex: number
  routineName: string
  isAdded?: boolean
}

export interface MyWorkoutList {
  myWorkoutId: number
  myWorkoutIndex: number
  weight: string
  rep: string
  setCount: string
  workoutId: number
  workoutName: string
  imgPath: string
  description: string
  atcetera: null
  bodyParts: string[]
  machines: string[]
  caution: string
}

export interface MyWorkoutIndex {
  myWorkoutIndex: number
  weight: string
  rep: string
  setCount: string
}

export interface RoutineInfo {
  workoutIds: number[]
  weight: string
  rep: string
  setCount: string
  caution: string
}

export interface RoutineNameTypes {
  routineName: string
}

export interface RoutineInfoTypes {
  weight: string
  repeat: string
  set: string
}
