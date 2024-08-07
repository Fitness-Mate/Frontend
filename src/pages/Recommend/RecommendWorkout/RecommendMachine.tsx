// @ts-nocheck
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { RecommendState, bodyPartState } from "@recoil/atom"
import { useRecoilState } from "recoil"

import { BeforeArrowButton } from "@components/Button/BeforeArrowButton"
import SmallButton from "@components/Button/SmallButton"
import Loading from "@components/Loading/Loading"
import SmallTextCheckbox from "@components/TextCheckbox/SmallTextCheckbox"

import TokenApi from "@apis/TokenApi"

import {
  BorderTextCheckboxContainer,
  BorderTextCheckboxInnerContainer,
  RecommendButtonContainer,
  RecommendContainer,
  RecommendTextContainer,
  RecommendTitle,
  RecommendTitleHide,
} from "@pages/Recommend/StyledRecommend"
import { SignupTitle } from "@pages/Signup/StyledSignup"

import theme from "@styles/theme"

const RecommendMachine = () => {
  const navigate = useNavigate()

  // 운동 부위 객체
  const [selectedBodyPart, setSelectedBodyPart] = useRecoilState(bodyPartState)
  const [recommendState, setRecommendState] = useRecoilState(RecommendState)
  const [isLoading, setIsLoading] = useState(false)

  // 운동 기구 배열
  const [isMachineSelected, setIsMachineSelected] = useState([])

  // 전체 선택 상태
  const [isAllSelected, setIsAllSelected] = useState(false)
  const [isReady, setIsReady] = useState(false)

  // 부위를 선택했을때만 서버에서 기구 리스트를 받아옴
  const fetchData = async () => {
    if (selectedBodyPart.bodyPartKoreanName.length) {
      const response = await TokenApi.post("/machines/list", selectedBodyPart)
      console.log(response.data)
      const newArr = response.data.map((obj, index) => ({
        ...obj,
        isSelected: false,
      }))
      setIsMachineSelected(newArr)
    } else {
      console.log("운동 부위를 선택하지 않았습니다")
    }
  }
  // 최초 렌더링 시 운동기구 목록 받아옴
  useEffect(() => {
    fetchData()
  }, [])

  const handleReady = () => {
    return isMachineSelected.filter((machine) => machine.isSelected).length
  }

  // 운동 기구 선택
  const handleSelect = (idx) => {
    // 배열 업데이트
    const newArr = isMachineSelected.map((item, index) => {
      if (index === idx) {
        item.isSelected = !item.isSelected
      }
      return item
    })
    setIsMachineSelected(newArr)
    setIsReady(false)
    if (handleReady() !== 0) {
      setIsReady(true)
    }
  }

  // 전체선택
  const handleAllSelect = () => {
    const newArr = isMachineSelected.map((item, index) => {
      item.isSelected = !isAllSelected
      return item
    })

    // 전체 선택 state 반전
    setIsAllSelected(!isAllSelected)
    // 배열 업데이트
    setIsMachineSelected(newArr)
    setIsReady(false)
    if (handleReady() !== 0) {
      setIsReady(true)
    }
  }

  const handleBackPage = () => {
    navigate(-1)
  }

  const makeRequest = async (url, maxAttempts = 30) => {
    try {
      const response = await TokenApi.get(url)
      // 성공한 경우 데이터 반환
      setIsLoading(true)
      setIsReady(true)
      return response.data
    } catch (error) {
      setIsReady(false)
      if (maxAttempts === 0) throw error

      // 재시도 전에 일정 시간 대기 (예: 1초)
      await new Promise((res) => setTimeout(res, 1000))

      // 재귀적으로 함수 호출
      return makeRequest(url, maxAttempts - 1)
    }
  }

  const handleSubmit = async () => {
    if (isReady) {
      // 선택된 기구
      const checkedMachineList = isMachineSelected
        .filter((machine) => machine.isSelected)
        .map((item) => item.koreanName)

      // 선택된 부위
      const checkedBodyPartList = Object.entries(selectedBodyPart).map(
        ([key, value]) => {
          return value
        },
      )[0]

      // 선택된 기구 + 부위 객체
      const recommendExercise = {
        // 배열
        bodyPartKoreanName: checkedBodyPartList, // ["등", "가슴"]
        machineKoreanName: checkedMachineList, // ["바벨", "케틀벨"]
      }
      const response = await TokenApi.post(
        `/recommendation/workout`,
        recommendExercise,
      )
      const recommendId = response.data

      makeRequest(`/recommendation/workout/history/${recommendId}`)
        .then((data) => {
          setRecommendState(data)
          navigate("/recommend/machineresult")
          setRecommendState(data)
          console.log(recommendState)
          navigate("/recommend/machineresult")
        })
        .catch((error) => console.error("요청 실패", error))
    }
  }

  return (
    <RecommendContainer>
      <SignupTitle $status={"3"}>
        <div className="statusBar">
          <div className="statusBar2"></div>
        </div>
        <RecommendTitle
          ftsize="32px"
          ftcolor={theme.Black}
          ftweight="600">
          운동 기구를 선택해주세요
          <br />
        </RecommendTitle>
        <RecommendTitleHide>운동 부위에 맞는 운동기구예요</RecommendTitleHide>
      </SignupTitle>
      <RecommendTextContainer>
        <BorderTextCheckboxContainer>
          <BorderTextCheckboxInnerContainer>
            {isMachineSelected.map((item, index) => {
              return (
                <SmallTextCheckbox
                  key={item.koreanName}
                  handleClick={handleSelect}
                  isSelected={item.isSelected}
                  elementidx={index}>
                  {item.koreanName}
                </SmallTextCheckbox>
              )
            })}
          </BorderTextCheckboxInnerContainer>
        </BorderTextCheckboxContainer>
        {isAllSelected ? (
          <button
            className="allClearButton"
            onClick={handleAllSelect}>
            전체 선택해제
          </button>
        ) : (
          <button
            className="allSelectButton"
            onClick={handleAllSelect}>
            전체 선택
          </button>
        )}
      </RecommendTextContainer>
      <RecommendButtonContainer>
        <BeforeArrowButton handleClick={handleBackPage}></BeforeArrowButton>
        {isLoading && <Loading />}
        <SmallButton
          handleSubmit={handleSubmit}
          isReady={isReady}>
          추천받기
        </SmallButton>
      </RecommendButtonContainer>
    </RecommendContainer>
  )
}

export default RecommendMachine
