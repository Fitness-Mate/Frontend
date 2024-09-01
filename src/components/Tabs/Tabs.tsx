import Tab from "@components/Tab/Tab"
import {
  TabPanelsWrapper,
  TabsListWrapper,
  TabsWrapper,
} from "@components/Tabs/StyledTabs"
import { TabsProvider, useTabs } from "@components/Tabs/TabsContext"

import { StrictPropsWithChildren } from "@typpes/type"

interface TabPanelProps {
  index: number
}
const Tabs = ({ children }: StrictPropsWithChildren) => (
  <TabsProvider>
    <TabsWrapper>{children}</TabsWrapper>
  </TabsProvider>
)

const TabList = ({ children }: StrictPropsWithChildren) => (
  <TabsListWrapper>{children}</TabsListWrapper>
)

const TabPanels = ({ children }: StrictPropsWithChildren) => (
  <TabPanelsWrapper>{children}</TabPanelsWrapper>
)

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
