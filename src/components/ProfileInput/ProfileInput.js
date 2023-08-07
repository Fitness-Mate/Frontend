import * as S from "./StyledProfileInput";
import { userIdVerifyAPI } from "../../apis/API";
import { nextButtonValidate, validationState } from "../../recoil/atom";
import ProfileInputContent from "./ProfileInputContet";
import { useRecoilState } from "recoil";

// 회원정보 입력창
// isChecked : 체크여부
// placeholder : Input창 마다 다양해서 Home에서 받아옴
// children : 아이디/비밀번호/이메일 등등..
const ProfileInput = ({ placeholder, children, name }) => {
  const [isValidateChecked, setIsValidateChecked] =
    useRecoilState(validationState);
  const [isNextButton, setIsNextButton] = useRecoilState(nextButtonValidate);

  const emailOk = (name) => {
    setIsValidateChecked((pre) => ({
      ...pre,
      [name]: [isValidateChecked[name][0], true, isValidateChecked[name][2]],
    }));
  };

  const emailNotOk = (name) => {
    setIsValidateChecked((pre) => ({
      ...pre,
      [name]: [isValidateChecked[name][0], false, isValidateChecked[name][2]],
    }));
  };

  // 이메일 중복 체크
  // 공백으로 이메일 중복확인 했을 때 예외처리 필요(지금은 다시 썼다 지우고 중복확인하면 오류)
  const duplicateCheck = async () => {
    const verifyResponse = await userIdVerifyAPI.post(
      isValidateChecked.email[0]
    );
    if (verifyResponse.data === "ok") {
      return true;
    }
    return false;
  };

  return (
    <S.ProfileInputContainer content={children}>
      <S.InputName>
        {children}
        <span className="essentialSymbol"> *</span>
      </S.InputName>
      {/* 체크가 되지 않았을때만 Warning 문구 */}
      <ProfileInputContent placeholder={placeholder} name={name} />
      {/* 비밀번호 입력창에만 재확인 입력창을 하나 더 추가 */}
      {children === "비밀번호" && (
        <ProfileInputContent placeholder="비밀번호 재확인" name="password2" />
      )}
      {name === "email" && (
        <button
          className="duplicateButton"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            // 중복 확인(Promise_)
            duplicateCheck().then((isVerified) => {
              if (isVerified) {
                emailOk(name);
              } else {
                emailNotOk(name);
              }
            });
          }}
        >
          중복확인
        </button>
      )}
      {isNextButton ? (
        isValidateChecked[name][1] ? (
          name === "email" ? (
            <span className="profileInputChecking">
              사용 가능한 이메일입니다
            </span>
          ) : (
            ""
          )
        ) : (
          <span className="profileInputWarning">
            {children} 생성규칙에 맞지 않습니다
          </span>
        )
      ) : (
        ""
      )}
    </S.ProfileInputContainer>
  );
};

export default ProfileInput;
