import styled from "styled-components"

import Tab from "@components/common/Tab/Tab"
import { TabsProvider, useTabs } from "@components/common/Tabs/TabsContext"

import { StrictPropsWithChildren } from "@typpes/type"

const Tabs = ({ children }: StrictPropsWithChildren) => (
  <TabsProvider>
    <>{children}</>
  </TabsProvider>
)

const TabList = ({ children }: StrictPropsWithChildren) => (
  <TabListWrapper>{children}</TabListWrapper>
)

interface TabPanelProps {
  index: number
}

const TabPanels = ({ children }: StrictPropsWithChildren) => children

const TabPanel = ({
  children,
  index,
}: StrictPropsWithChildren<TabPanelProps>) => {
  const { activeTab } = useTabs()

  return index === activeTab ? children : null
}

Tabs.TabList = TabList
Tabs.TabPanel = TabPanel
Tabs.TabPanels = TabPanels
Tabs.Tab = Tab

export default Tabs

const TabListWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`
