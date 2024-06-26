import spinner from "@assets/images/spinner.gif"

import { Background, LoadingText } from "./StyledLoading"

const Loading = () => {
  return (
    <Background>
      <img
        src={spinner}
        alt="로딩 애니메이션"
      />
      <LoadingText>분석중...</LoadingText>
    </Background>
  )
}

export default Loading
