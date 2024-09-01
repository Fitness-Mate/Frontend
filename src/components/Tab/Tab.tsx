import { ButtonHTMLAttributes } from "react"

import { StyledTab, StyledTabCount } from "@components/Tab/StyledTab"
import { getVariant } from "@components/Tab/getVariant"
import { useTabs } from "@components/Tabs/TabsContext"

export type Variant = "fill" | "line"

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  variant: Variant
  index: number
  count?: number
}

const Tab = ({ children, index, variant, count, ...props }: TabProps) => {
  const { activeTab, switchTab } = useTabs()
  const variantStyle = getVariant(variant, activeTab === index)

  const handleTab = () => {
    switchTab(index)
  }

  return (
    <StyledTab
      onClick={handleTab}
      $variantStyle={variantStyle}
      {...props}>
      {children}
      {variant === "line" && <StyledTabCount>{count}</StyledTabCount>}
    </StyledTab>
  )
}

export default Tab
