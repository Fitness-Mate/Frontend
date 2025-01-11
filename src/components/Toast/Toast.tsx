import { ToastContainer, toast } from "react-toastify"

import styled from "styled-components"

import Close from "@assets/icon/close.svg?react"

import { fonts, theme } from "@styles/theme"

export const StyledToast = styled(ToastContainer)`
  .Toastify__toast {
    background: ${theme.Netural50};
    color: ${theme.Netural900};
    ${fonts.b3};
    width: 38.8rem;
    padding: 1.2rem 1.4rem;
    gap: 0.4rem;
  }
  .Toastify__toast svg {
    margin-left: auto;
  }
`

export const Toast = {
  success: (message: string) => {
    toast.success(message, { closeButton: Close })
  },
  error: (message: string) => {
    toast.error(message, { closeButton: Close })
  },
}
