/* ----------------- External ----------------- */
import Styled, { css } from 'styled-components';

export const Container = Styled.div`
  position: relative;
  display: flex;
  align-items:center;
  overflow-x: clip;
  overflow-y: visible;
  top:-5.63vw;
  z-index: 10;
  min-height: 23vw;
  margin-bottom:3vw;
  @media (max-width: 768px) {
    min-height:34vw;
  }
  :last-child {
    margin-bottom:0vw;
  }
  > p {
    position: absolute;
    top:-0.8vw;
    left: 3vw;
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
    @media (max-width: 768px) {
      margin-left: 5.45vw;
      grid-gap: 2vw;
      transform: translateX(calc((-22.63vw * 4) * ${currentPage}));
    }
    :hover {
      cursor: pointer;
    }
  `}
`;

export const MoveButton = Styled.button`
  position: absolute;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000057;
  border: none;
  width: 2.5vw;
  height: 19.5vw;
  transition: background-color 0.2s;
  @media (max-width: 768px) {
    height: 28.882vw;
    width: 3.48vw;
  }
  :first-child{
    border-top-right-radius:5px;
    border-bottom-right-radius:5px;
  }
  :last-child{
    right:0px;
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
    svg{
      transform: scaleX(-1);
    }
  }
  svg {
    width: 1.2vw;
    transition: fill 0.2s;
    fill:#ffffff00
  }
  :hover {
    background-color: hsla(0, 0%, 3%, 0.5);
    svg {
      fill:#ffffff;
    }
  }
`;
