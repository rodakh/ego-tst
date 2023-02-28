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
  }

  ,
  ul {
    list-style: none;
  }

  ,
  a {
    text-decoration: none;
  }

  .nav-link {
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    transition: color 0.3s ease-in-out;
    text-decoration: none;
  }

  .nav-link--disabled {
    color: #737373;
    cursor: not-allowed;
  }
  .nav-link.nav-link--disabled:hover {
    color: #737373;
  }

  .nav-link:hover {
    color: red;
  }

  .nav-link.active {
    color: red;
  }

  .nav-user {
    color: #000;
    font-size: 1rem;
    padding: 10px 12px;
    border-radius: 5px;
    background-color: #fff;
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  .nav-user:hover {
    color: red;
    background-color: transparent;
  }
`

export default GlobalStyles
