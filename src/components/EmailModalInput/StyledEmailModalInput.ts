import { styled } from "styled-components"

import theme from "@styles/theme"

export const EmailModalContainer = styled.div`
  position: relative;
  .emailModalContent {
    display: flex;
    height: 56px;
    margin-bottom: 29px;
    width: 100%;
    padding: 14px;
    align-items: center;
    gap: 14px;
    border-radius: 10px;
    border: 1.5px solid ${theme.Netural200};
    background: ${theme.Netural100};
    color: ${theme.Netural100};
    font-size: 18px;
    position: realtive;
  }

  .checkBtn {
    position: absolute;
    top: 18px;
    right: 14px;
    color: ${theme.Netural990};
    font-size: 17px;
    font-weight: 600;
    letter-spacing: -0.34px;
  }
`
