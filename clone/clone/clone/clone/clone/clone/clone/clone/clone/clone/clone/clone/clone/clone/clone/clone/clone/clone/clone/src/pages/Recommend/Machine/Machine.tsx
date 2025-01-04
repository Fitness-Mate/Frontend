import { useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import IconButton from "@components/IconButton/IconButton"
import AlertLoadingModal from "@components/Modal/components/Alert/AlertLoadingModal"
import ProgressBar from "@components/Progressbar/ProgressBar"

import Footer from "@pages/Recommend/Machine/Footer"
import List from "@pages/Recommend/Machine/List"
import { BackOverlay } from "@pages/Search/StyledSearch"

import { usePostRecommend } from "@hooks/mutation/usePostRecommend"
import { useGetMachineList } from "@hooks/query/useGetMachineList"
import { useLoading } from "@hooks/useLodaing"
import { useScroll } from "@hooks/useScroll"

import * as GS from "../StyledRecommend"
import * as S from "./StyledMachine"

interface RouteState {
  state: string[]
}

const Machine = () => {
  const navigate = useNavigate()

  const [machinesById, setMachinesById] = useState(new Set<number>())
  const scrollRef = useRef<HTMLDivElement>(null)
  const { isScrollTop } = useScroll(scrollRef)
  const { coverAnimation, textAnimation } = useLoading()

  const { state: bodyPart } = useLocation() as RouteState

  const { data: machines = [] } = useGetMachineList(bodyPart)
  const postRecommend = usePostRecommend()

  const updateSet = (set: Set<number>, id: number) => {
    const updatedSet = new Set(set)
    void (updatedSet.has(id) ? updatedSet.delete(id) : updatedSet.add(id))
    return updatedSet
  }

  const handleBodyPart = (id: number) => {
    setMachinesById((prevSet) => updateSet(prevSet, id))
  }

  const handleBackPage = () => {
    navigate(-1)
  }

  return (
    <>
      {postRecommend.isPending && (
        <>
          <BackOverlay />
          <S.LayerWrapper>
            <S.CoverWrapper {...coverAnimation} />
            <S.LoadingText {...textAnimation}>
              추천을 위한
              <br /> 분석을 시작했어요
            </S.LoadingText>
          </S.LayerWrapper>
        </>
      )}

      <GS.RecommendWrapper>
        <GS.Status $isScrollTop={isScrollTop}>
          <IconButton
            icon="LeftArrowBold"
            size={30}
            onClick={handleBackPage}
          />
          <ProgressBar progress={2} />
        </GS.Status>
        <List
          isScrollTop={isScrollTop}
          scrollRef={scrollRef}
          machines={machines}
          machinesById={machinesById}
          handleBodyPart={handleBodyPart}
        />
      </GS.RecommendWrapper>
      <Footer
        bodyPart={bodyPart}
        machinesById={machinesById}
        postRecommend={postRecommend}
        machines={machines}
      />
      <AlertLoadingModal />
    </>
  )
}

export default Machine
