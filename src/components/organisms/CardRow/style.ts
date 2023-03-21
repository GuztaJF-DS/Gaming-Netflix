/* ----------------- External ----------------- */
import Styled, { css } from 'styled-components';

export const Container = Styled.div`
  display: flex;
  align-self: center;
  justify-content:space-between;
  flex-direction: row;
  position: relative;
  top: -50px;
  margin-bottom: 20px;
  width: 100%;
  height: 145px;
  overflow:hidden;
`;

export const CardContainer = Styled.div`
  display: flex;
  width: 100%;
  scroll-behavior: smooth;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
}
`;

export const MoveButton = Styled.button`
  ${({ Right = false }: { Right?: boolean }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: hsla(0, 0%, 8%, 0.5);
    border: none;
    min-width: 3vw !important;
    height: 10vw;
    right: ${Right ? 0 : null};
  `}
`;
