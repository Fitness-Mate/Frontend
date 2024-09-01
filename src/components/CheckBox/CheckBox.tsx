// @ts-nocheck
// import checkedIcon from "@assets/images/checkedIcon.png"
// import notCheckedIcon from "@assets/images/notCheckedIcon.png"
import * as S from "./StyledCheckBox"

const CheckBox = ({ children, $isChecked, handleCheckItem, index }) => {
  return (
    <S.CheckBoxWrapper
      $isChecked={$isChecked}
      onClick={() => {
        handleCheckItem(index)
      }}
      type="button">
      <S.CheckBoxImg
        $isChecked={$isChecked}
        src={$isChecked ? checkedIcon : notCheckedIcon}
        alt="옵션 선택 이미지"
      />
      <S.CheckBoxText>{children}</S.CheckBoxText>
    </S.CheckBoxWrapper>
  )
}

export default CheckBox
