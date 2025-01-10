import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom"

import { isAxiosError } from "axios"

import { Toast } from "@components/Toast/Toast"

import AuthFallback from "@pages/RouteErrorBoundary/AuthFallback"
import Fallback from "@pages/RouteErrorBoundary/Fallback"
import NotFound from "@pages/RouteErrorBoundary/NotFound"

const RouteErrorBoundary = () => {
  const error = useRouteError()
  const navigate = useNavigate()
  if (isAxiosError(error)) {
    if (!error.response) {
      return <Fallback />
    } else if (error.response.status === 401) {
      if (
        error.response.data.status === "EXPIRED_REFRESH_TOKEN_EXCEPTION" ||
        error.response.data.status === "MALFORMED_JWT_EXCEPTION"
      ) {
        navigate("/")
        Toast.error("로그인 세션이 만료되었습니다. 재 로그인 해주세요.")
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("rememberMe")
      } else {
        return <AuthFallback />
      }
    } else if (error.response.status === 404) {
      return <NotFound />
    } else {
      if (error.response.data.statusMessage) {
        Toast.error(error.response.data.statusMessage)
      } else {
        Toast.error(error.response.data)
      }
    }
  } else if (isRouteErrorResponse(error)) {
    return <NotFound />
  } else {
    return <Fallback />
  }
}

export default RouteErrorBoundary
