import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { EDIT_INPUTS, EDIT_LIST } from "constants/validation"
import { omit } from "lodash"

import Button from "@components/Button/Button"
import Input from "@components/Input/Input"
import AlertModal from "@components/Modal/components/Alert/AlertModal"
import SuccessModal from "@components/Modal/components/Success/SuccessModal"

import { EditUserPasswordPayload } from "@typpes/type"

import { usePostEditPassword } from "@hooks/mutation/usePostEditPassword"

import { formAdapter } from "@utils/formAdapter"

import * as S from "./StyledEditProfile"

interface PasswordPayload extends EditUserPasswordPayload {
  newPasswordCheck: string
}

const DEFAULT_VALUES = {
  oldPassword: "",
  newPassword: "",
  newPasswordCheck: "",
}

const EditPassword = () => {
  const navigate = useNavigate()
  const { mutate: editPassword, isSuccess, data } = usePostEditPassword()

  const { register, formState, handleSubmit, reset, watch, trigger } =
    useForm<PasswordPayload>({
      mode: "onChange",
      defaultValues: DEFAULT_VALUES,
    })

  const onSubmit = (formValue: PasswordPayload) => {
    const editedPasswordPayload = omit(formValue, ["newPasswordCheck"])
    editPassword(editedPasswordPayload)
    if (isSuccess && data.data === "ok") {
      reset(DEFAULT_VALUES, { keepDefaultValues: false })
    }
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <S.EditProfileForm
      noValidate
      onSubmit={handleSubmit(onSubmit)}>
      <S.EditFormWrapper>
        <S.EditProfileTitle>비밀번호 변경</S.EditProfileTitle>
        <S.EditProfileList>
          {EDIT_LIST.PASSWORD.map(({ id, name, label }) => (
            <Input
              key={id}
              style={{
                marginTop:
                  id === EDIT_LIST.PASSWORD.length - 1 ? "-2.9rem" : "0",
              }}>
              {label && (
                <Input.Label
                  htmlFor={name}
                  isRequired>
                  {label}
                </Input.Label>
              )}
              <Input.Input
                variant="edit"
                props={{
                  ...formAdapter({
                    register,
                    name,
                    validator: {
                      ...EDIT_INPUTS.PASSWORD[name],
                      validate: {
                        ...EDIT_INPUTS.PASSWORD[name].validate,
                        validate: (value) => {
                          if (name === "newPasswordCheck") {
                            const newPassword = watch("newPassword")
                            return (
                              value === newPassword ||
                              "비밀번호가 일치하지 않습니다."
                            )
                          } else {
                            trigger("newPasswordCheck")
                            return true
                          }
                        },
                      },
                    },
                    $isDirty: !!formState.dirtyFields[name],
                    $isError: !!formState.errors[name],
                  }),
                }}
              />
              <Input.Error>{formState?.errors[name]?.message}</Input.Error>
            </Input>
          ))}
        </S.EditProfileList>
      </S.EditFormWrapper>
      <S.EditButtonContainer>
        <Button
          variant="text"
          size="full"
          type="button"
          onClick={handleBack}>
          이전
        </Button>

        <Button
          variant="main"
          size="full"
          type="submit">
          비밀번호 변경 완료
        </Button>
      </S.EditButtonContainer>
      <SuccessModal />
      <AlertModal />
    </S.EditProfileForm>
  )
}

export default EditPassword
