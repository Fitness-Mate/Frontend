import * as S from "../StyledSignup";
import { useRecoilState } from "recoil";
import { ProfileInput } from "../../../components";
import { useNavigate } from "react-router-dom";
import {
  nextButtonValidate,
  profileState,
  validationState,
} from "./../../../recoil/atom";

// 회원가입 페이지에 대한 정보를 모두 담는 컴포넌트
// 우선 이메일은
const SignupProfile = () => {
  const navigate = useNavigate();
  const [isValidState, setIsValidState] = useRecoilState(validationState);
  const [isprofileState, isSetProfileState] = useRecoilState(profileState);
  const [isNextButton, setIsNextButton] = useRecoilState(nextButtonValidate);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsNextButton(true);
    // 모든 유효성 검사 + 이메일 중복 확인을 만족해야 다음으로 넘어감

    if (
      Object.entries(isValidState).filter(([key, value]) => {
        return value[1] === true;
      }).length === 5
    ) {
      // 전역 데이터에 등록
      Object.entries(isValidState).forEach(([key, value]) => {
        isSetProfileState((pre) => ({
          ...pre,
          [key]: [value[0], value[1], value[2]],
        }));
      });
      navigate(`bodyinfo`);
    }
  };

  // 필드 변경 시 마다 호출

  // profile 유효성

  return (
    // 리액트의 Form 태그(엔터나 버튼누를시 자동 제출)
    <S.SignupContainer>
      <S.SignupTitle>
        <S.TitleEmphasis>회원정보</S.TitleEmphasis>를 입력해주세요.
      </S.SignupTitle>
      <form onSubmit={handleSubmit}>
        <ProfileInput
          placeholder="이름을 입력해주세요 (2자리 이상 10자리 이하)"
          name="username"
        >
          이름
        </ProfileInput>
        <ProfileInput
          placeholder="생년월일을 입력해주세요 ex) 1998-06-16"
          name="birthdate"
        >
          생년월일
        </ProfileInput>
        <ProfileInput placeholder="이메일을 입력해주세요" name="email">
          이메일
        </ProfileInput>
        <ProfileInput
          placeholder="비밀번호를 입력해주세요 (8자리 이상)"
          name="password"
        >
          비밀번호
        </ProfileInput>
        <button
          className="nextButton"
          type="submit" // 버튼이 두개이므로 타입 명시
        >
          다음으로
        </button>
      </form>
    </S.SignupContainer>
  );
};

export default SignupProfile;
