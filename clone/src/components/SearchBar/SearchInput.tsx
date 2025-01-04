import { useState } from "react"

import { SearchInputContent } from "@components/SearchBar/StyledSearchBar"

interface SearchInputProps {
  isClicked: boolean
  setIsClicked: (flag: boolean) => void
  handleSearch: (value: string) => void
  name: string
}
export const SearchInput = ({
  isClicked,
  setIsClicked,
  handleSearch,
  name,
}: SearchInputProps) => {
  const [searchvalue, setSearchValue] = useState("")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(searchvalue)
    }
  }
  return (
    <>
      {name === "workout" && (
        <SearchInputContent
          name={name}
          value={searchvalue}
          onChange={handleChange}
          onKeyDown={handleEnter}
          placeholder={isClicked === true ? "" : "운동 이름를 검색해보세요"}
          onFocus={() => {
            setIsClicked(true)
          }}
          onBlur={() => {
            setIsClicked(false)
          }}
        />
      )}
    </>
  )
}
