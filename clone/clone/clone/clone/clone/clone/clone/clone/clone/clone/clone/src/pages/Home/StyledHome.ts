// < 홈 스타일 >
import { motion } from "framer-motion"

import styled from "styled-components"

import logo from "@assets/images/logo.png"

import theme, { fonts } from "@styles/theme"

export const FirstSubTitle = styled.span`
  color: ${theme.Netural900};
  ${fonts.h1};
  font-size: 3.2rem;
  @media only screen and (max-width: 72rem) {
    font-size: 2.2rem;
  }
`
export const FirstTitle = styled(FirstSubTitle)`
  font-size: 8.2rem;
  @media only screen and (max-width: 72rem) {
    font-size: 4.2rem;
  }
`

export const HomeBanner = styled.img`
  max-width: 76.6rem;
  width: 40%;
  @media only screen and (max-width: 102.4rem) {
    display: none;
  }
`

export const First = styled.li`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  min-height: 80rem;
  padding: 0rem 5rem;
  &::after {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100vw;
    height: 88.8rem;
    background: linear-gradient(185deg, #dce9f2 13.28%, #bbcbe4 77.52%);
  }
`
export const FirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  @media only screen and (max-width: 102.4rem) {
    align-items: center;
    width: 100%;
  }
`

export const SecondTextWrapper = styled.div``
export const Second = styled.li`
  min-height: 95rem;
  display: flex;
  flex-direction: column;
  gap: 20rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const SecondButtonWrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.8rem 1.8rem 0.8rem 1.8rem;
  color: ${theme.Brand600};
  ${fonts.h3};
  border-radius: 1.8rem;
  background: ${theme.Netural200};
  svg {
    height: 4rem;
  }
`
export const SecondText = styled.p`
  color: ${theme.Netural900};
  ${fonts.h2};
  font-weight: 500;
  @media only screen and (max-width: 72rem) {
    font-size: 1.7rem;
  }
  padding-bottom: 1.5rem;
`
export const SecondText2 = styled(SecondText)`
  font-size: 3.4rem;
  position: relative;
  font-weight: 600;
  padding-left: 14.5rem;
  &::before {
    content: "";
    background-image: url(${logo});
    background-size: 13.6rem 3.2rem;
    background-repeat: no-repeat;
    position: absolute;
    top: 0rem;
    left: 0rem;
    right: 0rem;
    bottom: 0rem;
  }
  @media only screen and (max-width: 72rem) {
    font-size: 2.2rem;
  }
`

export const Third = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  justify-content: center;
  width: 100vw;
  background: ${theme.Netural200};
  min-height: 95rem;
  padding: 5rem;
`
export const SlideList = styled.ul`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`

export const SlideTextWrapper = styled.div``

export const Title = styled.span`
  ${fonts.h1};
  font-size: 4.7rem;
  @media only screen and (max-width: 110rem) {
    font-size: 2.2rem;
  }
`

export const Slide = styled.li`
  padding: 5rem;
  max-width: 111.8rem;
  width: 100%;
  height: 60.2rem;
  display: flex;
  justify-content: space-between;
  border-radius: 3.2rem;
  border: 0.1rem solid var(--Gray-40, #b0b8c1);
  background: #f9fafc;
  @media only screen and (max-width: 110rem) {
    width: 80%;
  }
  @media only screen and (max-width: 72rem) {
    height: 30rem;
  }
`

export const SlideLeft = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const SlideImg = styled.img`
  object-fit: contain;
  top: 5.7rem;
  right: 0rem;
  max-width: 60rem;
  height: 53.7rem;
  @media only screen and (max-width: 110rem) {
    width: 80%;
  }
  @media only screen and (max-width: 72rem) {
    display: none;
  }
`

export const TabListWrapper = styled.div`
  position: relative;
  background-color: #e2e3eb;
  border-radius: 4.8rem;
  overflow: hidden;
  padding: 0.5rem;
`

export const TabList = styled.ul`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const TabButton = styled.button`
  z-index: 1;
  padding: 1rem 1.6rem;
  display: flex;
  align-items: center;

  gap: 0.8rem;
  ${fonts.b1};
  &.active {
    color: ${theme.Netural0};
  }
`

export const TabBackground = styled(motion.div)`
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  width: calc((100% / 2) - 0.5rem);
  height: calc(100% - 1rem);
  background-color: #191f28;
  border-radius: 4.2rem;
  display: flex;
  align-items: center;
`

export const Fourth = styled.li`
  width: 100%;
  height: 65.6rem;
`

export const HomeContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 192rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7.95rem;
  width: 100%;
  height: 100%;
  max-width: 62.7rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 4%;
`

export const SearchTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
`
export const SearchTitle = styled.span`
  color: ${theme.Brand700};
  ${fonts.h3};
  font-weight: 500;
`
export const SearchSubTitle = styled.span`
  color: ${theme.Netural990};
  font-size: 4.8rem;
  font-weight: 600;
  text-align: center;
`

export const SearchKeywordForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: flex-start;
`

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
  button {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
  }
`

export const SearchKeywordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;
  justify-content: space-between;
`

export const SearchKeywordTitle = styled.span`
  color: ${theme.Netural600};
  ${fonts.b4};
`

export const SearchKeywordList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  gap: 0.8rem;
  flex-wrap: wrap;
`
