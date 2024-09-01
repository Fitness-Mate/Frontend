// @ts-nocheck
import { useEffect, useState } from "react"

import Button from "@components/Button/Button"
import * as S from "@components/Modal/StyledRecommendAddModal"
import TextCheckbox from "@components/TextCheckbox/TextCheckbox"

import authAPI from "@apis/domain/auth"

// import xbutton2 from "@assets/images/xbutton2.svg"

const AddWorkoutModal = ({ setRecommendAddModal, workoutId }) => {
  // my페이지에서는 저장된 값을 가져옴
  const [myDivision, setMyDivsion] = useState([])
  const [isReady, setIsReady] = useState(false)

  const handleReady = () => {
    return myDivision.filter((division) => division.isSelected).length
  }

  const handleSelect = (idx) => {
    const newArr = [...myDivision]
    newArr[idx].isSelected = !newArr[idx].isSelected
    setMyDivsion(newArr)
    setIsReady(false)
    if (handleReady()) {
      setIsReady(true)
    }
  }

  // 기존 루틴 받아오기(분할1 ~ 분할4)
  const fetchData = async () => {
    try {
      const response = await authAPI.get("myfit/routines/workout")
      const newArr = [...response.data].map((obj, index) => ({
        ...obj,
        isSelected: false,
      }))
      setMyDivsion(newArr)
    } catch (err) {}
  }
  // 루틴에 운동 추가하기
  const handleAdd = () => {
    const submission = []
    submission.push(workoutId)
    console.log(submission)
    myDivision.forEach((division) => {
      if (division.isSelected) {
        authAPIauthAPI
          .post(`/myfit/routines/workout/${division.routineId}`, {
            workoutIds: submission,
          })
          .then((response) => {
            console.log(response)
            alert("추가되었습니다!")
            setRecommendAddModal(false)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    })
  }

  // 루틴이 잘 등록되었는지 확인
  // const handleRoutine = () => {
  //   myDivision.forEach((division) => {
  //     if (division.isSelected) {
  //       TokenApi.get(`myfit/routines/workout/${division.routineId}`)
  //         .then((response) => {
  //           console.log(response);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     }
  //   });
  // };

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <S.RecommendAddModalWrapper>
      <div className="recommendAddModalTitleWrapper">
        <span className="recommendAddModalTitle">내 운동에 추가하기</span>
        <img
          src={xbutton2}
          className="recommendAddModalQuitBtn"
          onClick={() => setRecommendAddModal(false)}
          alt="운동 추천 모달 나가기 버튼"
        />
      </div>
      <div className="recommendAddModalDivsionList">
        {myDivision.map((item, index) => {
          return (
            <TextCheckbox
              key={item.routineName}
              handleClick={handleSelect}
              isSelected={item.isSelected}
              elementidx={index}>
              {item.routineName}
            </TextCheckbox>
          )
        })}
      </div>
      <Button
        isReady={isReady}
        onClick={handleAdd}>
        추가하기
      </Button>
      <Button
        onClick={handleAdd}
        variant={isReady ? "main" : "weak"}>
        추가하기
      </Button>
    </S.RecommendAddModalWrapper>
  )
}

export default AddWorkoutModal
