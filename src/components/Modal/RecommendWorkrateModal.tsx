// @ts-nocheck
import { useEffect, useState } from "react"

import { ModalBox } from "@components/Modal/StyeldLeaveModal"

import TokenApi from "@apis/TokenApi"

// import xbutton2 from "@assets/images/xbutton2.svg"
import * as S from "./StyledRecommendAddModal"

const RecommendWorkrateModal = ({ setRecommendWorkrateModal, myWorkout }) => {
  // my페이지에서는 저장된 값을 가져옴
  const [myDivision, setMyDivsion] = useState([])
  const [isReady, setIsReady] = useState(false)

  // 운동 받아오기
  const fetchData = async () => {
    console.log(myWorkout)
  }

  // 중량 횟수 세트수
  const [option, setOption] = useState([
    {
      optionname: "중량",
      value: "",
      isSelected: true,
      unit: "kg",
    },
    {
      optionname: "횟수",
      value: "",
      isSelected: false,
      unit: "회",
    },
    {
      optionname: "세트 수",
      value: "",
      isSelected: false,
      unit: "세트",
    },
  ])

  // option 인덱스
  const [currentIdx, setCurrentIdx] = useState(0)

  const handleOptionValue = (e) => {
    const newArray = [...option]
    newArray[currentIdx].value = e.target.value
    setOption(newArray)
    console.log(option)
  }

  const handleModifyComplete = async () => {
    const submission = {
      myWorkoutIndex: Number(myWorkout.myWorkoutIndex),
      weight: option[0].value,
      rep: option[1].value,
      setCount: option[2].value,
    }

    console.log(submission)

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
    TokenApi.post(
      `/myfit/routines/workout/update/${myWorkout.myWorkoutId}`,
      submission,
      config,
    )
      .then((response) => {
        console.log(response)

        setRecommendWorkrateModal(false)
        alert("수정되었습니다!")
        // 페이지 새로고침
        window.location.reload()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // 루틴이 잘 등록되었는지 확인
  const handleRoutine = () => {
    myDivision.forEach((division) => {
      if (division.isSelected) {
        TokenApi.get(`myfit/routines/workout/${division.routineId}`)
          .then((response) => {
            console.log(response)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ModalBox>
      <S.RecommendAddModalWrapper>
        <div className="recommendAddModalTitleWrapper">
          <span className="recommendAddModalTitle">내 운동에 추가하기</span>
          <img
            src={xbutton2}
            className="recommendAddModalQuitBtn"
            onClick={() => setRecommendWorkrateModal(false)}
            alt="운동 추천 모달 나가기 버튼"
          />
        </div>
        <>
          <S.ModifyOptionWrapper>
            {option.map((op, idx) => {
              return (
                <S.ModifyOptionButton
                  isSelected={currentIdx === idx}
                  className="modifyOption"
                  onClick={(e) => setCurrentIdx(idx)}>
                  {op.optionname}
                </S.ModifyOptionButton>
              )
            })}
          </S.ModifyOptionWrapper>
          <S.ModifyOptionContent>
            <input
              className="modifyInput"
              id={option[currentIdx]}
              value={option[currentIdx].value}
              onChange={handleOptionValue}
            />
            <span className="modifyInputUnit">{option[currentIdx].unit}</span>
          </S.ModifyOptionContent>
        </>
        <Button handleSubmit={handleModifyComplete}>
          수정 완료하고 돌아가기
        </Button>
      </S.RecommendAddModalWrapper>
    </ModalBox>
  )
}

export default RecommendWorkrateModal
