// @ts-nocheck
// < 네브바 포함 레이아웃 >
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import CancleModal from "@components/Modal/CancleModal"
import LoginModal from "@components/Modal/LoginModal"
import NavModal from "@components/Navbar/NavModal"

import TokenApi from "@apis/TokenApi"

import logoimg from "@assets/images/logo.png"

import * as S from "./StyledNavbar"

const Navbar = () => {
  const navigate = useNavigate()
  const [userName, setuserName] = useState(null)
  const [isLoginModal, setIsLoginModal] = useState(false)
  const [isCancleModal, setIsCancleModal] = useState(false)
  const [isRecommend, setIsRecommend] = useState(false)

  const handleSearch = () => {
    if (window.location.href.includes("signup")) {
      setIsCancleModal(true)
    } else {
      navigate("search/1")
    }
  }
  const handleMyPage = () => {
    if (window.location.href.includes("signup")) {
      setIsCancleModal(true)
    } else {
      if (userName) {
        navigate("mypage")
      } else {
        setIsLoginModal(true)
      }
    }
  }
  // 브라우저의 새로고침 감지
  // useEffect(() => {
  // 	// signup 페이지 && 새로고침 시에만
  // 	if (
  // 		localStorage.getItem("refreshed") &&
  // 		window.performance.navigation.type === 1 &&
  // 		window.location.href.includes("signup")
  // 	) {
  // 		navigate("/signup")
  // 		localStorage.removeItem("refreshed") // 플래그 제거
  // 	}

  // 	const handleBeforeUnload = (e) => {
  // 		e.preventDefault()
  // 		if (window.location.href.includes("signup")) {
  // 			localStorage.setItem("refreshed", "true")
  // 		}
  // 	}

  // 	window.addEventListener("beforeunload", handleBeforeUnload)

  // 	return () => {
  // 		window.removeEventListener("beforeunload", handleBeforeUnload)
  // 	}
  // }, [navigate])

  const handleRecommend = () => {
    if (window.location.href.includes("signup")) {
      setIsCancleModal(true)
    } else {
      if (userName) {
        navigate("recommend")
      } else {
        setIsLoginModal(true)
      }
    }
  }

  // 토큰이 만료되고 새로고침을 누르면 로그인이 풀린다.
  const handleLocalStorage = () => {
    return localStorage.length
  }

  const fetchData = async () => {
    try {
      // if 안하고 그냥 바로 받아오면 로그인 안한 상태일 때 accessToken alert 창이 계속 뜸
      if (localStorage.getItem("accessToken")) {
        const response = await TokenApi.get("user/private")
        setuserName(response.data.userName)
      }
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
    if (window.location.href.includes("recommend")) {
      setIsRecommend(true)
    }
  }, [window.location.href])

  return (
    // @ts-ignore
    <S.NavbarContainer
      $isLoginModal={isLoginModal}
      $isCancleModal={isCancleModal}
      $isRecommend={isRecommend}>
      <img
        src={logoimg}
        className="nav-logo"
        onClick={() => {
          navigate("/")
        }}
        alt="fitmate 로고"
      />
      <S.NavLink>
        <S.NavTextContainer>
          <i className="fa-solid fa-bars"></i>
          <S.NavButton onClick={handleSearch}>검색하기</S.NavButton>
          <S.NavButton onClick={handleRecommend}>추천받기</S.NavButton>
          <S.NavButton onClick={handleMyPage}>내 운동</S.NavButton>
        </S.NavTextContainer>
        {!userName ? (
          <S.NavLoginButton
            className="login"
            onClick={() => {
              navigate("login")
            }}>
            로그인
          </S.NavLoginButton>
        ) : (
          <NavModal
            userName={userName}
            setuserName={setuserName}>
            {userName} 님
          </NavModal>
        )}
      </S.NavLink>
      {isLoginModal && <LoginModal setIsLoginModal={setIsLoginModal} />}
      {isCancleModal && <CancleModal setIsCancleModal={setIsCancleModal} />}
    </S.NavbarContainer>
  )
}

export default Navbar
