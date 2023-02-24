import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    html, body {
      font-size: 100%;
      min-height: 100vh;
    },
    ul {
      list-style: none;
    },
    a {
      text-decoration: none;
    }
`

export default GlobalStyles
