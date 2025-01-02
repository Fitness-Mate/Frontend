import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Icon from "@components/Icon/Icon"
import IconButton from "@components/IconButton/IconButton"
import Title from "@components/Title/Title"

import EmptyRoutine from "@pages/MyPage/Routine/EmptyRoutine/EmptyRoutine"

import { useGetFetchRecentData } from "@hooks/query/useGetFetchRecentBodyData"
import { useGetMyRoutines } from "@hooks/query/useGetMyRoutines"
import useGetMyWorkouts from "@hooks/query/useGetMyWorkouts"
import { useGetUserInfo } from "@hooks/query/useGetUserInfo"

import DragAndDrop from "./DragAndDrop"
import RoutineTabs from "./RoutineTabs"
import * as S from "./StyledMyPage"

const MyPage = () => {
  const navigate = useNavigate()

  const handleFixProfile = async () => {
    navigate("/mypage/profile")
  }

  const { userInfo } = useGetUserInfo()
  const userName = userInfo?.userName || "사용자명"

  const { bodyDatas } = useGetFetchRecentData()

  const bodyFigure = bodyDatas?.bodyFigure || null

  const { data: myRoutines = [], isFetched: isRoutineFetched } =
    useGetMyRoutines()
  const isRoutine = isRoutineFetched && myRoutines.length > 0
  const myRoutineLength = isRoutine ? myRoutines.length : 0
  const [selectedRoutineId, setSelectedRoutineId] = useState<number>(
    myRoutines.length > 0 ? myRoutines[0].routineId : -1,
  )

  const { isWorkout } = useGetMyWorkouts(selectedRoutineId)

  const handleTabChange = (routineId: number) => {
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
                  <S.FixIconButtonWrapper onClick={handleFixProfile}>
                    <IconButton
                      icon="PencilDarkGrey"
                      size={14}
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
              <S.RoutineListWrapper>
                <RoutineTabs
                  myRoutines={myRoutines}
                  onTabChange={handleTabChange}
                />
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
              </S.RoutineListWrapper>
            ) : (
              <EmptyRoutine />
            )}
          </S.MypageTopContainer>
        </S.MypageHomeArea>
      </S.MypageContainer>
    </>
  )
}

export default MyPage
