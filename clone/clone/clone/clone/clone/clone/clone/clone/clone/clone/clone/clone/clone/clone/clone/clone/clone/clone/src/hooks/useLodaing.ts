import { useAnimationFrame, useMotionValue, useTransform } from "framer-motion"

import { animation } from "@styles/theme"

export const useLoading = () => {
  const time = useMotionValue(0)
  const rotate = useTransform(time, [0, 6000], [0, 360], { clamp: false })
  const scale = useTransform(time, [0, 3000, 6000], [1, 1.2, 1], {
    clamp: true,
  })

  const coverAnimation = {
    initial: { x: "-50%", y: "-50%", opacity: 0, scale: 0.8 },
    animate: {
      x: "-50%",
      y: "-50%",
      opacity: 1,
      scale: 1,
    },
    transition: animation.slow,
    style: { rotate, scale },
  }

  const textAnimation = {
    initial: { x: "-50%", y: "-50%", opacity: 0, scale: 0.8 },
    animate: {
      x: "-50%",
      y: "-50%",
      opacity: 1,
      scale: 1,
    },
    transition: animation.slow,
  }

  useAnimationFrame(() => {
    if (time.get() >= 6000) {
      time.set(0)
    } else {
      time.set(time.get() + 16)
    }
  })

  return { coverAnimation, textAnimation }
}
