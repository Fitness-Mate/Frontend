import Bottom from "@components/Bottom/Bottom"
import RoundButton from "@components/Button/RoundButton"

interface FooterProps {
  handleNextPage: () => void
  selectedBodyPartLength: number
}

const Footer = ({ handleNextPage, selectedBodyPartLength }: FooterProps) => {
  return (
    <Bottom flex="space-between">
      <Bottom.Text>
        {selectedBodyPartLength}개<Bottom.SubText> 부위 선택됨</Bottom.SubText>
      </Bottom.Text>
      <RoundButton
        onClick={handleNextPage}
        variant="black"
        size="big"
        rightIcon="RightArrowWhite"
        disabled={selectedBodyPartLength <= 0}>
        다음
      </RoundButton>
    </Bottom>
  )
}

export default Footer
