import styled from "styled-components"

import { RecommendWrapper } from "@pages/Recommend/StyledRecommend"

import { fonts } from "@styles/theme"

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
`

export const ResultList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  padding-bottom: 50px;
`

export const ResultWrapper = styled(RecommendWrapper)`
  padding-top: 57px;
  display: flex;
  flex-direction: column;
  gap: 32px;
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
  gap: 5px;
`