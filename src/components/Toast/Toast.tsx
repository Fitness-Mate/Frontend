import { ToastContainer, toast } from "react-toastify"

import styled from "styled-components"

import { fonts, theme } from "@styles/theme"

export const StyledToast = styled(ToastContainer)`
  .Toastify__toast {
    background: ${theme.Netural950};
    color: ${theme.Netural0};
    ${fonts.b3};
    width: 36rem;
  }

  .Toastify__close-button > svg {
    fill: ${theme.Netural0};
  }
  .Toastify__toast-icon > svg {
    fill: ${theme.Netural0};
  }
  .Toastify__close-button--light {
    opacity: 1;
  }
`

export const Toast = {
  success: (message: string) => {
    toast.success(message)
  },
  error: (message: string) => {
    toast.error(message)
  },
}
