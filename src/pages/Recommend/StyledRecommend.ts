import { motion } from "framer-motion"

import styled from "styled-components"

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
  z-index: 49;
  transform: translate(-50%, -50%);
`

export const CoverWrapper = styled(motion.div)`
  width: 452px;
  height: 438px;
  background-image: url("/loadinglayer.svg");
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 50;
`

export const RecommendWrapper = styled.div`
  max-width: 752px;
  margin: 0 auto;
  padding-top: 18px;
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;
`

export const ResultWrapper = styled(RecommendWrapper)`
  padding-top: 57px;
`

export const LoadingText = styled(motion.span)`
  position: absolute;
  top: 50%;
  left: 50%;
  ${fonts.h3};
  text-align: center;
  z-index: 100;
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
  height: calc(-250px + 100vh);
`

export const Status = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 17px;
  align-items: center;
`

export const RecommendGuideWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  min-height: 366px;
`

export const RecommendGuide = styled(motion.div)`
  gap: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  max-width: 752px;
  max-height: 100%;
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
  padding-bottom: 100px;
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
