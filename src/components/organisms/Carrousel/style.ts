/* ----------------- External ----------------- */
import Styled, { css } from 'styled-components';

export const Container = Styled.div`
  height: 11.25vw;
  position: relative;
  overflow: hidden;
  top:-5vw;
`;

export const CardContainer = Styled.div`
${({ currentPage = 0 }: { currentPage?: number }) => css`
  display: flex;
  transition: transform 0.5s;
  transform: translateX(calc(-92.7vw * ${currentPage}));
`}
`;

export const MoveButton = Styled.button`
  position: absolute;
  top: 44.5%;
  transform: translateY(-50%);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: hsla(0, 0%, 0%, 0.5);
  border: none;
  min-width: 2.8vw !important;
  height: 10.1vw;
  :last-child{
    right:0px;
    svg{
      transform: scaleX(-1);
    }
  }
  svg {
    width: 1.2vw;
    fill:white;
  }
`;
