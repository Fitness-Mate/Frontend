import { motion } from "framer-motion"

import styled, { css } from "styled-components"

export const RecommendWrapper = styled.div`
  max-width: 83.6rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.8rem 2% 1.8rem 2%;
`

export const Status = styled.div<{ $isScrollTop: boolean }>`
  position: relative;
  width: 100%;
  display: flex;
  gap: 1.7rem;
  align-items: center;
  &::after {
    ${({ $isScrollTop }) =>
      !$isScrollTop &&
      css`
        position: absolute;
        bottom: -3.5rem;
        content: "";
        width: 100%;
        height: 3.6rem;
        z-index: 5;
        background: linear-gradient(
          180deg,
          #fbfcfc 30.5%,
          rgba(251, 252, 252, 0) 100%
        );
      `}
  }
`

export const RecommendGuideWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 40rem;
`

export const RecommendGuide = styled(motion.div)`
  gap: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
`
