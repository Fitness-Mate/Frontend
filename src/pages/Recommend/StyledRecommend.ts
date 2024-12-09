import { motion } from "framer-motion"

import styled, { css } from "styled-components"

import theme, { fonts } from "@styles/theme"

export const LayerWrapper = styled(motion.div)`
  width: 452px;
  height: 438px;
  background-image: url("/blurlayer.svg");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 202;
  transform: translate(-50%, -50%);
`

export const CoverWrapper = styled(motion.div)`
  width: 452px;
  height: 438px;
  background-image: url("/loadinglayer.png");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 50%;
  left: 50%;
`
export const RecommendWrapper = styled.div`
  max-width: 752px;
  margin: 0 auto;
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LoadingText = styled(motion.span)`
  position: absolute;
  top: 50%;
  left: 50%;
  ${fonts.h2};
  text-align: center;
`

export const Status = styled.div<{ $isScrollTop: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  gap: 17px;
  align-items: center;
  &::after {
    ${({ $isScrollTop }) =>
      !$isScrollTop &&
      css`
        position: absolute;
        bottom: -35px;
        content: "";
        width: 100%;
        height: 36px;
        z-index: 5;
        background: linear-gradient(
          180deg,
          #fbfcfc 30.5%,
          rgba(251, 252, 252, 0) 100%
        );
      `}
  }
`

export const RecommendInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  position: relative;
  height: calc(-205px + 100vh);
`

export const RecommendGuideWrapper = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
  height: 400px;
`

export const RecommendGuide = styled(motion.div)`
  gap: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
`

export const RecommendSwitchGuide = styled.div`
  position: absolute;
  top: 85px;
  gap: 16px;
  display: flex;
  align-items: center;
  z-index: 10;
`

export const RecommendMachineWrapper = styled(motion.ul)`
  position: absolute;
  max-width: 752px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`

export const RecommendUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 272px;
`

export const UserName = styled.span`
  color: ${theme.Netural950};
  ${fonts.h4};
  &::after {
    content: " 님";
    color: ${theme.Netural600};
  }
`

export const UserInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-bottom: 12px;
`

export const UserInfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const UserInfoName = styled.span`
  color: ${theme.Netural600};
  ${fonts.b6}
`

export const UserInfoValue = styled(UserInfoName)`
  color: ${theme.Netural900};
`

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
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

export const ResultList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  padding-bottom: 50px;
`

export const BodyPartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`

export const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
`

export const TabTitle = styled.div`
  color: ${theme.Netural800};
  ${fonts.b3};
`

export const TabList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`
