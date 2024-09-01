import { ProgressBarBox, ProgressBarItem } from "./StyledProgressBar"

export interface ProgressBarProps {
  progress: number
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <ProgressBarBox>
      <ProgressBarItem $progress={progress} />
    </ProgressBarBox>
  )
}

export default ProgressBar
