/* ----------------- External ----------------- */
import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  height: 49vw;
  position: relative;
  img {
    max-width:100vw;
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
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  width:30vw;
  height: auto;
  top: 30%;
  left: 4%;
`;

export const DescriptionContainer = Styled.h4`
  font-size:1.4vw ;
  font-weight:600; 
  color:white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #05050571;
  text-shadow: 3px 3px 3px rgb(0 0 0 / 85%);
  margin-bottom: 13px;
  @media screen and (max-width:768px){
    margin-bottom: 4px;
    font-size:1.4vw;
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
