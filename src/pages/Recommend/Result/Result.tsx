import { useLocation, useNavigate } from "react-router-dom"

import { useUserStore } from "stores/useUserStore"

import Accordion from "@components/common/Accordion/Accordion"
import Button from "@components/common/Button/Button"
import Icon from "@components/common/Icon/Icon"
import Title from "@components/common/Title/Title"

import { PostRecommendResponse } from "@typpes/type"

import { useGetMyRoutines } from "@hooks/query/useGetMyRoutines"
import { useModal } from "@hooks/useModal"

import * as GS from "../StyledRecommend"
import * as S from "./StyledResult"

interface RouteState {
  state: PostRecommendResponse
}

const Result = () => {
  const navigate = useNavigate()

  const { state: result } = useLocation() as RouteState

  const { isLogin, user } = useUserStore()
  const { data: routines = [] } = useGetMyRoutines()

  const addRoutineModal = useModal("루틴추가")
  const startRoutineModal = useModal("루틴시작")

  const onOpen =
    routines?.length > 0 ? addRoutineModal.onOpen : startRoutineModal.onOpen

  const handleHomePage = () => {
    navigate("/")
  }

  return (
    <>
      <GS.RecommendBackground />
      <S.ResultWrapper>
        <S.TitleWrapper>
          <S.TitleContainer>
            <Icon
              icon="Star"
              size={30}
            />
            <Title variant="big">
              {isLogin && user?.userName}님에게 맞는
              <br />
              <S.TitleEmphasize>
                {result.recommends.length}가지 운동
              </S.TitleEmphasize>
              <Title.SubBottomTitle>
                내 운동 루틴에 추가해보세요.
              </Title.SubBottomTitle>
            </Title>
          </S.TitleContainer>
          <S.ButtonContainer>
            <Button
              size="lg"
              variant="text"
              onClick={handleHomePage}>
              홈으로
            </Button>
          </S.ButtonContainer>
        </S.TitleWrapper>

        <S.ResultList>
          {result.recommends.map((workout, idx) => {
            const {
              workoutId,
              koreanName,
              description,
              weight,
              set,
              repeat,
              bodyPartKoreanName,
              videoLink,
              caution,
            } = workout
            return (
              <Accordion
                key={workoutId}
                idx={idx}
                bodyParts={bodyPartKoreanName.toString()}
                onOpen={onOpen}
                workout={workout}>
                <Accordion.Header>{koreanName}</Accordion.Header>
                <Accordion.Content
                  videoId={videoLink.split("=")[1]}
                  recommend={[`${weight}kg`, `${repeat}회`, `${set}세트`]}
                  description={description}
                  caution={caution}
                />
                <Accordion.Trigger />
              </Accordion>
            )
          })}
        </S.ResultList>
      </S.ResultWrapper>
    </>
  )
}
export default Result
