import { create } from "zustand"

import { PostRecommendResponse } from "../types/type"

interface BodyPartProps {
  bodyPart: string[]
  result: PostRecommendResponse | Record<string, never>
  setBodyPart: (bodyPart: string[]) => void
  setResult: (result: PostRecommendResponse) => void
}

export const useRecommendStore = create<BodyPartProps>((set) => ({
  bodyPart: [],
  result: {},
  setBodyPart: (bodyPart) => set(() => ({ bodyPart })),
  setResult: (result) => set(() => ({ result })),
}))
