import { motion } from "framer-motion"

const Motion = ({
  isExecute,
  motionValue,
}: {
  isExecute: boolean
  motionValue: { stiffness: number; damping: number }
}) => {
  const box = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: "blue",
  }

  const variants = {
    initial: { x: -200 },
    execute: { x: 200 },
  }

  return (
    <>
      <motion.div
        style={box}
        variants={variants}
        animate={isExecute ? "execute" : "initial"}
        transition={{ type: "spring", ...motionValue }}
      />
    </>
  )
}

export default Motion
