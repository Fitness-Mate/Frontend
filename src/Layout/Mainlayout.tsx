import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { ToastOptions } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { useModalStore } from "@store/useModalStore"
import { useUserStore } from "@store/useUserStore"

import Footer from "@components/Footer/Footer"
import AlertLoadingModal from "@components/Modal/components/Alert/AlertLoadingModal"
import LoadingModal from "@components/Modal/components/Loading/LoadingModal"
import RoutineAddModal from "@components/Modal/components/Routine/RoutineAddModal"
import RoutineInfoModal from "@components/Modal/components/Routine/RoutineInfoModal"
import RoutineMakeModal from "@components/Modal/components/Routine/RoutineMakeModal"
import RoutineModal from "@components/Modal/components/Routine/RoutineModal"
import Navbar from "@components/Navbar/Navbar"
import { ScrollToTop } from "@components/ScrollToTop/ScrollToTop"
import { StyledToast } from "@components/Toast/Toast"

const MainLayout = () => {
  const location = useLocation()
  const path = location.pathname
  const hasNotFooter =
    path.includes("login") ||
    path.includes("signup") ||
    path.includes("mypage") ||
    path.includes("recommend")

  const { checkLogin } = useUserStore()
  const { modalState } = useModalStore()

  useEffect(() => {
    checkLogin()
  }, [checkLogin, location])

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <StyledToast
        limit={1}
        {...defaultOptions}
      />

      {!hasNotFooter && <Footer />}
      {modalState["루틴추가"] && <RoutineAddModal />}
      {modalState["루틴시작"] && <RoutineModal />}
      {modalState["루틴정보"] && <RoutineInfoModal />}
      {modalState["루틴생성"] && <RoutineMakeModal />}
      {modalState["알림"] && <AlertLoadingModal />}
      {modalState["로딩"] && <LoadingModal />}
    </>
  )
}

export default MainLayout

const defaultOptions: ToastOptions = {
  position: "top-center",
  autoClose: 4000,
  hideProgressBar: true,
  closeOnClick: true,
  draggable: true,
  pauseOnHover: false,
  closeButton: true,
}
