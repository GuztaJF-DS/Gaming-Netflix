/* ----------------- External ----------------- */
import Styled, { css } from 'styled-components';

export const Container = Styled.div`
  display: flex;
  align-self: center;
  justify-content:space-between;
  flex-direction: row;
  position: relative;
  top: -6vw;
  margin-bottom: 20px;
`;

export const CardContainer = Styled.div`
  display: flex;
  height:11.25vw;
  overflow:auto;
  ::-webkit-scrollbar {
    display: none;
}
`;

export const MoveButton = Styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: hsla(0, 0%, 8%, 0.5);
    border: none;
    min-width: 3vw !important;
    height: 9vw;
`;
