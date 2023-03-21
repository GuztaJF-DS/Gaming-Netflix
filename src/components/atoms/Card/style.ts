/* ----------------- External ----------------- */
import Styled from 'styled-components';

export const MainContainer = Styled.div`
  margin:0px 3px;
  background: purple;
  object-fit: contain;
  max-width: 15vw;
  height: 10vw;
  flex: 1 0 15vw;
  position: relative !important;
  :first-child {
    margin-left:3.4vw;
    background: green;
  }
`;
