/* ----------------- External ----------------- */
import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  background: #131313;
  min-height: 50vw;
  position: relative;
  justify-content:center;
  align-items:center;
  img {
    max-width:100vw;
  }
  @media (max-width:768px){
    height: 60vw;
  }
`;

export const ImageWrapper = Styled.div`
  position: absolute;
  z-index: 1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 70%, #141414 100%);
  width: 100%;
  height: 100%;
`;

export const ContentContainer = Styled.div`
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  position: absolute;
  width:30vw;
  height: auto;
  top: 30%;
  left: 4%;
`;

export const DescriptionContainer = Styled.h4`
  font-size:1.4vw;
  font-weight:600; 
  color:white;
  -webkit-text-stroke-width: 0.1vw;
  -webkit-text-stroke-color: #05050571;
  text-shadow: 0.3vw 0.3vw 0.3vw rgb(0 0 0 / 85%);
  margin-bottom: 13px;
  @media (max-width:768px){
    margin-bottom: 4px;
    font-size:1.6vw;
    text-shadow: 0.3vw 0.3vw 0.3vw rgba(0, 0, 0, 0.5);
  }
`;

export const LogoContainer = Styled.div`
  min-height: 10vw;
  max-height: 15vw;
  width:30vw;
  position: relative;
  @media (max-width:768px){
    min-height: 13vw;
    max-height: 20vw;
    width:35vw;
  }
`;

export const ButtonContainer = Styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
`;
