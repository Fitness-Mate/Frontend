import { useEffect, useState } from "react"

import MyFitAPI from "@apis/domain/myfit"

import { MyWorkoutList } from "@typpes/type"

const useGetMyWorkout = (routineId: number | null | undefined) => {
  const [myWorkouts, setMyWorkouts] = useState<MyWorkoutList[]>([])
  const [isWorkout, setIsWorkout] = useState<boolean>(false)
  const [isRemoveSuccess, setIsRemoveSuccess] = useState(false)

  useEffect(() => {
    const fetchWorkouts = async () => {
      if (!routineId) return

      try {
        const response = await MyFitAPI.myWorkouts(routineId)
        setMyWorkouts(response)
        setIsWorkout(response.length > 0)
      } catch (error) {
        console.error(error)
        setMyWorkouts([])
        setIsWorkout(false)
      }
    }

    fetchWorkouts()
  }, [routineId, isRemoveSuccess])

  const handleRemove = () => {
    setIsRemoveSuccess((prev) => !prev)
  }

  return { myWorkouts, isWorkout, setMyWorkouts, handleRemove }
}

export default useGetMyWorkout
