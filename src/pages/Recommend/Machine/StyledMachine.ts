import { motion } from "framer-motion"

import styled from "styled-components"

import { fonts } from "@styles/theme"

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

export const LoadingText = styled(motion.span)`
  position: absolute;
  top: 50%;
  left: 50%;
  ${fonts.h2};
  text-align: center;
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

export const RecommendMachineWrapper = styled(motion.ul)`
  position: absolute;
  max-width: 752px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`
