import styled from "styled-components"

import { RecommendWrapper } from "@pages/Recommend/StyledRecommend"

import { fonts } from "@styles/theme"

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.4rem;
`

export const ResultList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.2rem;
  padding-bottom: 5rem;
`

export const ResultWrapper = styled(RecommendWrapper)`
  padding-top: 5.7rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const TitleEmphasize = styled.span`
  ${fonts.h1};
  font-weight: 700;
  &::after {
    content: "을 추천했어요.";
    font-weight: 600;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`
