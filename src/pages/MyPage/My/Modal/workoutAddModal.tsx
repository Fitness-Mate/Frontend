// @ts-nocheck
// 편집 모달
import { useEffect, useRef, useState } from "react"

import NoSearch from "@components/NoSearch/NoSearch"
import SearchBar from "@components/SearchBar/SearchBar"
import TextCheckbox from "@components/TextCheckbox/TextCheckbox"

import TokenApi from "@apis/TokenApi"

// import x from "@assets/images/X_Icon.svg"
import * as S from "./StyledAddModal"

function AddModal({ onClose, routineId }) {
  // 보여질 운동 리스트
  const [machineList, setMachineList] = useState([])

  // 루틴에 추가할 운동
  const [finalWorkout, setFinalWorkout] = useState([])

  // 검색결과가 없을 때 페이지
  const [nosearch, setNoSearch] = useState(false)

  const fetchData = async () => {
    const request = {
      searchKeyword: "",
      bodyPartKoreanName: [],
    }
    // 운동 기구 batch 조회(12개)

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }
      const workoutResponse = await TokenApi.post(
        `/myfit/routines/workout/search/${routineId}`,
        "",
        config,
      )
      if (workoutResponse.data.length) {
        setNoSearch(false)
        setMachineList(workoutResponse.data)
      } else {
        setNoSearch(true)
      }
    } catch (err) {
      // 페이지넘버가 이상한 경우 오류페이지
      setNoSearch(true)
    }
  }

  // 운동 검색
  const handleSearch = async (searchValue) => {
    try {
      if (searchValue === "") {
        setNoSearch(true)
      } else {
        setNoSearch(false)
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        }
        const workoutResponse = await TokenApi.post(
          `/myfit/routines/workout/search/${routineId}`,
          JSON.stringify(searchValue),
          config,
        )
        console.log(workoutResponse)
        setMachineList(workoutResponse.data)
        console.log(machineList)
      }
    } catch (err) {
      setMachineList([])
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  // 운동 선택
  const handleSelect = (idx) => {
    setMachineList((prevMachineList) => {
      const updatedList = [...prevMachineList]
      updatedList[idx].isSelected = !updatedList[idx].isSelected
      return updatedList
    })
    setFinalWorkout((prevFinalWorkout) => {
      const selectedWorkout = machineList[idx].workoutId
      return [...prevFinalWorkout, selectedWorkout]
    })
  }

  // 선택완료
  const handleSubmit = async (machineList) => {
    console.log(finalWorkout)

    const workoutResponse = await TokenApi.post(
      `/myfit/routines/workout/${routineId}`,
      { workoutIds: finalWorkout },
    )
    console.log("결과:", workoutResponse.status)
    setFinalWorkout([])
    alert("추가되었습니다!")
    onClose?.()
    // 페이지 새로고침
    window.location.reload()
  }

  //modal

  const handleClose = () => {
    onClose?.()
  }
  const modalRef = useRef(null)
  // OutSideClick(modalRef, handleClose)

  return (
    <S.AppWrap>
      <S.Overlay>
        <S.ModalContainer ref={modalRef}>
          <S.ModalWrap>
            <S.Header>
              <S.ModalTitle>
                <h1>이 목록에 운동 추가하기</h1>
                <S.CloseButton onClick={handleClose}>
                  <img
                    src={x}
                    alt="닫기 버튼"
                  />
                </S.CloseButton>
              </S.ModalTitle>
            </S.Header>
            <S.SerchArea className="search">
              <SearchBar
                handleSearch={handleSearch}
                name="workout"
              />
            </S.SerchArea>
            {nosearch ? (
              <S.Contents>
                <NoSearch />
              </S.Contents>
            ) : (
              <S.Contents>
                <S.CheckboxArea className="ScrollArea">
                  {machineList.map((machine, idx) => {
                    return (
                      <TextCheckbox
                        key={machine.workoutName}
                        handleClick={handleSelect}
                        isSelected={machine.isSelected}
                        elementidx={idx}>
                        {machine.workoutName}
                      </TextCheckbox>
                    )
                  })}
                </S.CheckboxArea>
              </S.Contents>
            )}
            {/* BigButton이랑 크기가 안 맞아서 새로 제작 */}
            <S.SaveButton
              onClick={handleSubmit}
              type="submit">
              선택한 운동 추가하기
            </S.SaveButton>
          </S.ModalWrap>
        </S.ModalContainer>
      </S.Overlay>
    </S.AppWrap>
  )
}

export default AddModal
