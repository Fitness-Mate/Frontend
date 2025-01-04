import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

import { useUserStore } from "@store/useUserStore"

import Footer from "@components/Footer/Footer"
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
    </>
  )
}

export default MainLayout
