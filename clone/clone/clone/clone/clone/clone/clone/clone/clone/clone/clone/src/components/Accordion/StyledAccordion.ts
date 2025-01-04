import { motion } from "framer-motion"

import styled from "styled-components"

import theme, { fonts } from "@styles/theme"

export const AccordionWrapper = styled.div<{ $visible: boolean }>`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2.4rem 2.2rem 0rem 2.2rem;

  align-items: center;
  border-radius: 2rem 2rem 1.6rem 1.6rem;
  box-shadow: 0rem 0.4rem 0.81rem 0rem rgba(0, 0, 0, 0.03);
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

  padding-bottom: 1.8rem;
  background: var(--Grayscale-Neutral0, #fff);
`
export const HeaderLeft = styled.div``
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const HeaderRightInfo = styled.span`
  color: ${theme.Netural900};
  ${fonts.d1}
`

export const VideoWrapper = styled(motion.div)`
  padding-top: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const Video = styled(motion.div)`
  border-radius: 1.2rem;
  overflow: hidden;
  width: 100%;
  height: 37.8rem;
`

export const VideoTitle = styled.span`
  color: ${theme.Netural900};
  ${fonts.b3};
`

export const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-bottom: 2.4rem;
  width: 100%;
  gap: 2.4rem;
`

export const ContentText = styled(motion.span)`
  color: ${theme.Netural800};
  ${fonts.b4};
  line-height: 165%;
  letter-spacing: -0.02rem;
`
export const ContentAI = styled(motion.span)`
  display: flex;
  padding: 1.4rem 1.6rem;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  border: 0.1rem solid #5083ff;
  background: linear-gradient(91deg, #eef7ff 8.33%, #f6f3ff 97.03%);
`

export const ContentAIleft = styled(motion.span)`
  color: ${theme.Purple};
  ${fonts.b5};
  display: flex;
  align-items: center;
  gap: 0.8rem;
  svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`

export const ContentAIright = styled.div`
  display: flex;
  height: 2.4rem;
  align-items: center;
  gap: 1.4rem;
`

export const ContentAIrightItem = styled.div`
  color: ${theme.Purple};
  ${fonts.b2};
`

export const HeaderTrigger = styled.button`
  position: relative;
  display: flex;
  padding: 1.4rem 0rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  background: ${theme.Netural0};
  color: ${theme.Netural700};

  ${fonts.d1}
`
export const TopLine = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 0.1rem;
  transform: translateX(-50%);
  background-color: ${theme.Netural200};
  left: 50%;
`

export const AnimationWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`

export const ContentCaution = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`

export const ContentCautionTitle = styled.span`
  color: ${theme.Caution};
  ${fonts.b7};
`

export const ContentCautionText = styled(ContentCautionTitle)`
  color: ${theme.Netural900};
`
