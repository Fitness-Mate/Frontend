import { create } from "zustand"

export interface ModalStoreProps {
  modalState: Record<string, boolean>
  setModalState: (newState: Record<string, boolean>) => void
}

export const useModalStore = create<ModalStoreProps>((set) => ({
  modalState: {
    알림: false,
    나가기: false,
    로딩: false,
    삭제: false,
    루틴시작: false,
    루틴생성: false,
    루틴운동량: false,
  },
  setModalState: (newState) =>
    set((state) => ({
      modalState: {
        ...state.modalState,
        ...newState,
      },
    })),
}))
