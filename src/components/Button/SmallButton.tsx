// @ts-nocheck
// < 가로길이가 짧은 버튼 >
import * as S from "./StyledButton"

function SmallButton({ children, handleSubmit, isReady }) {
  return (
    <S.SmallButtonWrapper
      onClick={handleSubmit}
      isReady={isReady}>
      {children}
    </S.SmallButtonWrapper>
  )
}

export default SmallButton
