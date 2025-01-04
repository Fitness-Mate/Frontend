import reset from "styled-reset"

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
${reset}

@font-face {
  font-family: "Pretendard Variable";
  font-weight: 300 500 700;
  font-style: normal;
  font-display: swap;
  src: url("../assets/fonts/PretendardVariable.woff2") format("woff2-variations");
}


    html{
        font-size: 62.5%;
    }

    a{
        text-decoration: none;
        color: inherit;
    }
    *,span,input{
        box-sizing: border-box;
        font-weight:500;
        line-height:normal;
    }
    body, div, span, h1, h2, h3, h4, h5, h6, p,
    a, dl, dt, dd, ol, ul, li, form, label, table,button{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 1rem;
        vertical-align: baseline;
        font-family: 'Pretendard Variable', sans-serif;
        font-weight:500;
        line-height:normal;
        -webkit-font-smoothing: antialiased;

    }


    body{
        width:100%;
        height:100vh;
        overflow-x:hidden !important;
        line-height: 1;

    }

    ol, ul,li{
        list-style: none;
    }
    button {
        font-family: 'Pretendard Variable', sans-serif;
        border: 0;
        background: transparent;
        cursor: pointer;
        outline:none;
    }
    input{
        font-family: 'Pretendard Variable', sans-serif;
        outline:none;
        border:none;
        background:none;
        &:focus{
            outline:none;
        }
        padding:0;
        margin:0;
    }
    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
        }
    img{
        max-width:100%;
    }
`

const GlobalStyles = () => {
  return <GlobalStyle />
}

export default GlobalStyles
