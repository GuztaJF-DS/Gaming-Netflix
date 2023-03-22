/* ----------------- External ----------------- */
import Styled from 'styled-components';

export const MainContainer = Styled.div`
  margin:0px 5px;
  padding:10px;
  display: flex;
  text-align:center;
  justify-content:center;
  align-items:flex-end;
  background: rgb(70,70,70);
  background: linear-gradient(180deg, rgba(70,70,70,1) 0%, rgba(0,0,0,1) 100%);
  object-fit: contain;
  max-width: 18vw;
  height: 10vw;
  flex: 1 0 18vw;
  position: relative !important;
  :first-child {
    background: green;
  }
`;
