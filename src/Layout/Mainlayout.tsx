import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

import { useUserStore } from "@store/useUserStore"

import Footer from "@components/Footer/Footer"
import AlertLoadingModal from "@components/Modal/components/Alert/AlertLoadingModal"
import AlertModal from "@components/Modal/components/Alert/AlertModal"
import LoadingModal from "@components/Modal/components/Loading/LoadingModal"
import RoutineAddModal from "@components/Modal/components/Routine/RoutineAddModal"
import RoutineDuplicateModal from "@components/Modal/components/Routine/RoutineDuplicateModal"
import RoutineInfoModal from "@components/Modal/components/Routine/RoutineInfoModal"
import RoutineMakeModal from "@components/Modal/components/Routine/RoutineMakeModal"
import RoutineModal from "@components/Modal/components/Routine/RoutineModal"
import SuccessModal from "@components/Modal/components/Success/SuccessModal"
import Navbar from "@components/Navbar/Navbar"
import { ScrollToTop } from "@components/ScrollToTop/ScrollToTop"

const MainLayout = () => {
  const location = useLocation()
  const path = location.pathname
  const hasNotFooter =
    path.includes("login") ||
    path.includes("signup") ||
    path.includes("mypage") ||
    path.includes("recommend")

  const { checkLogin } = useUserStore()

  useEffect(() => {
    checkLogin()
  }, [checkLogin, location])

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      {!hasNotFooter && <Footer />}
      <RoutineAddModal />
      <RoutineModal />
      <RoutineInfoModal />
      <RoutineMakeModal />
      <RoutineDuplicateModal />
      <AlertLoadingModal />
      <AlertModal />
      <SuccessModal />
      <LoadingModal />
    </>
  )
}

export default MainLayout
