import { useCallback, useEffect, useRef, useState } from "react"

export const useDropDown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropDownRef = useRef<HTMLButtonElement>(null)

  const handleOutSideClick = useCallback(
    (e: Event) => {
      const current = dropDownRef.current
      if (isOpen && current && !current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    },
    [isOpen],
  )

  const toggleDropDown = () => {
    setIsOpen((prevState) => !prevState)
  }

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick)

    return () => {
      document.removeEventListener("click", handleOutSideClick)
    }
  }, [isOpen, handleOutSideClick])

  return { isOpen, dropDownRef, toggleDropDown }
}
