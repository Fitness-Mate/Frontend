import { createContext, useContext, useState } from "react"

import Header from "@components/Accordion/Header"
import { AccordionWrapper } from "@components/Accordion/StyledAccordion"
import Trigger from "@components/Accordion/Trigger"

import { Recommend, StrictPropsWithChildren, Workout } from "@typpes/type"

import Content from "./Content"

interface AccordionContextProps {
  visible?: boolean
  toggle?: () => void
  bodyParts: string
  onOpen: () => void
  workout: Workout | Recommend
  idx?: number
}

const AccordionContext = createContext<AccordionContextProps>({
  visible: false,
  toggle: () => {},
  bodyParts: "",
  onOpen: () => {},
  workout: {
    id: -1,
    englishName: "",
    koreanName: "",
    imgPath: "",
    videoLink: "",
    description: "",
    atcetera: null,
    bodyPartKoreanName: [""],
    machineKoreanName: [""],
    createdAt: "",
  },
})

export const useAccordion = () => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error(
      "Header, Content 컴포넌트는 Accordion 컴포넌트 내부에서 사용되어야 합니다.",
    )
  }
  return context
}

const Accordion = ({
  children,
  bodyParts,
  onOpen,
  workout,
  idx,
}: StrictPropsWithChildren<AccordionContextProps>) => {
  const [visible, setVisible] = useState<boolean>(idx === 0 ? true : false)

  const toggle = () => {
    setVisible((prev) => !prev)
  }

  return (
    <AccordionContext.Provider
      value={{
        visible,
        toggle,
        bodyParts,
        onOpen,
        workout,
      }}>
      <AccordionWrapper $visible={visible}>{children}</AccordionWrapper>
    </AccordionContext.Provider>
  )
}

Accordion.Header = Header
Accordion.Content = Content
Accordion.Trigger = Trigger

export default Accordion
