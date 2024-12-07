import { useEffect, useState } from "react"

import Button from "@components/Button/Button"
import EmptyRoutine from "@components/EmptyRoutine/EmptyRoutine"
import Icon from "@components/Icon/Icon"
import IconButton from "@components/IconButton/IconButton"
import Tabs from "@components/Tabs/Tabs"
import Title from "@components/Title/Title"

import { useGetFetchRecentData } from "@hooks/query/useGetFetchRecentBodyData"
import { useGetMyRoutines } from "@hooks/query/useGetMyRoutines"
import useGetMyWorkout from "@hooks/query/useGetMyWorkout"
import { useUserInfo } from "@hooks/query/useUserInfo"

import DragAndDrop from "./DragAndDrop"
import * as S from "./StyledMyPage"

const MyPage = () => {
  const { userInfo } = useUserInfo()
  const userName = userInfo ? userInfo.userName : undefined

  const { bodyDatas } = useGetFetchRecentData()
  const [bodyFigure, setBodyFigure] = useState<string | null>()

  const { data: myRoutines = [] } = useGetMyRoutines()
  const isRoutine = Array.isArray(myRoutines) && myRoutines.length > 0
  const [myRoutineLength, setMyRoutineLength] = useState<number>(0)
  const [selectedRoutineId, setSelectedRoutineId] = useState<number | null>(
    null,
  )
  const { isWorkout } = useGetMyWorkout(selectedRoutineId)

  useEffect(() => {
    try {
      if (isRoutine) {
        setSelectedRoutineId(myRoutines[0].routineId)
        setBodyFigure(bodyDatas?.bodyFigure)
        setMyRoutineLength(myRoutines.length)
      }
    } catch (e) {
      console.error(e)
    }
  }, [myRoutines, isRoutine, bodyDatas?.bodyFigure])

  const handleTabClick = (routineId: number) => {
    setSelectedRoutineId(routineId)
  }

  return (
    <>
      <S.MypageBackground />
      <S.MypageContainer>
        <S.MypageHomeArea>
          <S.MypageTopContainer>
            <Title variant="midC">
              <Title.SubTopIconTitle>내 루틴</Title.SubTopIconTitle>
            </Title>
            <S.MyInformation>
              <Title variant="midE">
                <Title.SubTopIconTitle>
                  {userName}
                  <S.FixIconButtonWrapper>
                    <IconButton
                      icon="RightArrowGrey"
                      size={24}
                    />
                  </S.FixIconButtonWrapper>
                </Title.SubTopIconTitle>
                <S.MyBodyInfotmation>
                  <Title.SubBottomTitleContent>
                    체형
                    <Title.SubBottomTitle>{bodyFigure}</Title.SubBottomTitle>
                  </Title.SubBottomTitleContent>
                  <Icon
                    icon="CircleSeparation"
                    size={3}
                  />
                  <Title.SubBottomTitleContent>
                    분할
                    <Title.SubBottomTitle>
                      {myRoutineLength}분할
                    </Title.SubBottomTitle>
                  </Title.SubBottomTitleContent>
                </S.MyBodyInfotmation>
              </Title>
            </S.MyInformation>
            {isRoutine ? (
              <S.RoutinesContainer>
                <S.RoutineList>
                  <Tabs>
                    <Tabs.TabList>
                      {myRoutines?.map((routine, index) => {
                        const { routineId, routineName } = routine
                        return (
                          <Tabs.Tab
                            key={routineId}
                            index={index}
                            variant="line"
                            onClick={() => {
                              handleTabClick(routineId)
                            }}
                            isFirstChild={true}>
                            {routineName}
                          </Tabs.Tab>
                        )
                      })}
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
            ) : (
              <EmptyRoutine />
            )}
          </S.MypageTopContainer>
          {isWorkout ? (
            <>
              <S.AddWorkoutWrapper>
                <IconButton
                  icon="AddRoundGray"
                  size={32}
                />
                운동 추가하기
              </S.AddWorkoutWrapper>
              <DragAndDrop selectedRoutineId={selectedRoutineId} />
            </>
          ) : (
            <S.EmptyWorkoutWrapper>
              아직 추가된 운동이 없어요
              <S.AddWorkoutWrapper>
                <IconButton
                  icon="AddRoundGray"
                  size={32}
                />
                새로운 운동 추가하기
              </S.AddWorkoutWrapper>
            </S.EmptyWorkoutWrapper>
          )}
        </S.MypageHomeArea>
      </S.MypageContainer>
    </>
  )
}

export default MyPage
