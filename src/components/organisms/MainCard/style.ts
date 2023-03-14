/* ----------------- External ----------------- */
import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  height: 45vw;
  position: relative;
  img {
    max-width:100vw;
  }
  @media screen and (min-width:1440px){
    height:700px;
  } 
  @media screen and (min-width:1770px){
    height:950px;
  } 
  @media screen and (max-width:768px){
    height:60vw;
  } 
`;

export const ContentContainer = Styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  width:30vw;
  height: auto;
  top: 30%;
  left: 4%;
  h4 {
    filter: invert(80%) ;
    font-size:1.2vw ;
    @media screen and (max-width:768px){
        font-size:1.4vw;
    }
  }
`;

export const LogoContainer = Styled.div`
  height: 15vw;
  width:25vw;
  position: relative;
`;

export const ButtonContainer = Styled.div`
  display: flex;
  flex-direction: row;
`;
