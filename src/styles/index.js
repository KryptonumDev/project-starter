import { createGlobalStyle } from "styled-components";
import "./fonts.css"
import "./normalize.css"

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16rem;
    line-height: 1.5;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    min-width: 320px;
  }
  *:focus {
    outline: none
  }
  *:focus-visible {
    outline: 1px solid red;
  }
`
export default GlobalStyle