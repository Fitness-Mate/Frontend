// @ts-nocheck
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import OutSideClick from "@components/Navbar/OutSideClick"

import { logoutPutAPI } from "@apis/API"

import * as S from "./StyledNavModal"

function NavModal({ children, userName, setuserName }) {
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false)

  const modalRef = useRef(null)
  const handleClose = () => {
    setIsOpen(false)
  }
  OutSideClick(modalRef, handleClose)

  // 로그아웃
  const handleLogout = async () => {
    try {
      const res = await logoutPutAPI.get("", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("refreshToken"),
        },
      })
      console.log(res)
      setuserName(null)
      localStorage.clear()
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  const handleFixProfile = async () => {
    navigate("/mypage/fixprofile")
    setIsOpen(false)
  }

  const handleFixBodyInfo = async () => {
    navigate("/mypage/fixbodyinfo")
    setIsOpen(false)
  }

  return (
    <S.AppWrap ref={modalRef}>
      <S.NavButton
        onClick={() => {
          setIsOpen(!isOpen)
        }}>
        {children}
      </S.NavButton>
      {isOpen && (
        <S.ModalWrap>
          <S.Contents>
            <div>
              <p>안녕하세요.</p>
              <p>{userName}님!</p>
            </div>
            <div className="modalButton">
              <S.Button onClick={handleLogout}>로그아웃</S.Button>
              <S.Button onClick={handleFixProfile}>계정 정보 수정</S.Button>
              <S.Button onClick={handleFixBodyInfo}>신체 정보 수정</S.Button>
            </div>
          </S.Contents>
        </S.ModalWrap>
      )}
    </S.AppWrap>
  )
}

export default NavModal
