import { motion } from "framer-motion"

import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const AccordianWrapper = styled.div<{ $visible: boolean }>`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px 22px 0px 22px;

  align-items: center;
  border-radius: 20px 20px 16px 16px;
  box-shadow: 0px 4px 8.1px 0px rgba(0, 0, 0, 0.03);
  background: var(--Grayscale-Neutral0, #fff);
`

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`
export const HeaderTop = styled.div<{ $visible: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 18px;
  background: var(--Grayscale-Neutral0, #fff);
`
export const HeaderLeft = styled.div``
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
export const HeaderRightInfo = styled.span`
  color: ${theme.Netural900};
  ${fonts.d1}
`

export const VideoWrapper = styled(motion.div)`
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  height: 378px;
`

export const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const ContentText = styled(motion.span)`
  color: ${theme.Netural800};
  ${fonts.b4};
  line-height: 165%;
  letter-spacing: -0.16px;
`
export const ContentAI = styled(motion.span)`
  display: flex;
  padding: 14px 16px;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 2px solid #0b98ff;
  background: #eef7ff;
`

export const ContentAIleft = styled(motion.span)`
  color: ${theme.Brand600};
  ${fonts.b6};
  display: flex;
  align-items: center;
  gap: 8px;
  svg {
    width: 24px;
    height: 24px;
  }
`

export const ContentAIright = styled.div`
  display: flex;
  height: 24px;
  align-items: center;
  gap: 14px;
`

export const ContentAIrightItem = styled.div`
  color: ${theme.Brand600};
  ${fonts.h4};
`

export const HeaderTrigger = styled.button`
  position: relative;
  display: flex;
  padding: 14px 0px;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: ${theme.Netural0};
  color: ${theme.Netural700};

  ${fonts.d1}
`
export const TopLine = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 1px;
  transform: translateX(-50%);
  background-color: ${theme.Netural200};
  left: 50%;
`

export const AnimationWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
