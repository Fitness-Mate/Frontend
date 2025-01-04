import { useNavigate, useParams } from "react-router-dom"

import Badge from "@components/Badge/Badge"
import RoundButton from "@components/Button/RoundButton"

import Icon from "../../components/Icon/Icon"
import { useGetWorkout } from "../../hooks/query/useGetWorkout"
import * as S from "./StyledDetail"

const Detail = () => {
  const { workoutId } = useParams()

  const { workout } = useGetWorkout(Number(workoutId))

  const navigate = useNavigate()
  const handleRoutine = () => {
    alert("수정 중인 기능입니다!")
  }

  const handleBackPage = () => {
    navigate(-1)
  }

  return (
    <S.TotalWrapper>
      <S.BeforeButton onClick={handleBackPage}>
        <Icon
          icon="LeftArrow"
          size={24}
          fill="none"
        />
        이전
      </S.BeforeButton>
      <S.DetailWrapper>
        <S.TitleWrapper>
          <S.Title>{workout?.koreanName}</S.Title>
          <RoundButton
            leftIcon="Add"
            variant="blue"
            size="small"
            onClick={handleRoutine}>
            루틴에 추가
          </RoundButton>
        </S.TitleWrapper>
        <S.ContentWrapper>
          <S.ContentBox>
            <S.ContentImg
              src={workout?.imgPath}
              alt="운동 이미지"
            />
            <S.ContentInfoWrapper>
              <S.ContentInfoTopWrapper>
                <S.ContentInfoTopTitle>운동 설명</S.ContentInfoTopTitle>
                <S.ContentInfoTopText>
                  {workout?.description}
                </S.ContentInfoTopText>
              </S.ContentInfoTopWrapper>
              <S.ContentInfoBottomWrapper>
                <S.ContentInfoBottomTitle>운동 부위</S.ContentInfoBottomTitle>
                <S.ContentInfoBottomList>
                  {workout?.bodyPartKoreanName.map((badge) => (
                    <Badge
                      variant="fill"
                      key={badge}>
                      {badge}
                    </Badge>
                  ))}
                </S.ContentInfoBottomList>
              </S.ContentInfoBottomWrapper>
            </S.ContentInfoWrapper>
          </S.ContentBox>
          <S.VideoWrapper>
            <iframe
              title={workout?.videoLink}
              style={{ width: "100%", height: "100%" }}
              src={`https://www.youtube.com/embed/${workout?.videoLink.split("=")[1]}`}
            />
          </S.VideoWrapper>
        </S.ContentWrapper>
      </S.DetailWrapper>
    </S.TotalWrapper>
  )
}

export default Detail
