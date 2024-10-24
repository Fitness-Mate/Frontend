import { useNavigate } from "react-router-dom"

import { useRecommendStore } from "@store/store"

import Accordion from "@components/Accordion/Accordion"
import Button from "@components/Button/Button"
import Icon from "@components/Icon/Icon"
import Title from "@components/Title/Title"

import { useUserInfo } from "../../../hooks/query/useUserInfo"
import * as S from "../StyledRecommend"

const Result = () => {
  const navigate = useNavigate()

  const handleHomePage = () => {
    navigate("/")
  }

  const { result } = useRecommendStore()

  const { userInfo } = useUserInfo()

  return (
    <S.ResultWrapper>
      <S.TitleWrapper>
        <S.TitleContainer>
          <Icon
            icon="Star"
            size={30}
          />
          <Title variant="big">
            {userInfo && userInfo.userName}님에게 맞는
            <br />
            {result.recommends.length}가지 운동을 추천했어요.
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
        {result.recommends.map(
          ({
            koreanName,
            videoLink,
            description,
            bodyPartKoreanName,
            weight,
            repeat,
            id,
            set,
          }) => (
            <Accordion key={id}>
              <Accordion.Header
                bodyParts={bodyPartKoreanName.toString()}
                // count={1}
              >
                {koreanName}
              </Accordion.Header>
              <Accordion.Content
                videoId={videoLink.split("=")[1]}
                recommend={[`${weight}kg`, `${set}세트`, `${repeat}회`]}>
                {description}
              </Accordion.Content>
              <Accordion.Trigger />
            </Accordion>
          ),
        )}
      </S.ResultList>
    </S.ResultWrapper>
  )
}
export default Result
