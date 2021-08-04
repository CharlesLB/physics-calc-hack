import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: var(--fonts) !important;
  }

  html, body, #root {
    height: 100vh;
    width: 100%;
    position: relative;
    background: var(--color-background);
    font-family: var(--fonts) !important;
    scroll-behavior: smooth;
  }

  button, input, a {
    font-family: var(--fonts) !important;
    text-decoration: none;
    cursor: pointer;
  }

  :root {
    font-size: 16px;
  }`

