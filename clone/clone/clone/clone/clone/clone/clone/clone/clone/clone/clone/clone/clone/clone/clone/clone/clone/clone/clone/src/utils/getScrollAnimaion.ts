import { animation } from "@styles/theme"

export const getScrollAnimation = (isScrollTop: boolean) => {
  const guideAnimation = {
    initial: { opacity: 1, scale: 1, y: 0 },
    animate: isScrollTop
      ? { opacity: 1, scale: 1, y: 0 }
      : { opacity: 0, scale: 0.8, y: -100 },
    transition: { ...animation.quick },
  }

  const machineAnimation = {
    initial: { y: "36.6rem" },
    animate: isScrollTop ? { y: "36.6rem" } : { y: "8rem" },
    transition: { ...animation.small },
  }

  return { guideAnimation, machineAnimation }
}
