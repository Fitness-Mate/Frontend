import { instance } from "@apis/instance"

import {
  MyRoutines,
  MyWorkoutIndex,
  MyWorkoutList,
  MyfitList,
  RoutineInfo,
} from "../../types/type"

const myFit = () => instance.get<MyfitList>("/api/myfit/userInfo")

const myRoutines = () =>
  instance
    .get<MyRoutines[]>("/api/myfit/routines/workout")
    .then((res) => res.data)

const editMyRoutine = async (params: { routines: MyRoutines[] }) => {
  const { data } = await instance.post("/api/myfit/routines/workout", params)
  return data
}

const myWorkouts = async (routineId: number) => {
  const { data } = await instance.get<MyWorkoutList[]>(
    `/api/myfit/routines/workout/${routineId}`,
  )
  return data
}

const editMyWorkout = async (myWorkoutId: number, params: MyWorkoutIndex) => {
  const { data } = await instance.post(
    `/api/myfit/routines/workout/update/${myWorkoutId}`,
    params,
  )
  return data
}

const deleteMyWorkout = async (myWorkoutId: number) => {
  await instance
    .get(`/api/myfit/routines/workout/delete/${myWorkoutId}`)
    .then((res) => res.data)
}

const addRoutine = async (routineInfo: RoutineInfo, routineId: number) => {
  const { data } = await instance.post(
    `/api/myfit/routines/workout/${routineId}`,
    routineInfo,
  )
  return data
}

const MyFitAPI = {
  myFit,
  myRoutines,
  editMyRoutine,
  editMyWorkout,
  myWorkouts,
  deleteMyWorkout,
  addRoutine,
}
export default MyFitAPI
