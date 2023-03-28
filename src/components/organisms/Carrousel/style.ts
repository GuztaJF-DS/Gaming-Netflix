/* ----------------- External ----------------- */
import Styled, { css } from 'styled-components';

export const Container = Styled.div`
  position: relative;
  overflow-x: clip;
  overflow-y: visible;
  top:-5.63vw;
  z-index: 10;
  > p {
    margin-left:4vw;
    margin-bottom:10px;
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
    display: flex;
    align-items: center;
    display: flex;
    max-height: fit-content;
    transition: transform 0.5s;
    transform: translateX(calc(-92.7vw * ${currentPage}));
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
  background: hsla(0, 0%, 0%, 0.5);
  border: none;
  min-width: 2.8vw !important;
  height: 11vw;
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
    background: hsla(0, 0%, 0%, 0.63);
  }
`;
