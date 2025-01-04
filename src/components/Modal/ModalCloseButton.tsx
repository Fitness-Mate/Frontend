import IconButton from "@components/IconButton/IconButton"

const ModalCloseButton = () => {
  return (
    <IconButton
      icon="CloseBold"
      size={14}
      style={{
        position: "absolute",
        top: "2.4rem",
        right: "2.4rem",
      }}
    />
  )
}

export default ModalCloseButton
