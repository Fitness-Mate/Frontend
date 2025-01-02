import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { Link } from "react-scroll"

import { useUserStore } from "@store/useUserStore"
import { SEARCH_INPUTS } from "constants/validation"

import Button from "@components/Button/Button"
import Chip from "@components/Chip/Chip"
import Icon from "@components/Icon/Icon"
import IconButton from "@components/IconButton/IconButton"

import homebanner from "@assets/images/homebanner.png"
import slide2 from "@assets/images/slide2.png"
import slide from "@assets/images/slide.png"

import { SearchTypes } from "@typpes/type"

import Input from "../../components/Input/Input"
import { formAdapter } from "../../utils/formAdapter"
import * as S from "./StyledHome"

export const Home = () => {
  const navigate = useNavigate()
  const { isLogin } = useUserStore()

  const { register, handleSubmit, setValue, setFocus } = useForm<SearchTypes>()

  const handleSearch = (data: SearchTypes) => {
    navigate("searchworkout", { state: { keyword: data } })
  }

  const handleKeyWord = (item: string) => {
    setValue("search", item)
    setFocus("search")
  }

  const handleRecommend = () => {
    if (isLogin) {
      navigate("recommend/bodypart")
    }
  }

  return (
    <S.HomeContainer>
      <S.First>
        <S.FirstContainer>
          <S.FirstSubTitle>AI 기반의</S.FirstSubTitle>
          <S.FirstTitle>
            정확하고 빠른
            <br />
            개인맞춤 추천
          </S.FirstTitle>
        </S.FirstContainer>
        <S.HomeBanner
          src={homebanner}
          alt="홈 배너"
        />
      </S.First>
      <S.Second>
        <S.SecondTextWrapper>
          <S.SecondText>이제껏 경험하지 못했던 운동 코칭 경험</S.SecondText>
          <S.SecondText2>에서 경험해 보세요</S.SecondText2>
        </S.SecondTextWrapper>
        <Link
          to="link"
          spy={true}
          smooth={true}>
          <S.SecondButtonWrapper>
            경험하기
            <Icon
              icon="DownArrow"
              size={19}
            />
          </S.SecondButtonWrapper>
        </Link>
      </S.Second>
      <S.Third id="link">
        <S.SlideList>
          <S.Slide>
            <S.SlideLeft>
              <S.Title>
                추천을 위한
                <br />
                예리한 질문들
              </S.Title>
              <Button
                size="lg"
                onClick={handleRecommend}>
                추천 받기
              </Button>
            </S.SlideLeft>

            <S.SlideImg
              src={slide2}
              alt="슬라이드 이미지"
            />
          </S.Slide>

          <S.Slide>
            <S.SlideLeft>
              <S.Title>
                루틴도
                <br />한 번에 관리하세요
              </S.Title>
            </S.SlideLeft>

            <S.SlideImg
              src={slide}
              alt="슬라이드 이미지"
            />
          </S.Slide>
        </S.SlideList>
      </S.Third>
      <S.Fourth>
        <S.SearchWrapper>
          <S.SearchTop>
            <S.SearchTitle>핏메이트가 다 알려줄게요</S.SearchTitle>
            <S.SearchSubTitle>궁금한 운동을 검색해 보세요!</S.SearchSubTitle>
          </S.SearchTop>
          <S.SearchKeywordForm onSubmit={handleSubmit(handleSearch)}>
            <S.SearchInputWrapper>
              <Input>
                <Input.Input
                  props={{
                    ...formAdapter({
                      register,
                      validator: SEARCH_INPUTS["search"],
                      name: "search",
                    }),
                  }}
                />
              </Input>
              <IconButton
                icon="CloseRound"
                type="button"
                size={18}
                onClick={() => {
                  setValue("search", "")
                }}
              />
            </S.SearchInputWrapper>

            <S.SearchKeywordWrapper>
              <S.SearchKeywordTitle>인기 검색 키워드</S.SearchKeywordTitle>
              <S.SearchKeywordList>
                {[
                  "데드리프트",
                  "풀업",
                  "스쿼트",
                  "인클라인 덤벨 벤치프레스",
                ].map((item) => (
                  <Chip
                    key={item}
                    type="button"
                    onClick={() => handleKeyWord(item)}>
                    {item}
                  </Chip>
                ))}
              </S.SearchKeywordList>
            </S.SearchKeywordWrapper>
          </S.SearchKeywordForm>
        </S.SearchWrapper>
      </S.Fourth>
    </S.HomeContainer>
  )
}

export default Home
