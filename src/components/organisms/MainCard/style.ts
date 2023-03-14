/* ----------------- External ----------------- */
import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  background: blue;
  height: 45vw;
  position: relative;
  img {
    max-width:100vw;
  }
  @media screen and (min-width:1440px){
    height:700px;
  } 
  @media screen and (max-width:768px){
    height:60vw;
  } 
`;

export const ContentContainer = Styled.div`
  display: flex;
  flex-wrap: wrap;
  background: red;
  width:25vw;
  position: absolute;
  top: 30%;
  height: auto;
  left: 4%;
  h4 {
    filter: invert(1) opacity(85%);
    margin-bottom:20px;
    margin-top:3vw;
    margin-left:10px;
  }
  @media screen and (max-width:768px){
    width:30vw;
    h4 {
      font-size:11.2px;
    }
  }
  @media screen and (min-width:1441px){
    width:20vw;
  }
`;

export const LogoContainer = Styled.div`
  display: flex;
  align-self:center;
  height: 10vw;
  width:30vw;
  position: relative;
`;

export const ButtonContainer = Styled.div`
  display: flex;
  flex-direction: row;
`;
