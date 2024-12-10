import { FormProvider, useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom"

import { useUserStore } from "@store/useUserStore"

import Accordion from "@components/Accordion/Accordion"
import Button from "@components/Button/Button"
import Icon from "@components/Icon/Icon"
import RoutineDuplicateModal from "@components/Modal/components/Alert/RoutineDuplicateModal"
import RoutineAddModal from "@components/Modal/components/Routine/RoutineAddModal"
import RoutineInfoModal from "@components/Modal/components/Routine/RoutineInfoModal"
import RoutineMakeModal from "@components/Modal/components/Routine/RoutineMakeModal"
import RoutineModal from "@components/Modal/components/Routine/RoutineModal"
import Title from "@components/Title/Title"

import {
  PostRecommendResponse,
  RoutineInfoTypes,
  RoutineNameTypes,
} from "@typpes/type"

import { useGetMyRoutines } from "@hooks/query/useGetMyRoutines"
import { useModal } from "@hooks/useModal"

import * as S from "./StyledResult"

interface RouteState {
  state: PostRecommendResponse
}

const Result = () => {
  const navigate = useNavigate()

  const { state: result } = useLocation() as RouteState

  const { isLogin, user } = useUserStore()
  const { data: routines = [] } = useGetMyRoutines()

  const methods = useForm<RoutineInfoTypes>()
  const methods2 = useForm<RoutineNameTypes>()

  const addRoutineModal = useModal("루틴추가")
  const startRoutineModal = useModal("루틴시작")

  const onOpen =
    routines?.length > 0 ? addRoutineModal.onOpen : startRoutineModal.onOpen

  const handleHomePage = () => {
    navigate("/")
  }

  return (
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
        <Button
          size="lg"
          variant="text"
          onClick={handleHomePage}>
          홈으로
        </Button>
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
                recommend={[`${weight}kg`, `${set}세트`, `${repeat}회`]}
                description={description}
                caution={caution}
              />
              <Accordion.Trigger />
            </Accordion>
          )
        })}
      </S.ResultList>

      <RoutineAddModal />
      <RoutineModal />
      <FormProvider {...methods}>
        <RoutineInfoModal />
      </FormProvider>
      <FormProvider {...methods2}>
        <RoutineMakeModal />
      </FormProvider>
      <RoutineDuplicateModal />
    </S.ResultWrapper>
  )
}
export default Result
