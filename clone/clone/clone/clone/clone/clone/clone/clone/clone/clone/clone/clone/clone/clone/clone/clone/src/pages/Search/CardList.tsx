import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import Card from "@components/Card/Card"
import { useTabs } from "@components/Tabs/TabsContext"

import { usePageNumStore } from "@pages/Search/store/usePageNumStore"

import { useGetWorkoutBatch } from "@hooks/query/useGetWorkoutBatch"

import * as S from "./StyledSearch"

interface CardListProps {
  currentPage: number
  isSearchMode: boolean
  keyword: string
  koreanName: string
}

const CardList = ({
  currentPage,
  isSearchMode,
  keyword,
  koreanName,
}: CardListProps) => {
  const navigate = useNavigate()
  const { activeTab } = useTabs()

  const { workouts, pageNum, cardLength } = useGetWorkoutBatch({
    page: currentPage,
    searchKeyword: isSearchMode ? keyword : "",
    bodyPartKoreanName: activeTab === 0 ? [] : [koreanName],
  })

  const handleCard = (workoutId: number) => {
    navigate(`/workoutdetail/${workoutId}`)
  }

  const { setPageNum } = usePageNumStore()

  useEffect(() => {
    setPageNum(pageNum)
  }, [activeTab, currentPage, keyword, pageNum, setPageNum])

  const isShow = isSearchMode && keyword !== ""

  return (
    <S.CardWrapper $isShow={isShow}>
      {isShow ? (
        <S.CardSearchTitle>
          '{keyword}'이 포함된 검색 결과 {cardLength}개를 찾았어요.
        </S.CardSearchTitle>
      ) : (
        <S.CardTitle>
          전체 <S.CarSubTitle>({cardLength})</S.CarSubTitle>
        </S.CardTitle>
      )}
      <S.CardList>
        {workouts?.map(({ id, imgPath, koreanName, bodyPartKoreanName }) => (
          <Card
            key={id}
            src={imgPath}
            title={koreanName}
            badges={bodyPartKoreanName}
            onClick={() => handleCard(id)}
          />
        ))}
      </S.CardList>
    </S.CardWrapper>
  )
}

export default CardList
