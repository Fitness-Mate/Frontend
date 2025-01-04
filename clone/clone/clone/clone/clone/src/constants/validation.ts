import { ChangeEvent } from "react"

export const SIGNUP_INPUTS = {
  DEFAULT_VALUES: {
    PROFILE: {
      userName: "",
      birthDate: "",
      loginEmail: "",
      password: "",
      passwordCheck: "",
    },
    BODYINFO: {
      sex: "남성",
      height: 0,
      weight: 0,
    },
    BODYFIGURE: {
      upDownBalance: 0,
      bodyFat: 0,
      muscleMass: 0,
    },
  },
  userName: {
    attributes: {
      placeholder: "2자리 이상",
    },
    validate: {
      required: { value: true, message: "이름은 필수 입력입니다." },
      pattern: {
        value: /^[가-힣]{3,8}$/,
        message: "유효하지 않은 이름입니다.",
      },
    },
  },
  birthDate: {
    attributes: {
      placeholder: "YYYY-MM-DD",
      maxLength: 10,
    },
    validate: {
      required: {
        value: true,
        message: "생년월일은 필수 입력입니다.",
      },
      pattern: {
        value: /^\d{4}-\d{2}-\d{2}$/,
        message: "유효하지 않은 생년월일입니다.",
      },
    },
  },
  loginEmail: {
    attributes: {
      placeholder: "이메일을 입력해주세요",
      type: "email",
    },
    validate: {
      required: { value: true, message: "이메일은 필수 입력입니다." },
      pattern: {
        value: /^(.+)@(\S+)$/,
        message: "유효하지 않은 이메일입니다.",
      },
    },
  },
  password: {
    attributes: {
      placeholder: "8자리 이상 영문, 숫자 조합",
      type: "password",
    },
    validate: {
      required: { value: true, message: "비밀번호는 필수 입력입니다." },
      pattern: {
        value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
        message: "유효하지 않은 비밀번호 입니다.",
      },
    },
  },
  passwordCheck: {
    attributes: {
      placeholder: "비밀번호 확인",
      type: "password",
    },
  },
  height: {
    attributes: {
      placeholder: "숫자만 입력",
      type: "number",
    },
    validate: {
      required: { value: true, message: "키는 필수 입력입니다." },
      pattern: {
        value: /^\d{3}$/,
        message: "키는 세자리 로만 입력이 가능합니다.",
      },
    },
  },
  weight: {
    attributes: {
      placeholder: "숫자만 입력",
      type: "number",
    },
    validate: {
      required: { value: true, message: "몸무게는 필수 입력입니다." },
      pattern: {
        value: /^\d{2,3}$/,
        message: "몸무게는 두,세자리까지만 입력이 가능합니다.",
      },
    },
  },
  bodyFat: {
    attributes: {
      placeholder: "",
      type: "number",
    },
    validate: {
      required: { value: true, message: "" },
      pattern: {
        value: /^\d{2}$/,
        message: "",
      },
    },
  },
  muscleMass: {
    attributes: {
      placeholder: "",
      type: "number",
    },
    validate: {
      required: { value: true, message: "" },
      pattern: {
        value: /^\d{2}$/,
        message: "",
      },
    },
  },
}

export const SEX_GROUP = [
  { groupName: "남성", imgSrc: "@assets/images/남성.png", id: 0 },
  { groupName: "여성", imgSrc: "@assets/images/여성.png", id: 1 },
]

export const BODYINFO_LIST = [
  { id: 1, name: "height", label: "키" },
  { id: 2, name: "weight", label: "몸무게" },
] as const

export const CATEGORY_LIST = [
  {
    id: 0,
    name: "근육질 체형",
    bodyFat: 10,
    muscleMass: 40,
  },
  {
    id: 1,
    name: "마른 체형",
    bodyFat: 15,
    muscleMass: 30,
  },
  {
    id: 2,
    name: "보통 체형",
    bodyFat: 18,
    muscleMass: 35,
  },
  {
    id: 3,
    name: "통통한 체형",
    bodyFat: 20,
    muscleMass: 35,
  },
  {
    id: 4,
    name: "뚱뚱한 체형",
    bodyFat: 25,
    muscleMass: 35,
  },
] as const

