import IconButton from "@components/IconButton/IconButton"

const ModalCloseButton = () => {
  return (
    <IconButton
      icon="CloseBold"
      size={14}
      style={{
        position: "absolute",
        top: "24px",
        right: "24px",
      }}
    />
  )
}

export default ModalCloseButton
