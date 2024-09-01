import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Avatar from "@components/Avatar/Avatar"
import Button from "@components/Button/Button"
import ImgCheckBox from "@components/CheckBox/ImgCheckBox"
import Footer from "@components/Footer/Footer"
import IconButton from "@components/IconButton/IconButton"
import ProgressBar from "@components/Progressbar/ProgressBar"
import SpeechBubble from "@components/SpeechBubble/SpeechBubble"
import Tabs from "@components/Tabs/Tabs"

import * as S from "../StyledRecommend"

const DUMMY_BODYPART = {
  상체: ["등", "가슴", "어깨", "이두", "삼두", "복부"],
  하체: ["엉덩이", "허벅지(앞)", "허벅지(뒤)", "종아리"],
}

const bodyPartsLength =
  DUMMY_BODYPART["상체"].length + DUMMY_BODYPART["하체"].length

const BodyPart = () => {
  const [selectedBodyParts, setSelectedBodyParts] = useState(
    Array(bodyPartsLength).fill(false),
  )

  const navigate = useNavigate()

  const handleBackPage = () => {
    navigate(-1)
  }

  const handleBodyPart = (bodyPartIdx: number) => {
    setSelectedBodyParts(
      selectedBodyParts.map((bodyPart, idx) =>
        idx === bodyPartIdx ? !bodyPart : bodyPart,
      ),
    )
  }

  const handleNextPage = () => {
    const bodyParts = selectedBodyParts
      .map((v, idx) =>
        v ? Object.values(DUMMY_BODYPART).flatMap((item) => item)[idx] : false,
      )
      .filter((v) => v)
    console.log({ bodyPartKoreanName: bodyParts })
    navigate("/recommend/machine")
  }

  return (
    <S.RecommendWrapper>
      <S.Status>
        <IconButton
          icon="LeftArrowBold"
          onClick={handleBackPage}
        />
        <ProgressBar progress={1} />
      </S.Status>
      <S.RecommendInner>
        <S.RecommendGuide>
          <Avatar />
          <SpeechBubble>
            <SpeechBubble.MainText>
              어떤 부위의 운동을 추천해드릴까요?
            </SpeechBubble.MainText>
          </SpeechBubble>
        </S.RecommendGuide>
        <Tabs>
          <Tabs.TabList>
            {Object.entries(DUMMY_BODYPART).map(([pos, bodypart], index) => {
              return (
                <Tabs.Tab
                  index={index}
                  variant="line"
                  key={index}
                  count={bodypart.length}>
                  {pos}
                </Tabs.Tab>
              )
            })}
          </Tabs.TabList>
          <Tabs.TabPanels>
            {Object.entries(DUMMY_BODYPART).map(
              ([pos, bodyparts], posIndex) => {
                return (
                  <Tabs.TabPanel
                    index={posIndex}
                    key={pos}>
                    {bodyparts.map((bodypart, bodyPartIdx) => (
                      <ImgCheckBox
                        key={bodypart}
                        src="https://github.com/user-attachments/assets/6711e495-0014-42d3-9afd-490015d3adf5"
                        alt="테스트 이미지를 설명"
                        isSelected={
                          selectedBodyParts[posIndex * 6 + bodyPartIdx]
                        }
                        handleToggle={() => {
                          handleBodyPart(posIndex * 6 + bodyPartIdx)
                        }}
                        variant="small">
                        {bodypart}
                      </ImgCheckBox>
                    ))}
                  </Tabs.TabPanel>
                )
              },
            )}
          </Tabs.TabPanels>
        </Tabs>
      </S.RecommendInner>
      <Footer>
        <Footer.Text>
          {selectedBodyParts.filter((v) => v).length}개
          <Footer.SubText> 부위 선택됨</Footer.SubText>
        </Footer.Text>
        <Button onClick={handleNextPage}>다음</Button>
      </Footer>
    </S.RecommendWrapper>
  )
}
export default BodyPart
