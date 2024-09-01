import { instance } from "@apis/instance"

export interface fetchUserProps {
  userName: string
  loginEmail: string
  sex: string
  birthDate: string
}

// 사용자 가입
const postUser = (data) => instance.post("/api/user/auth", data)

// 사용자 정보 수정(토큰)
const modifyUser = (data) => instance.post("/api/user/private", data)

// 사용자 비밀번호 수정(토큰)
const modifyPassword = (data) =>
  instance.post("/api/user/private/password", data)

// 사용자 정보 조회(토큰)
const fetchUser = (): Promise<fetchUserProps> =>
  instance.get<fetchUserProps>("/api/user/private").then((res) => res.data)

// 회원 탈퇴(토큰)
const deleteUser = (password) => instance.post("/api/user/delete", password)

const login = (data) => instance.post("/api/auth/login", data)

// refresh토큰 필요
const logout = () => instance.get<Props>("/api/auth/logout")

// accessToken 재발급(refersh 토큰 필요)
const getAccessToken = () => instance.get("/api/auth/refresh")

const authAPI = {
  postUser,
  modifyUser,
  modifyPassword,
  fetchUser,
  deleteUser,
  login,
  logout,
  getAccessToken,
}

export default authAPI
