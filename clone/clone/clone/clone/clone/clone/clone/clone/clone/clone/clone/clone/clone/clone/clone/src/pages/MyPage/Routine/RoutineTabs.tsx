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
  const handleTabClick = (index: number) => {
    const selectedRoutine = myRoutines[index]
    if (selectedRoutine) {
      onTabChange(selectedRoutine.routineId)
    }
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
                isFirstChild={true}>
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
