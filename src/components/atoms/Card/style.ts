/* ----------------- External ----------------- */
import Styled, { css } from 'styled-components';

export const HitboxContainer = Styled.div`
  margin: 0px 0.37vw;
  color: green;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: flex-end;
  height: 10vw;
  width: 18vw;
  flex: 0 0 17.8vw;
  position: relative;
  :first-child {
    margin-left: 3.5vw;
  }
  div {
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const MainContainer = Styled.div`
  ${({
    BiggerCard,
    transitionCard,
    index,
    currentPage,
  }: {
    BiggerCard: boolean;
    transitionCard: boolean;
    index: number;
    currentPage: number;
  }) => css`
    position: absolute;
    z-index: 0;
    background: rgb(70, 70, 70);
    background: linear-gradient(
      180deg,
      rgba(70, 70, 70, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    height: 10vw;
    width: 18vw;
    top: 0px;
    left: 0px;
    transition: width 0.15s, height 0.15s, top 0.15s, left 0.15s, right 0.15s;
    ${transitionCard &&
    `
      z-index: 3 ;
    `}
    ${BiggerCard &&
    `
      height: 22vw;
      width: 25vw;
      top: -6vw;
      left: -3vw;
      ${
        index % 5 === 0
          ? `
            left: -6vw;
          `
          : ''
      }
      ${
        (index === 1 || index === 6 * currentPage - (currentPage - 1)) &&
        `
        left: 0px;
        `
      }
    `}
  `}
`;

export const ImageContainer = Styled.div`
    align-items: center !important;
    justify-content: flex-end !important;
    height: 100%;
    width: 100%;
    max-height:14vw !important;
    img {
      position: relative !important;
    }
`;
