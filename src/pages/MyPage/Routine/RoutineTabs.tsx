import { useState } from "react"

import Button from "@components/Button/Button"
import IconButton from "@components/IconButton/IconButton"
import Tabs from "@components/Tabs/Tabs"

import { MyRoutines } from "@typpes/type"

import * as S from "./StyledMyPage"

interface RoutineTabsProps {
  myRoutines: MyRoutines[]
  onTabChange: (routineId: number) => void
}

const RoutineTabs = ({ myRoutines, onTabChange }: RoutineTabsProps) => {
  const [activeTab, setActiveTab] = useState(() => {
    const storedTabIndex = localStorage.getItem("selectedTabIndex")
    return storedTabIndex ? parseInt(storedTabIndex, 10) : 0
  })

  const handleTabClick = (index: number) => {
    const validTabIndex = Math.min(index, myRoutines.length - 1)
    const routineId = myRoutines[validTabIndex]?.routineId || -1

    setActiveTab(validTabIndex)
    onTabChange(routineId)
    localStorage.setItem("selectedTabIndex", String(validTabIndex))
  }

  if (activeTab >= myRoutines.length && myRoutines.length > 0) {
    handleTabClick(0)
  }

  return (
    <S.RoutinesContainer>
      <S.RoutineList>
        <Tabs>
          <Tabs.TabList>
            {myRoutines.map(({ routineId, routineName }, index) => (
              <Tabs.Tab
                key={routineId}
                index={index}
                variant="line"
                onClick={() => handleTabClick(index)}
                isFirstChild={index === 0}>
                {routineName}
              </Tabs.Tab>
            ))}
          </Tabs.TabList>
        </Tabs>
        <S.AddIconButtonWrapper>
          <IconButton
            icon="AddGrey"
            size={14}
          />
        </S.AddIconButtonWrapper>
      </S.RoutineList>
      <Button
        variant="text"
        size="tmd">
        편집
      </Button>
    </S.RoutinesContainer>
  )
}

export default RoutineTabs
