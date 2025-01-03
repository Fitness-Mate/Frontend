import { RouterProvider, createBrowserRouter } from "react-router-dom"

import MainLayout from "@Layout/Mainlayout"

import Detail from "@pages/Detail/Detail"
import Home from "@pages/Home/Home"
import Login from "@pages/Login/Login"
import EditBodyFigure from "@pages/MyPage/Edit/EditBodyFigure"
import EditBodyInfo from "@pages/MyPage/Edit/EditBodyInfo"
import EditPassword from "@pages/MyPage/Edit/EditPassword"
import EditProfile from "@pages/MyPage/Edit/EditProfile"
import MyPage from "@pages/MyPage/Routine/MyPage"
import NotFound from "@pages/NotFound/NotFound"
import BodyPart from "@pages/Recommend/BodyPart/BodyPart"
import Machine from "@pages/Recommend/Machine/Machine"
import Result from "@pages/Recommend/Result/Result"
import Search from "@pages/Search/Search"
import BodyFigure from "@pages/Signup/BodyFigure/BodyFigure"
import BodyInfo from "@pages/Signup/BodyInfo/BodyInfo"
import Complete from "@pages/Signup/Complete/Complete"
import Profile from "@pages/Signup/Profile/Profile"

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <NotFound />,

    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "signup",
        children: [
          { path: "profile", element: <Profile /> },
          { path: "bodyinfo", element: <BodyInfo /> },
          { path: "bodyfigure", element: <BodyFigure /> },
          { path: "complete", element: <Complete /> },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "recommend",
        children: [
          { path: "bodypart", element: <BodyPart /> },
          { path: "machine", element: <Machine /> },
          { path: "result", element: <Result /> },
        ],
      },
      {
        path: "searchworkout",
        element: <Search />,
      },
      {
        path: "workoutdetail/:workoutId",
        element: <Detail />,
      },
      {
        path: "mypage",
        children: [
          { path: "", element: <MyPage /> },
          { path: "profile", element: <EditProfile /> },
          { path: "bodyfigure", element: <EditBodyFigure /> },
          { path: "bodyinfo", element: <EditBodyInfo /> },
          { path: "password", element: <EditPassword /> },
        ],
      },
    ],
  },
])

const Navigator = () => {
  return <RouterProvider router={router} />
}

export default Navigator
