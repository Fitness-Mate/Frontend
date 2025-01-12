import * as S from "./StyledProgressBar"

export type Variant = "default" | "round"

export interface ProgressBarProps {
  progress: number
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <S.ProgressBarBox>
      <S.ProgressBarItem $progress={progress} />
    </S.ProgressBarBox>
  )
}

export default ProgressBar
