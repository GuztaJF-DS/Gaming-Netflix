import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  @font-face {
    font-family: 'NetflixSans-Regular';
    src: url('/fonts/NetflixSans-Regular.woff2') format('woff2');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  * {
    margin: 0;
    color: white;
    outline: 0;
    box-sizing: border-box;
    font-family: 'NetflixSans-Regular';
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
