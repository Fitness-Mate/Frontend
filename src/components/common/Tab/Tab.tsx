import { ButtonHTMLAttributes, MouseEvent } from "react"

import { getVariant } from "@components/common/Tab/getVariant"
import { useTabs } from "@components/common/Tabs/TabsContext"

import * as S from "./StyledTab"

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
    <S.TabWrapper
      onClick={handleTab}
      $variantStyle={variantStyle}
      $width={width}
      type="button"
      {...props}>
      {children}
      {variant === "line" && <S.TabCount>{count}</S.TabCount>}
    </S.TabWrapper>
  )
}

export default Tab
