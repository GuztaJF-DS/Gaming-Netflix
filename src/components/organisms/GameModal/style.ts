/* ----------------- External ----------------- */
import Styled from 'styled-components';

export const Container = Styled.div`
  position: fixed;
  z-index:101;
  width: 60vw;
  min-height: 40vw;
  top:2vw;
  left:20vw;
  border-radius:1vw;
  background:#202020;
`;

export const MaskBackground = Styled.div`
  position: absolute;
  z-index:100;
  backdrop-filter:brightness(60%) blur(1.5px);
  width: 100vw;
  height: 100vw;
  border-radius:1vw;
  background:#0000004d;
`;

export const CloseButton = Styled.button`
  position: absolute;
  z-index:100;
  display:flex;
  align-items:center;
  justify-content:center;
  right:1vw;
  top:1vw;
  width: 3vw;
  height: 3vw;
  font-weight:100;
  border:none;
  border-radius:10vw;
  background:#131212;
`;

export const BannerDiv = Styled.div`
  width: 100%;
  height: 30vw;
  img {
    border-top-left-radius: 1vw;
    border-top-right-radius: 1vw;
    position: static !important;
  }
`;

export const ImageWrapper = Styled.div`
  position: absolute;
  backdrop-filter:brightness(110%);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #202020b7 70%, #202020 100%);
  width: 100%;
  height: 30vw;
`;

export const LogoDiv = Styled.div`
  display: flex;
  flex-direction:column;
  position: absolute;
  top:15vw;
  left:1vw;
  width: 19vw;
  img {
    position: static !important;
  }
  >div{
    margin-top:1vw;
    display: flex;
    align-items:center;
    flex-direction:row;
    button:last-child{
      margin-left:0.6vw;
    }
  }
`;
