import { create } from "zustand"

interface PageNumStoreProps {
  pageNum: number
  setPageNum: (pageNum: number) => void
}

export const usePageNumStore = create<PageNumStoreProps>((set) => ({
  pageNum: 0,
  setPageNum: (pageNum) => set(() => ({ pageNum })),
}))
