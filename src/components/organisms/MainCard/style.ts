/* ----------------- External ----------------- */
import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
  position: absolute;
  z-index: 100;
  top: 40%;
  left: 4%;
  h2{
    color:black;
  }
`;

export const ImageContainer = Styled.div`
  width:100%;
  height:100%;
  background: blue;
  position:absolute;
  z-index: 98;
`;

export const LogoContainer = Styled.div`
  display: flex;
  align-self:center;
  width:100%;
  height: auto;
  min-height: 150px;
  position: relative;
  margin-bottom:40px;
`;
