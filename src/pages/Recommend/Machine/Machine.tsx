import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BeatLoader } from "react-spinners"

import { useRecommendStore } from "@store/store"
import { useAnimationFrame, useMotionValue, useTransform } from "framer-motion"

import Avatar from "@components/Avatar/Avatar"
import Bottom from "@components/Bottom/Bottom"
import RoundButton from "@components/Button/RoundButton"
import ImgCheckBox from "@components/CheckBox/ImgCheckBox"
import IconButton from "@components/IconButton/IconButton"
import ProgressBar from "@components/Progressbar/ProgressBar"
import SpeechBubble from "@components/SpeechBubble/SpeechBubble"

import { BackOverlay } from "@pages/Search/StyledSearch"

import { usePostRecommend } from "@hooks/mutation/usePostRecommend"
import { usePostRecommendId } from "@hooks/mutation/usePostRecommendId"
import { useGetMachineList } from "@hooks/query/useGetMachineList"
import { useScroll } from "@hooks/useScroll"

import { animation } from "@styles/theme"

import * as S from "../StyledRecommend"

const Machine = () => {
  const { data: machines = [] } = useGetMachineList()
  const { bodyPart } = useRecommendStore()
  const postRecommendId = usePostRecommendId()
  const postRecommend = usePostRecommend()
  const scrollRef = useRef<HTMLDivElement>(null)
  const { isScrollTop } = useScroll(scrollRef)

  const time = useMotionValue(0)
  const rotate = useTransform(time, [0, 6000], [0, 360], { clamp: false })
  const scale = useTransform(time, [0, 3000, 6000], [1, 1.2, 1], {
    clamp: true,
  })

  useAnimationFrame(() => {
    if (time.get() >= 6000) {
      time.set(0)
    } else {
      time.set(time.get() + 16)
    }
  })

  const { setResult } = useRecommendStore()

  const [machinesById, setMachinesById] = useState(new Set<number>())
  const numChecked = machinesById.size
  const navigate = useNavigate()

  const handleBackPage = () => {
    navigate(-1)
  }

  const updateSet = (set: Set<number>, id: number) => {
    const updatedSet = new Set(set)

    if (updatedSet.has(id)) {
      updatedSet.delete(id)
    } else {
      updatedSet.add(id)
    }

    return updatedSet
  }

  const handleBodyPart = (id: number) => {
    setMachinesById((prevSet) => updateSet(prevSet, id))
  }

  const handleRecommend = () => {
    if (postRecommend.isPending) {
      return
    }
    const payload = {
      bodyPartKoreanName: bodyPart,
      machineKoreanName: [...machinesById].map((id) => machines[id].koreanName),
    }

    postRecommendId(payload, {
      onSuccess: (workoutRecommendationId) => {
        postRecommend.mutate(workoutRecommendationId, {
          onSuccess: (result) => {
            setResult(result)
            navigate("/recommend/result")
          },
        })
      },
    })
  }

  useEffect(() => {
    if (postRecommend.isPending) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [postRecommend.isPending])

  return (
    <>
      {postRecommend.isPending && (
        <>
          <BackOverlay />
          <S.LayerWrapper>
            <S.CoverWrapper
              initial={{ x: "-50%", y: "-50%", opacity: 0, scale: 0.8 }}
              animate={{
                x: "-50%",
                y: "-50%",
                opacity: 1,
                scale: 1,
              }}
              transition={animation.slow}
              style={{ rotate, scale }}
            />
            <S.LoadingText
              initial={{ x: "-50%", y: "-50%", opacity: 0, scale: 0.8 }}
              animate={{
                x: "-50%",
                y: "-50%",
                opacity: 1,
                scale: 1,
              }}
              transition={animation.slow}>
              추천을 위한
              <br /> 분석을 시작했어요
            </S.LoadingText>
          </S.LayerWrapper>
        </>
      )}

      <S.RecommendWrapper>
        <S.Status>
          <IconButton
            icon="LeftArrowBold"
            size={30}
            onClick={handleBackPage}
          />
          <ProgressBar
            progress={2}
            variant="round"
          />
        </S.Status>
        <S.RecommendInner ref={scrollRef}>
          <S.RecommendGuideWrapper>
            <S.RecommendGuide
              initial={{ transform: "translate(-50%, -50%)" }}
              animate={
                isScrollTop
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: 0, scale: 0.8, y: -20 }
              }
              transition={{ ...animation.quick }}>
              <Avatar />
              <SpeechBubble>
                <SpeechBubble.MainText>
                  사용 가능한 기구를 선택해주세요!
                </SpeechBubble.MainText>
              </SpeechBubble>
            </S.RecommendGuide>
          </S.RecommendGuideWrapper>

          <S.RecommendMachineWrapper
            animate={isScrollTop ? { y: "0px" } : { y: "-450px" }}
            transition={{ ...animation.small }}>
            {machines?.map(({ englishName, koreanName, id, imgPath }) => (
              <ImgCheckBox
                key={englishName}
                src={imgPath}
                alt="테스트 이미지를 설명"
                isSelected={machinesById.has(id)}
                handleToggle={() => handleBodyPart(id)}
                variant="big">
                {koreanName}
              </ImgCheckBox>
            ))}
          </S.RecommendMachineWrapper>
        </S.RecommendInner>

        <Bottom flex="space-between">
          <Bottom.Text>
            {numChecked}개<Bottom.SubText> 기구 선택됨</Bottom.SubText>
          </Bottom.Text>
          <RoundButton
            onClick={handleRecommend}
            variant="blue"
            rightIcon="RightArrowWhite"
            size="big"
            isPending={postRecommend.isPending}
            disabled={!numChecked}>
            {postRecommend.isPending ? (
              <BeatLoader
                size="7"
                color="#DDEAF4"
                margin={6}
              />
            ) : (
              "추천 시작하기"
            )}
          </RoundButton>
        </Bottom>
      </S.RecommendWrapper>
    </>
  )
}

export default Machine
