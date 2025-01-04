import { create } from "zustand"

import { Recommend } from "@typpes/type"

export interface ModalStoreProps {
  modalState: Record<string, boolean>
  setModalState: (newState: Record<string, boolean>) => void
  routineState: number[]
  setRoutineState: (newState: number[]) => void
  resetRoutineState: () => void
  workoutState: Recommend
  setWorkoutState: (newState: Recommend) => void
}

export const useModalStore = create<ModalStoreProps>((set) => ({
  modalState: {
    알림: false,
    나가기: false,
    로딩: false,
    삭제: false,
    성공: false,
    루틴시작: false,
    루틴생성: false,
    루틴정보: false,
    루틴추가: false,
    루틴중복: false,
  },
  setModalState: (newState) =>
    set((state) => ({
      modalState: {
        ...state.modalState,
        ...newState,
      },
    })),
  routineState: [],
  setRoutineState: (newState) =>
    set(() => ({
      routineState: newState,
    })),
  resetRoutineState: () =>
    set(() => ({
      routineState: [],
    })),
  workoutState: {
    koreanName: "",
    videoLink: "",
    description: "",
    bodyPartKoreanName: [""],
    weight: "0",
    repeat: "0",
    workoutId: 0,
    set: "0",
    englishName: "",
    atcetera: null,
    imgPath: "",
    machineName: "",
    caution: "",
  },
  setWorkoutState: (newState) =>
    set(() => ({
      workoutState: newState,
    })),
}))
