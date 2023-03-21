/* ----------------- External ----------------- */
import Styled from 'styled-components';

export const MainContainer = Styled.div`
  display: flex;
  z-index:99;
  position:fixed;
  justify-content:flex-start;
  background:linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent);
  color: white;
  align-items:center;
  width: 100%;
  height: 5vw;
  img {
    margin-left:20px;
    background: transparent;
    max-width:10vw;
  }
  @media screen and (max-width:768px){
    height: 6.5vw;
    img {
      max-width:14vw;
    }
  } 
`;
