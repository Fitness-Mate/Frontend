import { Route, Routes } from "react-router-dom"

import SearchHome from "@pages/Search/SearchHome/SearchHome"
import SearchWorkoutDetail from "@pages/Search/SearchWorkoutDetail/SearchWorkoutDetail"

// search 페이지에 대한 정보를 모두 담는 컴포넌트

const Search = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<SearchHome />}
      />
      <Route
        path="workoutdetail"
        element={<SearchWorkoutDetail />}
      />
    </Routes>
  )
}

export default Search
