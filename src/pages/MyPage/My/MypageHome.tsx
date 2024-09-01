// @ts-nocheck
// 내 운동 페이지
import { useEffect, useState } from "react"

import RecommendWorkrateModal from "@components/Modal/RecommendWorkrateModal"

import TokenApi from "@apis/TokenApi"

// import add from "@assets/images/Add_Icon.svg"
// import fix from "@assets/images/Fix_Icon.svg"
// import noWorkrate from "@assets/images/noWorkrate.svg"
import FixModal from "@pages/MyPage/My/Modal/FixModal"
import ToggleSwitch from "@pages/MyPage/My/toggle"

import * as S from "./StyledMypageHome"
import "./style.css"

// 루틴 목록용 더미데이터

export const DUMMY_DATA = [
  {
    id: 0,
    text: "분할 1",
    name: "first",
  },
  {
    id: 1,
    text: "분할 2",
    name: "second",
  },
]

const Mypagehome = () => {
  // 루틴 목록

  const [data, setData] = useState([...DUMMY_DATA])
  const [content, setContent] = useState(data[0].name)

  const [routinesData, setRoutinesData] = useState({ data: [] })
  const [routinesId, setRoutinesId] = useState("")
  const [routinesContent, setRoutinesContent] = useState("")
  const [btnActive, setBtnActive] = useState("")
  const [routineWorkout, setRoutineWorkout] = useState([])

  useEffect(() => {
    const fetchDataAndWorkoutData = async () => {
      try {
        // 루틴 목록 조회
        const routinesResponse = await TokenApi.get("/myfit/routines/workout")
        if (routinesResponse.data && routinesResponse.data.length > 0) {
          // 루틴 목록 저장
          setRoutinesData(routinesResponse)
          // 가장 첫 번째 루틴 목록을 active 시킴
          setBtnActive(routinesResponse.data[0].routineIndex)
          // 첫 번째 루틴의 ID 저장
          setRoutinesId(routinesResponse.data[0].routineId)
        }
        // 루틴에 속한 운동 리스트 조회
        const routinesWorkout = await TokenApi.get(
          `/myfit/routines/workout/${routinesResponse.data[0].routineId}`,
        )
        setRoutineWorkout(routinesWorkout)
      } catch (error) {
        console.error(error)
      }
    }

    fetchDataAndWorkoutData()
  }, [])

  // Modal

  const [isFixOpen, setIsFixOpen] = useState(false)

  const onClickFixButton = () => {
    setIsFixOpen(true)
  }

  // 편집 모달에서 수정된 데이터를 반영하는 함수
  const handleUpdateData = (updatedData) => {
    setData(updatedData)
  }

  // 운동 add 모달
  const [isAddOpen, setIsAddOpen] = useState(false)
  const onClickAddButton = () => {
    setIsAddOpen(true)
  }

  // 루틴 목록

  const handleClickButton = async (e) => {
    const { name, value, id } = e.target
    setRoutinesContent(name)
    setContent(name)
    setBtnActive(value)
    setRoutinesId(id)

    try {
      // 해당 루틴에 속한 운동 리스트를 가져오기 위해 API 요청
      const routinesWorkout = await TokenApi.get(
        `/myfit/routines/workout/${id}`,
      )
      setRoutineWorkout(routinesWorkout)
    } catch (error) {
      console.error(error)
    }
  }

  // 루틴에서 운동 삭제

  const deleteClickButton = async (e) => {
    const { id } = e.target
    const myWorkoutId = parseInt(id)
    try {
      const deleteWorkout = await TokenApi.get(
        `/myfit/routines/workout/delete/${myWorkoutId}`,
      )
      console.log(deleteWorkout.status)
      alert("삭제되었습니다!")
      // 페이지 새로고침
      window.location.reload()
    } catch (error) {
      console.error(error)
    }
  }

  const hasWorkrate = (item) => {
    return item.rep && item.weight && item.setCount
  }

  const [recommendWorkrateModal, setRecommendWorkrateModal] = useState(false)

  // 선택된 목표 운동량 없는 운동
  const [selectedMyWorkout, setSelectedMyWorkout] = useState(null)

  const handleRecommendWorkrateButtonClick = (item) => {
    setSelectedMyWorkout(item)
    setRecommendWorkrateModal(true)
  }

  // Toggle

  const [visible, setVisible] = useState(false)

  const onChange = () => {
    setVisible(!visible)
  }

  return (
    <S.HomeContainer>
      <S.HomeContent>
        <S.FirstContent>
          <S.FirstContent>
            <div className="firstTop">나에게 핏한</div>
            <div className="firstMiddle">
              <p>내 운동 정보를 모아보세요.</p>
            </div>
            <S.Toggle>
              <div class="toggleSwitch_wrap">
                <div class="toggleSwitch">
                  <ToggleSwitch
                    labels={labels}
                    onChange={onChange}
                  />
                </div>
              </div>
            </S.Toggle>
          </S.FirstContent>
        </S.FirstContent>
      </S.HomeContent>
      <S.HomeContent>
        {visible(
          <S.SecondContent onChange={onChange}>
            <S.ContentsTitle>
              <div className="contents-title">내 운동 루틴</div>
              <S.ButtonContainer>
                {/* 루틴 목록을 map으로 불러옴 */}
                {routinesData.data.length > 0 &&
                  routinesData.data.map((item) => (
                    <button
                      name={item.routineName}
                      id={item.routineId}
                      value={item.routineIndex}
                      className={
                        "btn" +
                        (item.routineIndex == btnActive ? " active" : "")
                      }
                      onClick={handleClickButton}>
                      {item.routineName}
                    </button>
                  ))}
                <S.FixModalButton onClick={onClickFixButton}>
                  <img
                    src={fix}
                    alt="편집하기 버튼"
                  />
                  <p>편집</p>
                </S.FixModalButton>
              </S.ButtonContainer>
            </S.ContentsTitle>
            <div className="contents">
              {routineWorkout.data &&
                routineWorkout.data.map((item) => (
                  <S.WorkoutContent key={item.myWorkoutId}>
                    <img
                      src={item.imgPath}
                      alt="운동 사진"
                    />
                    <div className="contentItem">
                      <div className="contentTopItem">
                        <div className="itemsBodyPart">
                          {item.bodyParts.map((bodyPart, index) => (
                            <p
                              className="item_BodyPart"
                              key={index}>
                              {bodyPart}
                            </p>
                          ))}
                        </div>
                        <span className="item_workoutName">
                          {item.workoutName}
                        </span>
                      </div>
                      {hasWorkrate(item) ? ( // 목표 운동량이 있는 경우
                        <div className="contentBottomItem">
                          <span className="bottomTitle">목표 운동량</span>
                          <div className="workrate">
                            <div className="workrateItem">
                              <span className="workrateTitle">중량</span>
                              <p className="workrateContent">{item.weight}kg</p>
                            </div>
                            <div className="workrateItem">
                              <span className="workrateTitle">횟수</span>
                              <p className="workrateContent">{item.rep}회</p>
                            </div>
                            <div className="workrateItem">
                              <span className="workrateTitle">세트 수</span>
                              <p className="workrateContent">
                                {item.setCount}세트
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        // 목표 운동량이 없는 경우
                        <div className="noWorkrate">
                          <p className="noWorkrateContent">
                            추천 받지 않아 목표 운동량이 없습니다.
                          </p>
                          <div
                            className="writeWorkrate"
                            onClick={() => {
                              handleRecommendWorkrateButtonClick(item)
                            }}>
                            <p className="recommendWorkrate">추천받기</p>
                            <img
                              className="recommendImg"
                              src={noWorkrate}
                              alt="목표 운동량 추천받기"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className="deleteContent"
                      id={item.myWorkoutId}
                      onClick={deleteClickButton}>
                      삭제
                    </div>
                  </S.WorkoutContent>
                ))}
            </div>
            <div className="modalbutton">
              <S.AddModalButton onClick={onClickAddButton}>
                <img
                  src={add}
                  alt="추가하기 버튼"
                />
                <p>이 목록에 운동 추가하기</p>
              </S.AddModalButton>
            </div>
          </S.SecondContent>,
        )}
      </S.HomeContent>

      {/* 편집 버튼 */}
      {isFixOpen && (
        <FixModal
          open={isFixOpen}
          data={data} // data를 FixModal로 전달
          onUpdateData={handleUpdateData}
          onDeleteItem={(deletedItemId) => {
            // 삭제된 항목의 ID를 사용하여 데이터 업데이트
            const updatedData = data.filter((item) => item.id !== deletedItemId)
            setData(updatedData)
          }}
          onClose={() => {
            setIsFixOpen(false)
          }}
        />
      )}

      {/* 이 목록에 운동 추가하기 버튼 */}
      {isAddOpen && (
        <WorkoutAddModal
          open={isAddOpen}
          routineId={routinesId}
          onClose={() => {
            setIsAddOpen(false)
          }}
        />
      )}

      {/* 목표 운동량 추천받기 모달 */}
      {recommendWorkrateModal && (
        <RecommendWorkrateModal
          setRecommendWorkrateModal={setRecommendWorkrateModal}
          myWorkout={selectedMyWorkout}
        />
      )}
    </S.HomeContainer>
  )
}

export default Mypagehome
