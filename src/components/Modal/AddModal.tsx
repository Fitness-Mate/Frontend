// @ts-nocheck
import * as S from "./StyledAddModal"

export const AddModal = ({ setAddModal }) => {
  return (
    <S.ModalWrapper>
      <img
        src={require("../../assets/images/xbutton.png")}
        alt="모달 창 닫기 버튼"
        onClick={() => {
          setAddModal(false)
        }}
      />
    </S.ModalWrapper>
  )
}
