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
    font-size:1.4vw;
    scrollbar-width: 5px;
    scrollbar-color: #333333 #cccccc;
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #cccccc;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #333333;
      border-radius: 10px;
    }
  }
  html{
    scroll-behavior:smooth;
    scroll-margin-top: -100px;
  }
  html, body {
    cursor: default;
    z-index: 0;
  }
  body {
    overflow-y:hidden;
  }
  main {
    padding: 0%;
    display: flex;
    flex-direction: column;
  }
`;
