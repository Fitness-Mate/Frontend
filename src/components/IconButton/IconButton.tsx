import { ButtonHTMLAttributes } from "react"

import Icon, { ICON_MAP } from "@components/Icon/Icon"

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: keyof typeof ICON_MAP
  onClick?: (e: React.MouseEvent) => void
}

const IconButton = ({ icon, onClick, ...props }: IconButtonProps) => {
  return (
    <button
      {...props}
      onClick={onClick}>
      <Icon
        icon={icon}
        aria-hidden
      />
    </button>
  )
}

export default IconButton
