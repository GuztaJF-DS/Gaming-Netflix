/* ----------------- External ----------------- */
import Styled, { css } from 'styled-components';

export const HitboxContainer = Styled.div`
  display: flex;
  position: relative;
`;

export const MainContainer = Styled.div`
${({
  DelayHover,
  MainHover,
  Index,
  CurrentPage,
}: {
  DelayHover: boolean;
  MainHover: boolean;
  Index: number;
  CurrentPage: number;
}) => {
  return css`
    border-radius: 5px;
    height: 19.5vw;
    width: 13vw;
    left: 0px;
    top: 0px;
    transition: height 0.4s, width 0.4s, top 0.4s, left 0.4s;
    ${DelayHover &&
    `
      position: absolute;
      z-index:2;
  `}
    ${MainHover &&
    `
      z-index:2;
      left: -1.5vw;
      top: -2.5vw;
      height: 24vw;
      width: 16vw;
    `}
  `;
}}
`;

export const MaskContainer = Styled.div` 
  ${({ MainHover }: { MainHover: boolean }) => css`
    background: rgb(70, 70, 70);
    background: linear-gradient(
      180deg,
      rgba(70, 70, 70, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    border-radius: 5px;
    position: absolute;
    height: 19.5vw;
    width: 13vw;
    ${MainHover &&
    `
      position: static;
    `}
  `}
`;

export const ImageContainer = Styled.div`
    align-items: center !important;
    object-fit: cover;
    justify-content: flex-end !important;
    height: 100%;
    background: transparent;
    width: 100%;
    img {
      position: relative !important;
    }
`;

export const BottomContainer = Styled.div`
  ${({ MainHover }: { MainHover: boolean }) => css`
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: 80%;
    width: 100%;
    height: 20%;
    z-index: 3;
    background: #1b1b1bd8;
    transition: opacity 0.2s;
    opacity: 0;
    ${MainHover &&
    `
      opacity:1;
    `}
  `}
`;

export const NameContainer = Styled.div`
  display: flex;
  width:10vw;
  height: 100%;
  overflow: hidden; 
  font-size:85%;
  padding-left:4px;
  align-items:center;
`;
