import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom"

import { isAxiosError } from "axios"

import Fallback from "@pages/RouteErrorBoundary/Fallback"

const RouteErrorBoundary = () => {
  const error = useRouteError()
  const navigate = useNavigate()
  if (isAxiosError(error)) {
    if (!error.response) {
      return (
        <Fallback
          title={"존재하지 않는 페이지입니다"}
          navText={"홈으로"}
          clickHandler={() => {
            navigate("/")
          }}
        />
      )
    } else if (error.response.status === 401) {
      return (
        <Fallback
          title={"로그인이 필요한 페이지입니다"}
          navText={"로그인하러 가기"}
          clickHandler={() => {
            navigate("/login")
          }}
        />
      )
    } else {
      return (
        <Fallback
          title={"예상치못한 오류가 발생했습니다"}
          clickHandler={() => {
            navigate("/")
          }}
        />
      )
    }
  } else if (isRouteErrorResponse(error)) {
    return (
      <Fallback
        title={"존재하지 않는 페이지입니다"}
        clickHandler={() => {
          navigate("/")
        }}
      />
    )
  } else {
    return (
      <Fallback
        title={"예상치못한 오류가 발생했습니다"}
        clickHandler={() => {
          navigate("/")
        }}
      />
    )
  }
}

export default RouteErrorBoundary
