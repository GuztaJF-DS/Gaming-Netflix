/* ----------------- External ----------------- */
import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  height: 49vw;
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
  top: 35%;
  left: 4%;
  h4 {
    font-size:1.2vw ;
    font-weight:400;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
    margin-bottom: 13px;
    @media screen and (max-width:768px){
      margin-bottom: 4px;
      font-size:1.4vw;
    }
  }
`;

export const LogoContainer = Styled.div`
  min-height: 10vw;
  max-height: 15vw;
  width:30vw;
  position: relative;
`;

export const ButtonContainer = Styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;
