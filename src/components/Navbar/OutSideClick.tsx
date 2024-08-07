// @ts-nocheck
import { useEffect } from "react"

function OutSideClick(ref, callback) {
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback?.()
      }
    }

    window.addEventListener("mousedown", handleClick)

    return () => window.removeEventListener("mousedown", handleClick)
  }, [ref, callback])
}

export default OutSideClick
