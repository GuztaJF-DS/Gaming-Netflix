import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 5px;
    color: white;
    outline: 0;
    box-sizing: border-box;
  }
  html{
    scroll-behavior:smooth;
    scroll-margin-top: -100px;
  }
  html, body {
    cursor: default;
    z-index: 0;
    min-height: 100vh;
  }
  main {
    padding: 0%;
    display: flex;
    flex-direction: column;
  }
`;
