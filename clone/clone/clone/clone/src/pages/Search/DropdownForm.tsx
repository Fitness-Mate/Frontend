import { FormProvider, UseFormReturn } from "react-hook-form"

import Chip from "@components/Chip/Chip"
import IconButton from "@components/IconButton/IconButton"
import SearchField from "@components/SearchField/SearchField"

import { SearchTypes } from "@typpes/type"

import { animation } from "@styles/theme"

import * as S from "./StyledSearch"

interface DropdownFormProps {
  methods: UseFormReturn<SearchTypes>
  handleSearch: ({ search }: SearchTypes) => void
  handleToggle: () => void
}

const DropdownForm = ({
  methods,
  handleSearch,
  handleToggle,
}: DropdownFormProps) => {
  const handleClickKeyword = (keyword: string) => {
    methods.setValue("search", keyword)
    triggerSubmit()
  }

  const triggerSubmit = () => {
    methods.handleSubmit(handleSearch)()
  }

  return (
    <S.DropdownFormWrapper
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "42.8rem" }}
      exit={{ opacity: 0, height: 0 }}
      transition={animation.basic}
      onSubmit={methods.handleSubmit(handleSearch)}>
      <S.DropDownBox>
        <IconButton
          icon="CloseBold"
          size={22}
          className="close"
          onClick={handleToggle}
        />
        <S.DropDownSubText>전체 부위에서 검색..</S.DropDownSubText>
        <FormProvider {...methods}>
          <SearchField
            triggerSubmit={triggerSubmit}
            name="search"
            placeholder="어떤 운동이 좋을까요?"
            width="100%"
          />
        </FormProvider>
        <S.DropDownKeywordWrapper>
          <S.DropDownKeywordTitle>추천 검색 키워드</S.DropDownKeywordTitle>
          <S.DropDownKeywordList>
            {["데드 리프트", "풀업", "스쿼트", "인클라인 덤벨 프레스"].map(
              (word) => (
                <Chip
                  key={word}
                  onClick={() => handleClickKeyword(word)}>
                  {word}
                </Chip>
              ),
            )}
          </S.DropDownKeywordList>
        </S.DropDownKeywordWrapper>
      </S.DropDownBox>
    </S.DropdownFormWrapper>
  )
}

export default DropdownForm
