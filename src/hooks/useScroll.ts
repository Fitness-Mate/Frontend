import { RefObject, useEffect, useState } from "react"

export const useScroll = (scrollRef: RefObject<HTMLDivElement>) => {
  const [position, setPosition] = useState(0)

  const handleScroll = () => {
    if (!scrollRef.current) {
      return
    }
    setPosition(scrollRef.current.scrollTop)
  }

  useEffect(() => {
    scrollRef.current?.addEventListener("scroll", handleScroll)
    return () => {
      scrollRef.current?.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return position
}
