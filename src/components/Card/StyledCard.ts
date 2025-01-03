import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const CardBox = styled.button`
  display: flex;
  flex-direction: column;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s linear;
    span {
      color: ${theme.Brand600};
    }
  }
`

export const CardItem = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  border-radius: 1.2rem;
  border: 0.1rem solid #f2f4f6;
  padding-bottom: 70%;
`

export const CardImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`
export const CardContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.8rem;
  width: 100%;
  padding: 2.4rem 0.8rem;
`

export const CardText = styled.span`
  color: ${theme.Netural990};
  ${fonts.h3};
`

export const BadgeList = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 0.4rem;
`
