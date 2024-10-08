import { useRef, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"

import { AnimatePresence } from "framer-motion"

import Card from "@components/Card/Card"
import Chip from "@components/Chip/Chip"
import Icon from "@components/Icon/Icon"
import IconButton from "@components/IconButton/IconButton"
import SearchField from "@components/SearchField/SearchField"
import Tabs from "@components/Tabs/Tabs"

import { SearchTypes } from "@typpes/type"

import { useGetBodyPart } from "@hooks/query/useGetBodyPart"
import { useGetWorkoutBatch } from "@hooks/query/useGetWorkoutBatch"
import { useScroll } from "@hooks/useScroll"

import { animation } from "@styles/theme"

import * as S from "./StyledSearch"

const totalPageLength = 4

const Search = () => {
  const navigate = useNavigate()
  const methods = useForm<SearchTypes>({
    defaultValues: {
      search: "",
    },
  })

  const [isSearchMode, setIsSearchMode] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [keyword, setKeyword] = useState("")

  const targetRef = useRef<HTMLDivElement>(null)
  const { pageId } = useParams()

  const { bodyParts = [] } = useGetBodyPart()
  const { position } = useScroll()

  const targetHeight = targetRef.current
    ? targetRef.current?.getBoundingClientRect().top -
      targetRef.current?.clientHeight
    : -1

  const isTabFixed = position > targetHeight

  const handleTabChange = (index: number) => {
    if (!bodyParts) {
      return
    }
    setActiveTab(index)
    navigate(`/searchworkout/1`)
  }

  const handleSearch = ({ search }: SearchTypes) => {
    setKeyword(search)
  }

  const { workouts = [] } = useGetWorkoutBatch({
    page: Number(pageId),
    searchKeyword: isSearchMode ? keyword : "",
    bodyPartKoreanName:
      activeTab === 0 ? [] : [bodyParts[activeTab].koreanName],
  })

  const pageNum =
    activeTab === 0 ? totalPageLength : Math.ceil(workouts?.length / 12)

  const handleCard = (workoutId: number) => {
    navigate(`/workoutdetail/${workoutId}`)
  }

  const handlePagination = (pageId: number) => {
    navigate(`/searchworkout/${pageId}`)
  }

  const handleToggle = () => {
    setIsSearchMode(!isSearchMode)
    methods.setFocus("search")
    setKeyword("")
  }

  const triggerSubmit = () => {
    methods.handleSubmit(handleSearch)()
  }

  const handleNextPage = () => {
    navigate(`/searchworkout/${Number(pageId) + 1}`)
  }

  const handlePreviousPage = () => {
    navigate(`/searchworkout/${Number(pageId) - 1}`)
  }

  const handleClickKeyword = (keyword: string) => {
    methods.setValue("search", keyword)
  }

  return (
    <S.SearchWrapper>
      {isSearchMode && <S.BackOverlay />}
      <S.TitleWrapper>
        <S.Title>나에게 핏한</S.Title>
        <S.SubTitle>운동과 보조제를 검색해보세요</S.SubTitle>
      </S.TitleWrapper>
      <S.SearchContent>
        <S.TabsWrapper
          $isTabFixed={isTabFixed}
          ref={targetRef}>
          <S.TabsBox>
            <Tabs>
              <Tabs.TabList>
                {bodyParts?.map(({ koreanName, bodyPartId }) => (
                  <Tabs.Tab
                    index={bodyPartId}
                    variant="fill"
                    key={bodyPartId}
                    onTabChange={handleTabChange}>
                    {koreanName}
                  </Tabs.Tab>
                ))}
              </Tabs.TabList>
            </Tabs>
            <S.SearchToggle onClick={handleToggle}>
              <Icon icon="Search" />
              운동 이름으로 검색
            </S.SearchToggle>
          </S.TabsBox>
        </S.TabsWrapper>
        <AnimatePresence>
          {isSearchMode && (
            <S.DropDownForm
              layout
              initial={{ opacity: 0, y: 0, height: 0 }} // 초기 상태: 투명하고 위쪽에 위치하며, 높이는 0
              animate={{ opacity: 1, y: 0, height: "428px" }} // 애니메이션: 불투명하고 제자리로 내려오며, 높이는 auto
              exit={{ opacity: 0, y: "100px", height: 0 }} // 사라질 때: 높이가 위에서 아래로 줄어듦
              transition={animation.small}
              onSubmit={methods.handleSubmit(handleSearch)}>
              <S.DropDownBox>
                <IconButton
                  icon="CloseBold"
                  className="close"
                  onClick={handleToggle}
                />
                <FormProvider {...methods}>
                  <SearchField
                    triggerSubmit={triggerSubmit}
                    name="search"
                    placeholder="어떤 운동이 좋 을까요?"
                    width="100%"
                  />
                </FormProvider>
                <S.DropDownKeywordWrapper>
                  <S.DropDownKeywordTitle>
                    추천 검색 키워드
                  </S.DropDownKeywordTitle>
                  <S.DropDownKeywordList>
                    {[
                      "데드 리프트",
                      "풀업",
                      "스쿼트",
                      "인클라인 덤벨 프레스",
                    ].map((keyword) => (
                      <Chip
                        key={keyword}
                        onClick={() => handleClickKeyword(keyword)}>
                        {keyword}
                      </Chip>
                    ))}
                  </S.DropDownKeywordList>
                </S.DropDownKeywordWrapper>
              </S.DropDownBox>
            </S.DropDownForm>
          )}
        </AnimatePresence>
        <S.CardWrapper>
          <S.CardList>
            {workouts?.map(
              ({ id, imgPath, koreanName, bodyPartKoreanName }) => (
                <Card
                  key={id}
                  src={imgPath}
                  title={koreanName}
                  badges={bodyPartKoreanName}
                  onClick={() => handleCard(id)}></Card>
              ),
            )}
          </S.CardList>
        </S.CardWrapper>
        <S.PaginationWrapper>
          <IconButton
            icon="LeftArrowBig"
            onClick={handlePreviousPage}
            disabled={Number(pageId) === 1}
          />
          <S.PaginationList>
            {Array.from({ length: pageNum }, (_, i: number) => i + 1).map(
              (item) => (
                <S.PaginationButton
                  key={item}
                  $isSelected={Number(pageId) === item}
                  onClick={() => handlePagination(item)}>
                  {item}
                </S.PaginationButton>
              ),
            )}
          </S.PaginationList>
          <IconButton
            icon="RightArrowBig"
            onClick={handleNextPage}
            disabled={Number(pageId) === pageNum}
          />
        </S.PaginationWrapper>
      </S.SearchContent>
    </S.SearchWrapper>
  )
}

export default Search
