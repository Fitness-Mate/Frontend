import { useNavigate } from "react-router-dom"

import { mutationKey } from "constants/mutationKey"
import { toastMessage } from "constants/toastMessage"
import { useUserStore } from "stores/useUserStore"

import { useMutation } from "@tanstack/react-query"

import { Toast } from "@components/Toast/Toast"

import authAPI from "@apis/domain/auth"

import { SignupPayload } from "@typpes/type"

import { CustomError } from "../../apis/instance"

export const usePostSignup = () => {
  const navigate = useNavigate()
  const { saveUser } = useUserStore()
  return useMutation({
    mutationKey: [mutationKey.POST_SIGNUP],
    mutationFn: async (submission: SignupPayload) =>
      await authAPI.postUser(submission),
    onSuccess: async (data) => {
      if (!data.data) {
        return
      }
      const { accessToken, refreshToken, rememberMe } = data.data
      authAPI.fetchUser().then((res) => {
        saveUser(res)
      })
      localStorage.setItem("accessToken", accessToken)
      localStorage.setItem("refreshToken", refreshToken)
      localStorage.setItem("rememberMe", rememberMe.toString())
      navigate("/signup/complete")
      Toast.success(toastMessage.SUCCESS.SIGNUP)
    },

    onError: (error: CustomError) => {
      if (error.response?.data?.statusMessage) {
        Toast.error(error.response?.data?.statusMessage)
      } else {
        Toast.error(error.response?.data)
      }
    },
  })
}
