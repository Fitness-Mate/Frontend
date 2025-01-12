import { AnimatePresence } from "framer-motion"

import { useAccordion } from "@components/common/Accordion/Accordion"
import {
  AnimationWrapper,
  ContentAI,
  ContentAIleft,
  ContentAIright,
  ContentAIrightItem,
  ContentCaution,
  ContentCautionLabel,
  ContentCautionText,
  ContentText,
  ContentWrapper,
  Video,
  VideoTitle,
  VideoWrapper,
} from "@components/common/Accordion/StyledAccordion"
import Icon from "@components/common/Icon/Icon"

interface ContentProps {
  videoId: string
  recommend: string[]
  description: string
  caution: string
}

const Content = ({
  description,
  caution,
  recommend,
  videoId,
}: ContentProps) => {
  const { visible } = useAccordion()

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <ContentWrapper
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}>
          <AnimationWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", duration: 0, bounce: 0 }}>
            <ContentText>{description}</ContentText>
            <ContentCaution>
              <ContentCautionLabel>가이드</ContentCautionLabel>
              <ContentCautionText>{caution}</ContentCautionText>
            </ContentCaution>
            <ContentAI>
              <ContentAIleft>
                <Icon
                  icon="Star"
                  size={32}
                />
                AI 추천 운동량
              </ContentAIleft>
              <ContentAIright>
                {recommend.map((item) => (
                  <ContentAIrightItem key={item}>{item}</ContentAIrightItem>
                ))}
              </ContentAIright>
            </ContentAI>
            <VideoWrapper>
              <VideoTitle>운동 영상</VideoTitle>
              <Video>
                <iframe
                  title={videoId}
                  style={{ width: "100%", height: "100%" }}
                  src={`https://www.youtube.com/embed/${videoId}`}
                />
              </Video>
            </VideoWrapper>
          </AnimationWrapper>
        </ContentWrapper>
      )}
    </AnimatePresence>
  )
}

export default Content
