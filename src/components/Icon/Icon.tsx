import { SVGProps } from "react"

import Add from "@assets/icon/add.svg?react"
import AddBoldBlue from "@assets/icon/add_bold_blue.svg?react"
import AddBoldGray from "@assets/icon/add_bold_gray.svg?react"
import AddRound from "@assets/icon/add_round.svg?react"
import AddRoundGray from "@assets/icon/add_round_gray.svg?react"
import Avatar from "@assets/icon/avatar.svg?react"
import ChangeCircle from "@assets/icon/change_circle.svg?react"
import Check from "@assets/icon/check.svg?react"
import CircleChecked from "@assets/icon/circle_checked.svg?react"
import CircleCheckedGreen from "@assets/icon/circle_checked_green.svg?react"
import CircleEmpty from "@assets/icon/circle_empty.svg?react"
import CircleFill from "@assets/icon/circle_fill.svg?react"
import Close from "@assets/icon/close.svg?react"
import CloseBold from "@assets/icon/close_bold.svg?react"
import CloseRound from "@assets/icon/close_round.svg?react"
import CloseRoundSmall from "@assets/icon/close_round_small.svg?react"
import CloseWhite from "@assets/icon/close_white.svg?react"
import DownArrow from "@assets/icon/down_arrow.svg?react"
import DownArrowGray from "@assets/icon/down_arrow_gray.svg?react"
import Ellipsis from "@assets/icon/ellipsis.svg?react"
import ExclamationMark from "@assets/icon/exclamation_mark.svg?react"
import LeftArrow from "@assets/icon/left_arrow.svg?react"
import LeftArrowBig from "@assets/icon/left_arrow_big.svg?react"
import LeftArrowBlack from "@assets/icon/left_arrow_black.svg?react"
import LeftArrowBold from "@assets/icon/left_arrow_bold.svg?react"
import LeftArrowGrey from "@assets/icon/left_arrow_grey.svg?react"
import LeftArrowWhite from "@assets/icon/left_arrow_white.svg?react"
import MinusRound from "@assets/icon/minus_round.svg?react"
import Pencil from "@assets/icon/pencil.svg?react"
import PencilRound from "@assets/icon/pencil_round.svg?react"
import PlayRound from "@assets/icon/play_round.svg?react"
import RightArrowBig from "@assets/icon/right_arrow_big.svg?react"
import RightArrowRound from "@assets/icon/right_arrow_round.svg?react"
import RightArrowWhite from "@assets/icon/right_arrow_white.svg?react"
import Search from "@assets/icon/search.svg?react"
import SearchRound from "@assets/icon/search_round.svg?react"
import SearchWhite from "@assets/icon/search_white.svg?react"
import Star from "@assets/icon/star.svg?react"
import Tooltip from "@assets/icon/tooltip.svg?react"
import Trash from "@assets/icon/trash.svg?react"
import UpArrow from "@assets/icon/up_arrow.svg?react"

export const ICON_MAP = {
  Add,
  AddRound,
  ChangeCircle,
  CloseBold,
  Check,
  Close,
  CircleCheckedGreen,
  CircleChecked,
  CircleEmpty,
  CircleFill,
  CloseRound,
  DownArrow,
  UpArrow,
  Ellipsis,
  ExclamationMark,
  LeftArrowBig,
  LeftArrow,
  MinusRound,
  PencilRound,
  Pencil,
  PlayRound,
  RightArrowBig,
  SearchRound,
  Search,
  Trash,
  Star,
  LeftArrowBold,
  RightArrowRound,
  Tooltip,
  LeftArrowBlack,
  LeftArrowWhite,
  LeftArrowGrey,
  RightArrowWhite,
  Avatar,
  CloseRoundSmall,
  SearchWhite,
  CloseWhite,
  DownArrowGray,
  AddRoundGray,
  AddBoldBlue,
  AddBoldGray,
}

export interface IconProps extends SVGProps<SVGSVGElement> {
  icon: keyof typeof ICON_MAP
  size?: number
  stroke?: string
  color?: string
}

const Icon = ({ icon, size = 15, stroke, color, ...props }: IconProps) => {
  const IconComponent = ICON_MAP[icon]
  const sizePx = `${size}px`
  return (
    IconComponent && (
      <IconComponent
        width={sizePx}
        height={sizePx}
        stroke={stroke}
        fill={color}
        {...props}
      />
    )
  )
}

export default Icon
