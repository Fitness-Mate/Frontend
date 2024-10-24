import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

import { usePathStore } from "@store/usePathStore"

import Footer from "@components/Footer/Footer"
import Navbar from "@components/Navbar/Navbar"
import ScrollToTop from "@components/ScrollTop/ScrollTop"

const MainLayout = () => {
  const location = useLocation()
  const path = location.pathname
  const isRecommend = path.includes("recommend")
  const isLogin = path.includes("login")
  const { setIsRecommendPage } = usePathStore()

  useEffect(() => {
    setIsRecommendPage(path)
  }, [location])

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      {!isRecommend && !isLogin && <Footer />}
    </>
  )
}

export default MainLayout
