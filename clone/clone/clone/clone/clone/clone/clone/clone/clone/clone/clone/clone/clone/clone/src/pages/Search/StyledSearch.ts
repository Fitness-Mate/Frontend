import { motion } from "framer-motion"

import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const SearchWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 8.2rem;
  padding: 6.2rem 3% 5.2rem 3%;
  max-width: 114.2rem;
`

export const SearchContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const NavTab = styled.div`
  width: 100vw;
  z-index: 200;
  position: sticky;
  top: 6.3rem;
  padding: 0.6rem 3%;
  background: ${theme.Netural0};
`
export const NavTabInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  max-width: 111rem;
  margin: 0 auto;
  padding: 0 2%;
`
export const NavTabList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  align-items: flex-start;
`
export const Title = styled.span`
  color: ${theme.Netural600};
  ${fonts.h3};
`
export const SubTitle = styled.span`
  color: ${theme.Netural990};
  ${fonts.h1};
  font-size: 3rem;
`

export const SearchToggle = styled.button`
  border-radius: 3.7rem;
  display: flex;
  align-items: center;
  padding: 1.2rem 2rem 1.2rem 1.8rem;
  gap: 0.6rem;
  color: ${theme.Netural550};
  background: ${theme.Netural200};
  ${fonts.b7};
`

export const DropdownFormWrapper = styled(motion.form)`
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 105;
  overflow: hidden;
  position: relative;
  max-width: 103.2rem;
  z-index: 210;
  .close {
    position: absolute;
    top: 7.5rem;
    right: 2.5rem;
  }
`

export const DropDownKeywordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const DropDownBox = styled.div`
  max-width: 62.7rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  justify-content: space-between;
`

export const DropDownKeywordTitle = styled.span`
  ${fonts.b4};
  color: ${theme.Brand600};
  padding-left: 0.6rem;
`

export const DropDownKeywordList = styled.ul`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: flex-start;
`

export const CardWrapper = styled.div<{ $isShow: boolean }>`
  width: 100%;
  max-width: 111rem;
  gap: 1.8rem;
  display: flex;
  flex-direction: column;
  margin-top: 5.2rem;
  padding: 0.4rem 0.9rem 9.2rem 0.9rem;
  z-index: ${({ $isShow }) => ($isShow ? 300 : 0)};
`

export const CardList = styled.ul`
  display: grid;
  gap: 2.4rem 4.8rem;
  grid-template-columns: repeat(auto-fill, minmax(29%, auto));
`

export const PaginationWrapper = styled.div<{ $isShow: boolean }>`
  display: flex;
  gap: 1.8rem;
  align-items: center;
  z-index: ${({ $isShow }) => ($isShow ? 300 : 0)};
`
export const PaginationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`

export const CardTitle = styled.span`
  color: ${theme.Netural900};
  ${fonts.h3};
`

export const CarSubTitle = styled(CardTitle)`
  font-weight: 400;
`

export const CardSearchTitle = styled.span`
  color: ${theme.Netural800};
  ${fonts.h1};
  font-size: 2.8rem;
`

export const PaginationButton = styled.button<{ $isSelected?: boolean }>`
  padding: 0.6rem;
  color: ${({ $isSelected }) =>
    $isSelected ? theme.Netural0 : theme.Netural800};
  ${fonts.b6};
  border-radius: 1.6rem;
  background: ${({ $isSelected }) =>
    $isSelected ? theme.Netural900 : theme.Netural0};
  width: 3rem;
  height: 3rem;
`

export const BackOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${theme.Netural0};
  opacity: 0.6;
  z-index: 201;
`

export const DropDownSubText = styled.span`
  color: ${theme.Netural900};
  ${fonts.b4};
  padding-left: 0.8rem;
  margin-bottom: -2.1rem;
`
