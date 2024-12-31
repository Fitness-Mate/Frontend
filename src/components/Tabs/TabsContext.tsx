import { createContext, useContext, useEffect, useState } from "react"

const DEFAULT_INDEX = 0

const TabsContext = createContext({
  activeTab: DEFAULT_INDEX,
  switchTab: (_tabIndex: number) => {},
})

const useTabs = () => useContext(TabsContext)

interface TabsProviderProps {
  children: React.ReactNode
  useLocalStorage?: boolean
}

const TabsProvider = ({
  children,
  useLocalStorage = false,
}: TabsProviderProps) => {
  const getInitialTabIndex = () => {
    if (useLocalStorage) {
      const storedTabIndex = localStorage.getItem("selectedTabIndex")
      return storedTabIndex ? parseInt(storedTabIndex, 10) : DEFAULT_INDEX
    }
    return DEFAULT_INDEX
  }

  const [activeTab, setActiveTab] = useState(getInitialTabIndex)

  useEffect(() => {
    if (useLocalStorage) {
      localStorage.setItem("selectedTabIndex", String(activeTab))
    }
  }, [activeTab, useLocalStorage])

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
