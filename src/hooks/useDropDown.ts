import { useEffect, useRef, useState } from "react"

export const useDropDown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropDownRef = useRef<HTMLDivElement>(null)

  const handleOutSideClick = (e: Event) => {
    const current = dropDownRef.current
    if (isOpen && current && !current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }

  const toggleDropDown = () => {
    setIsOpen((prevState) => !prevState)
  }

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick)

    return () => {
      document.removeEventListener("click", handleOutSideClick)
    }
  }, [isOpen])

  return { isOpen, dropDownRef, toggleDropDown }
}
