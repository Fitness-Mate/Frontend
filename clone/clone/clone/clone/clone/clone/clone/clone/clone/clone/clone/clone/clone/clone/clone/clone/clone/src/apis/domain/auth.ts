import { instance } from "@apis/instance"

import {
  EditUserPasswordPayload,
  EditUserPayload,
  GetAccessTokenResponse,
  PostLoginPayload,
  PostLoginResponse,
  PostUserDeletePayload,
  SignupPayload,
  SignupResponse,
  User,
} from "@typpes/type"

const postUser = (data: SignupPayload) =>
  instance.post<SignupResponse>("/api/user/auth", data)

const editUser = (data: EditUserPayload) =>
  instance.post("/api/user/private", data)

const editPassword = (data: EditUserPasswordPayload) =>
  instance.post("/api/user/private/password", data)

const fetchUser = () =>
  instance.get<User>("/api/user/private").then((res) => res.data)

const deleteUser = (data: PostUserDeletePayload) =>
  instance.post("/api/user/delete", data)

const login = (data: PostLoginPayload) =>
  instance.post<PostLoginResponse>("/api/auth/login", data)

const logout = () => instance.get("/api/auth/logout")

const getAccessToken = () =>
  instance.get<GetAccessTokenResponse>("/api/auth/refresh")

const authAPI = {
  postUser,
  editUser,
  editPassword,
  fetchUser,
  deleteUser,
  login,
  logout,
  getAccessToken,
}

export default authAPI
