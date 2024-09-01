import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import { DUMMY_MACHINE } from "constants/DUMMY"
import { useScroll } from "hooks/useScroll"

import Avatar from "@components/Avatar/Avatar"
import Button from "@components/Button/Button"
import ImgCheckBox from "@components/CheckBox/ImgCheckBox"
import Footer from "@components/Footer/Footer"
import IconButton from "@components/IconButton/IconButton"
import ProgressBar from "@components/Progressbar/ProgressBar"
import SpeechBubble from "@components/SpeechBubble/SpeechBubble"

import * as S from "../StyledRecommend"

const Machine = () => {
  const [selectedMachines, setSelectedMachines] = useState(
    Array(DUMMY_MACHINE.length).fill(false),
  )

  const scrollRef = useRef<HTMLDivElement>(null)
  const targetRef = useRef<HTMLDivElement>(null)
  const position = useScroll(scrollRef)
  const navigate = useNavigate()

  const handleBackPage = () => {
    navigate(-1)
  }

  const handleBodyPart = (machineIdx: number) => {
    setSelectedMachines((prevSelected) =>
      prevSelected.map((machine, idx) =>
        idx === machineIdx ? !machine : machine,
      ),
    )
  }

  const handleNextPage = () => {
    // 추천 시작하기 버튼 클릭 처리
  }

  return (
    <>
      <S.RecommendWrapper>
        <S.Status>
          <IconButton
            icon="LeftArrowBold"
            onClick={handleBackPage}
          />
          <ProgressBar progress={1} />
          <S.RecommendSwitchGuide $isGuideSwitch={position > 103}>
            <Avatar />
            <SpeechBubble isIcon={false}>
              <SpeechBubble.MainText>
                사용 가능한 기구를 선택해주세요!
              </SpeechBubble.MainText>
            </SpeechBubble>
          </S.RecommendSwitchGuide>
        </S.Status>
        <S.RecommendInner ref={scrollRef}>
          <S.RecommendGuide
            ref={targetRef}
            $isGuideSwitch={position > 143}>
            <Avatar />
            <SpeechBubble isIcon>
              <SpeechBubble.MainText>
                사용 가능한 기구를 선택해주세요!
              </SpeechBubble.MainText>
              <SpeechBubble.SubText>
                선택한 부위에 필요한 기구만 보여드렸어요
              </SpeechBubble.SubText>
            </SpeechBubble>
          </S.RecommendGuide>

          <S.RecommendMachineWrapper>
            {DUMMY_MACHINE.map(({ koreanName: machine }, machineIdx) => (
              <ImgCheckBox
                key={machine}
                src="https://github.com/user-attachments/assets/6711e495-0014-42d3-9afd-490015d3adf5"
                alt="테스트 이미지를 설명"
                isSelected={selectedMachines[machineIdx]}
                handleToggle={() => handleBodyPart(machineIdx)}
                variant="big">
                {machine}
              </ImgCheckBox>
            ))}
          </S.RecommendMachineWrapper>
        </S.RecommendInner>

        <Footer>
          <Footer.Text>
            {selectedMachines.filter((v) => v).length}개
            <Footer.SubText> 기구 선택됨</Footer.SubText>
          </Footer.Text>
          <Button onClick={handleNextPage}>추천 시작하기</Button>
        </Footer>
      </S.RecommendWrapper>
    </>
  )
}

export default Machine
