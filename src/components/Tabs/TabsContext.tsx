import React, { createContext, useContext, useEffect, useState } from "react"

const DEFAULT_INDEX = 0

const TabsContext = createContext({
  activeTab: DEFAULT_INDEX,
  switchTab: (_tabIndex: number) => {},
})

const useTabs = () => useContext(TabsContext)

const TabsProvider = ({ children }: { children: React.ReactNode }) => {
  const getInitialTabIndex = () => {
    const storedTabIndex = localStorage.getItem("selectedTabIndex")
    return storedTabIndex ? parseInt(storedTabIndex, 10) : DEFAULT_INDEX
  }

  const [activeTab, setActiveTab] = useState(getInitialTabIndex)

  useEffect(() => {
    localStorage.setItem("selectedTabIndex", String(activeTab))
  }, [activeTab])

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
