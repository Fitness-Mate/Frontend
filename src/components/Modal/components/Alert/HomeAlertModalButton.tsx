import Button from "@components/Button/Button"

import { useModal } from "@hooks/useModal"

const HomeAlertModalButton = () => {
  const { onOpen } = useModal("알림")
  return (
    <Button
      onClick={onOpen}
      size="lg"
      variant="main">
      루틴 관리
    </Button>
  )
}

export default HomeAlertModalButton
