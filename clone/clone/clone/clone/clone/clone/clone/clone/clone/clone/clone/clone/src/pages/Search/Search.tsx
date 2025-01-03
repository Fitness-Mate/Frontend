import { useState } from "react"
import { useForm } from "react-hook-form"

import { useTabs } from "@components/Tabs/TabsContext"

import Pagination from "@pages/Search/Pagination"

import { SearchTypes } from "@typpes/type"

import { useGetBodyPart } from "@hooks/query/useGetBodyPart"

import * as S from "./StyledSearch"
import TabList from "./TabList"

const Search = () => {
  const methods = useForm<SearchTypes>()

  const { bodyParts = [] } = useGetBodyPart()

  const [isSearchMode, setIsSearchMode] = useState(false)
  const [keyword, setKeyword] = useState("")
  const { switchTab } = useTabs()
  const [currentPage, setCurrentPage] = useState(1)

  const handleToggle = () => {
    setIsSearchMode(!isSearchMode)
    methods.setFocus("search")
    setKeyword("")
  }

  const handleSearch = ({ search }: SearchTypes) => {
    setKeyword(search)
    setCurrentPage(1)
    switchTab(0)
  }

  const handlePage = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <S.SearchWrapper id="top">
      {isSearchMode && <S.BackOverlay />}
      <S.TitleWrapper>
        <S.Title>나에게 핏한</S.Title>
        <S.SubTitle>운동을 검색해보세요</S.SubTitle>
      </S.TitleWrapper>

      <S.SearchContent>
        <TabList
          bodyParts={bodyParts}
          currentPage={currentPage}
          keyword={keyword}
          isSearchMode={isSearchMode}
          handleToggle={handleToggle}
          handleSearch={handleSearch}
          methods={methods}
        />

        <Pagination
          currentPage={currentPage}
          handlePage={handlePage}
          isShow={isSearchMode && keyword !== ""}
        />
      </S.SearchContent>
    </S.SearchWrapper>
  )
}

export default Search
