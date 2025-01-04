import { RefObject, useCallback, useEffect, useState } from "react"

export const useScroll = (scrollRef?: RefObject<HTMLDivElement>) => {
  const target = scrollRef ? scrollRef.current : window

  const [position, setPosition] = useState(0)

  const handleScroll = useCallback(() => {
    if (scrollRef && scrollRef.current) {
      setPosition(scrollRef.current.scrollTop)
    } else {
      setPosition(window.scrollY)
    }
  }, [scrollRef])

  useEffect(() => {
    target?.addEventListener("scroll", handleScroll)
    return () => {
      target?.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll, scrollRef, target])

  return { position, isScrollTop: position < 10 }
}
