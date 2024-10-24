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
      height: "",
      weight: "",
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
        message: "유효하지 않은 아이디입니다.",
      },
    },
  },
  birthDate: {
    attributes: {
      placeholder: "YYYY-MM-DD",
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
    attributes: {
      placeholder: "이메일을 입력해주세요",
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
    },
  },
  height: {
    attributes: {
      placeholder: "숫자만 입력",
    },
    validate: {
      required: { value: true, message: "키는 필수 입력입니다." },
      pattern: {
        value: /^\d{3}$/,
        message: "키는 세자리로만 입력이 가능합니다.",
      },
    },
  },
  weight: {
    attributes: {
      placeholder: "숫자만 입력",
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
    validate: {
      required: { value: true, message: "" },
      pattern: {
        value: /^\d{2}$/,
        message: "",
      },
    },
  },
  muscleMass: {
    validate: {
      required: { value: true, message: "" },
      pattern: {
        value: /^\d{2}$/,
        message: "",
      },
    },
  },
}

export const COMPLETE_Nav = [
  [
    "recommend",
    {
      title: "추천 받기",
      message: "AI가 신체 정보에 알맞은 운동/보조제를 추천해드려요.",
      url: "/recommend/prolog",
    },
  ],
  [
    "routine",
    {
      title: "루틴 만들기",
      message: "추천 받은 운동으로 루틴을 만들어 보세요.",
      url: "/mypage",
    },
  ],
  [
    "search",
    {
      title: "검색하기",
      message: "다양한 종류의 운동/보조제를 검색해보세요.",
      url: "/searchworkout",
    },
  ],
]

export const SEX_GROUP = ["남성", "여성"]

export const BODYINFO_LIST = [
  ["height", "키"],
  ["weight", "몸무게"],
]

export const CATEGORY_LIST = [
  ["근육질 체형", [10, 40]],
  ["마른 체형", [15, 30]],
  ["보통 체형", [18, 35]],
  ["통통한 체형", [20, 35]],
  ["뚱뚱한 체형", [25, 35]],
]