export const SIGNUP_LIST: Array<{
  id: number
  name: Exclude<
    keyof typeof SIGNUP_INPUTS.DEFAULT_VALUES.PROFILE,
    "passwordCheck"
  >
  label: string
  isRequired: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}> = [
  {
    id: 0,
    name: "userName",
    label: "이름",
    isRequired: true,
  },
  {
    id: 1,
    name: "birthDate",
    label: "생년월일",
    isRequired: true,
  },
  {
    id: 2,
    name: "loginEmail",
    label: "이메일",
    isRequired: true,
  },
  {
    id: 3,
    name: "password",
    label: "비밀번호",
    isRequired: true,
  },
] as const

export const LOGIN_INPUTS = {
  DEFAULT_VALUES: {
    loginEmail: "",
    password: "",
  },
  loginEmail: {
    attributes: {
      placeholder: "이메일",
      type: "email",
    },
    validate: {
      required: { value: true, message: "" },
      pattern: {
        value: /^(.+)@(\S+)$/,
        message: "",
      },
    },
  },
  password: {
    attributes: {
      placeholder: "비밀번호",
      type: "password",
    },
    validate: {
      required: { value: true, message: "" },
      pattern: {
        value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
        message: "",
      },
    },
  },
}

export const SEARCH_INPUTS = {
  search: {
    validate: {
      required: { value: true, message: "" },
    },
    attributes: {
      placeholder: "어떤 운동이 좋을까요?",
    },
  },
}

export const LOGIN_LIST = [
  { id: 0, name: "loginEmail" },
  { id: 1, name: "password" },
] as const

export const EDIT_LIST = {
  PROFILE: [
    { id: 0, name: "userName", label: "이름", isDisabled: false },
    { id: 1, name: "birthDate", label: "생년월일", isDisabled: false },
    { id: 2, name: "loginEmail", label: "이메일", isDisabled: true },
  ],
  PASSWORD: [
    { id: 0, name: "oldPassword", label: "현재 비밀번호" },
    { id: 1, name: "newPassword", label: "신규 비밀번호" },
    { id: 2, name: "newPasswordCheck", label: "" },
  ],
} as const

export const EDIT_INPUTS = {
  PROFILE: {
    userName: {
      attributes: {
        placeholder: "2자리 이상",
      },
      validate: {
        disabled: false,
        required: { value: true, message: "이름은 필수 입력입니다." },
        pattern: {
          value: /^[가-힣]{3,8}$/,
          message: "유효하지 않은 이름입니다.",
        },
      },
    },
    birthDate: {
      attributes: {
        placeholder: "YYYY-MM-DD",
        maxLength: 10,
      },
      validate: {
        required: { value: true, message: "생년월일은 필수 입력입니다." },
        pattern: {
          value: /^\d{4}-\d{2}-\d{2}$/,
          message: "유효하지 않은 생년월일입니다.",
        },
      },
    },
    loginEmail: {
      validate: {
        disabled: true,
      },
    },
  },
  PASSWORD: {
    oldPassword: {
      attributes: {
        placeholder: "현재 비밀번호",
      },
      validate: {
        required: { value: true, message: "" },
        pattern: {
          value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
          message: "비밀번호 생성 규칙에 맞지 않습니다.",
        },
      },
    },
    newPassword: {
      attributes: {
        placeholder: "신규 비밀번호 입력",
      },
      validate: {
        required: { value: true, message: "" },
        pattern: {
          value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
          message: "비밀번호 생성 규칙에 맞지 않습니다.",
        },
      },
    },
    newPasswordCheck: {
      attributes: {
        placeholder: "신규 비밀번호 재입력",
      },
      validate: {},
    },
  },
}
