import { Suspense } from "react"
import { UseFormReturn } from "react-hook-form"

import { AnimatePresence } from "framer-motion"

import CardSkeleton from "@components/common/Card/CardSkeleton"
import Icon from "@components/common/Icon/Icon"
import Tabs from "@components/common/Tabs/Tabs"

import CardList from "@pages/Search/CardList"
import Deferred from "@pages/Search/Deferred"
import DropdownForm from "@pages/Search/DropdownForm"

import { BodyPartList } from "@typpes/type"
import { SearchTypes } from "@typpes/type"

import * as S from "./StyledSearch"

interface TabListProps {
  bodyParts: BodyPartList[]
  currentPage: number
  isSearchMode: boolean
  keyword: string
  handleToggle: () => void
  methods: UseFormReturn<SearchTypes>

  handleSearch: ({ search }: { search: string }) => void
}

const TabList = ({
  bodyParts,
  currentPage,
  isSearchMode,
  keyword,
  handleToggle,
  handleSearch,
  methods,
}: TabListProps) => {
  return (
    <Tabs>
      <Tabs.TabList>
        <S.NavTab>
          <S.NavTabInner>
            <S.NavTabList>
              {bodyParts?.map(({ koreanName, bodyPartId }) => (
                <Tabs.Tab
                  key={bodyPartId}
                  index={bodyPartId}
                  variant="fill">
                  {koreanName}
                </Tabs.Tab>
              ))}
            </S.NavTabList>
            <S.SearchToggle onClick={handleToggle}>
              <Icon
                icon="Search"
                size={22}
              />
              운동 이름으로 검색
            </S.SearchToggle>
          </S.NavTabInner>
        </S.NavTab>
      </Tabs.TabList>
      <AnimatePresence>
        {isSearchMode && (
          <DropdownForm
            methods={methods}
            handleSearch={handleSearch}
            handleToggle={handleToggle}
          />
        )}
      </AnimatePresence>
      <Tabs.TabPanels>
        {bodyParts?.map(({ koreanName, bodyPartId }) => (
          <Tabs.TabPanel
            index={bodyPartId}
            key={bodyPartId}>
            <Suspense
              fallback={
                <Deferred>
                  <CardSkeleton />
                </Deferred>
              }>
              <CardList
                currentPage={currentPage}
                keyword={keyword}
                koreanName={koreanName}
                isSearchMode={isSearchMode}
              />
            </Suspense>
          </Tabs.TabPanel>
        ))}
      </Tabs.TabPanels>
    </Tabs>
  )
}

export default TabList
