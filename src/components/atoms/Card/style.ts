/* ----------------- External ----------------- */
import Styled, { css } from 'styled-components';

export const HitboxContainer = Styled.div`
    margin: 0px 0.37vw;
    color: green;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: flex-end;
    min-height: 11vw;
    width: 17.8;
    flex: 1 0 17.8vw;
    position: relative;
    :first-child {
      margin-left: 3.5vw; 
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
  }) => {
    return css`
      z-index: 0 !important;
      padding: 5px;
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: flex-end;
      background: rgb(70, 70, 70);
      background: linear-gradient(
        180deg,
        rgba(70, 70, 70, 1) 0%,
        rgba(0, 0, 0, 1) 100%
      );
      border-radius: 3px;
      height: 11vw;
      width: 17.8vw;
      position: absolute !important;
      top: 0px;
      left: 0px;
      transition: width 0.15s, height 0.15s, top 0.15s, left 0.15s, right 0.15s;
      ${transitionCard &&
      `
      z-index: 3 !important;
    `}
      ${BiggerCard &&
      `
      height: 21vw;
      width: 24vw;
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
    `;
  }}
`;
