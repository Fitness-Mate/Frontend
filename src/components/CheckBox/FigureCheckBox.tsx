// import checkedIcon from "@assets/images/checkedIcon.png"
// import notCheckedIcon from "@assets/images/notCheckedIcon.png"
import { StrictPropsWithChildren } from "@typpes/type"

import * as S from "./StyledCheckBox"

interface FigureCheckBoxProps {
  $isChecked: boolean
  handleCheckItem: (index: number) => void
  index: number
}

const FigureCheckBox = ({
  children,
  $isChecked,
  handleCheckItem,
  index,
}: StrictPropsWithChildren<FigureCheckBoxProps>) => {
  return (
    <S.FigureCheckBoxWrapper
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

      <S.FigureCheckBoxText $isChecked={$isChecked}>
        {children}
      </S.FigureCheckBoxText>
    </S.FigureCheckBoxWrapper>
  )
}

export default FigureCheckBox
