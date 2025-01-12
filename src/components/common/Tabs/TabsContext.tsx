import { createContext, useContext, useState } from "react"

import { StrictPropsWithChildren } from "@typpes/type"

const DEFAULT_INDEX = 0

const TabsContext = createContext({
  activeTab: DEFAULT_INDEX,
  switchTab: (_tabIndex: number) => {},
})

const useTabs = () => useContext(TabsContext)

const TabsProvider = ({ children }: StrictPropsWithChildren) => {
  const [activeTab, setActiveTab] = useState(DEFAULT_INDEX)

  const switchTab = (tabIndex: number) => {
    setActiveTab(tabIndex)
  }

  return (
    <TabsContext.Provider value={{ activeTab, switchTab }}>
      {children}
    </TabsContext.Provider>
  )
}

export { TabsProvider, useTabs }
