// StyledRecommend.ts
import { motion } from "framer-motion"

import styled from "styled-components"

import theme from "@styles/theme"

export const RecommendWrapper = styled.div`
  max-width: 752px;
  margin: 0 auto;
  padding-top: 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`

export const RecommendInner = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 300px);
  gap: 116px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 29px;
    background: ${theme.Netural300};
  }
`

export const Status = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  gap: 17px;
  align-items: center;
`

export const RecommendGuide = styled(motion.div)<{ $isGuideSwitch?: boolean }>`
  gap: 16px;
  display: flex;
  opacity: ${({ $isGuideSwitch }) => ($isGuideSwitch ? 0 : 1)};
  transition: opacity 0.5s ease-in-out;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const RecommendSwitchGuide = styled(motion.div)<{
  $isGuideSwitch: boolean
}>`
  position: absolute;
  top: 85px;
  gap: 16px;
  display: flex;
  opacity: ${({ $isGuideSwitch }) => ($isGuideSwitch ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  align-items: center;
  z-index: 10;
`

export const RecommendMachineWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  height: 502px;
`
