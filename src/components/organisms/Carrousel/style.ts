/* ----------------- External ----------------- */
import Styled, { css } from 'styled-components';

export const Container = Styled.div`
  position: relative;
  overflow-x: clip;
  overflow-y: visible;
  top:-5.63vw;
  z-index: 10;
  height: 20vw;
  margin-bottom:8vw;
  :last-child {
    margin-bottom:0vw;
  }
  > p {
    z-index: -10 !important;
    margin-bottom:10px;
    margin-left:20px;
    font-size: 1.4vw;
    line-height: 1.25vw;
    font-weight: 500;
    :hover{
      ::after{
        content: " >";
      }
      cursor: pointer;
    }
  }
`;

export const CardContainer = Styled.div`
  ${({ currentPage = 0 }: { currentPage?: number }) => css`
    display: grid;
    grid-template-areas: 'overlap';
    margin-left: 4.85vw;
    grid-auto-flow: column;
    grid-gap: 2.38vw;
    align-items: center;
    transition: transform 1s;
    transform: translateX(calc((-15.38vw * 6) * ${currentPage}));
  `}
`;

export const MoveButton = Styled.button`
  position: absolute;
  top: 58%;
  transform: translateY(-50%);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: hsla(0, 0%, 3%, 0.418);
  border: none;
  width: 2.5vw;
  height: 15vw;
  :first-child{
    border-top-right-radius:4px;
    border-bottom-right-radius:4px;
  }
  :last-child{
    right:0px;
    border-top-left-radius:4px;
    border-bottom-left-radius:4px;
    svg{
      transform: scaleX(-1);
    }
  }
  svg {
    width: 1.2vw;
    fill:white;
  }
  :hover {
    background: hsla(0, 0%, 0%, 0.5);
  }
`;
