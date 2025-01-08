import { ButtonHTMLAttributes, MouseEvent } from "react"

import { StyledTab, StyledTabCount } from "@components/Tab/StyledTab"
import { getVariant } from "@components/Tab/getVariant"
import { useTabs } from "@components/Tabs/TabsContext"

export type Variant = "fill" | "line"

interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  variant: Variant
  index: number
  count?: number
  width?: string
}

const Tab = ({
  children,
  index,
  variant,
  count,
  onClick,
  width = "auto",
  ...props
}: TabProps) => {
  const { activeTab, switchTab } = useTabs()
  const isSelected = activeTab === index
  const variantStyle = getVariant(variant, isSelected)

  const handleTab = (event: MouseEvent<HTMLButtonElement>) => {
    switchTab(index)
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <StyledTab
      onClick={handleTab}
      $variantStyle={variantStyle}
      $width={width}
      type="button"
      {...props}>
      {children}
      {variant === "line" && <StyledTabCount>{count}</StyledTabCount>}
    </StyledTab>
  )
}

export default Tab
