import { StatusBarBox, StatusBarItem } from "./StyledStatusBar"

export interface StatusbarProps {
  status: number
}

const StatusBar = ({ status }: StatusbarProps) => {
  return (
    <StatusBarBox>
      <StatusBarItem $status={status} />
    </StatusBarBox>
  )
}

export default StatusBar
