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
    initial: { y: "366px" },
    animate: isScrollTop ? { y: "366px" } : { y: "80px" },
    transition: { ...animation.small },
  }

  return { guideAnimation, machineAnimation }
}
