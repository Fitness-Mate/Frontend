import { createContext, useContext, useState } from "react"

import { StrictPropsWithChildren } from "@typpes/type"

const DEFAULT_INDEX = -1

const FigureContext = createContext({
  activeMenu: DEFAULT_INDEX,
  switchMenu: (_menu: number) => {},
  activeFigure: DEFAULT_INDEX,
  switchFigure: (_figure: number) => {},
})

const useFigure = () => useContext(FigureContext)

const FigureProvider = ({ children }: StrictPropsWithChildren) => {
  const [activeMenu, setActiveMenu] = useState(DEFAULT_INDEX)
  const [activeFigure, setActiveFigure] = useState(DEFAULT_INDEX)

  const switchMenu = (menu: number) => {
    setActiveMenu(menu)
  }

  const switchFigure = (figure: number) => {
    setActiveFigure(figure)
  }

  return (
    <FigureContext.Provider
      value={{ activeMenu, switchMenu, activeFigure, switchFigure }}>
      {children}
    </FigureContext.Provider>
  )
}

export { FigureProvider, useFigure }
