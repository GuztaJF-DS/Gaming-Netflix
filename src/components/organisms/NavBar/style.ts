/* ----------------- External ----------------- */
import Styled from 'styled-components';

export const MainContainer = Styled.div`
  display: flex;
  z-index:99;
  position:fixed;
  background: linear-gradient(0deg,transparent 0%, rgba(0, 0, 0, 0.74) 100%);
  color: white;
  align-items:center;
  padding: 0px 30px;
  width: 100%;
  min-height: 70px;
  img {
    background: transparent;
  }
`;

export const Mask = Styled.div`
  background: transparent;
  position: relative;
  height: 75px;
`;
