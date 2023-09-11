/* ----------------- External ----------------- */
import Styled, { css } from 'styled-components';

export const HitboxContainer = Styled.div`
  display: flex;
  position: relative;
`;

export const MainContainer = Styled.div`
${({
  Hovering,
  LargerCard,
  index,
}: {
  Hovering: boolean;
  LargerCard: boolean;
  index: number;
}) => {
  const currentPage = Math.ceil(index / 6);
  return css`
    background: rgb(70, 70, 70);
    background: linear-gradient(
      180deg,
      rgba(70, 70, 70, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    height: 19vw;
    width: 13.57vw;
    left: 0px;
    top: 0px;
    transition: height 0.4s, width 0.4s, top 0.4s, left 0.4s;
    ${Hovering &&
    `
      position: absolute;
     z-index:2;
  `}
    ${LargerCard &&
    `
      z-index:2;
      left: -1.7vw;
      top: -2.5vw;
      height: 24vw;
      width: 17.143vw;
      ${
        index % 6 === 0
          ? `
          left: -3.5vw;
        `
          : index === 6 * currentPage - 5 &&
            `
          left: 0px;
        `
      }
    `}
  `;
}}
`;

export const MaskContainer = Styled.div` 
  ${({ LargerCard }: { LargerCard: boolean }) => css`
    background: rgb(51, 51, 51);
    position: absolute;
    height: 19vw;
    width: 13.57vw;
    ${LargerCard &&
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
    width: 100%;
    img {
      position: relative !important;
    }
`;
