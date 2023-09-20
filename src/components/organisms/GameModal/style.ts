/* ----------------- External ----------------- */
import Styled, { keyframes } from 'styled-components';

export const Container = Styled.div`
  position: fixed;
  z-index: 101;
  width: 60vw;
  max-height: 95vh;
  overflow: auto;
  top: 5vh;
  left: 20vw;
  border-radius: 1vw;
  background: #202020;
  transition: top 5s max-height 5s;

  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

export const MaskBackground = Styled.div`
  position: absolute;
  z-index:100;
  backdrop-filter: blur(1.5px);
  width: 100vw;
  height: 100vw;
  border-radius:1vw;
  background:#0000004d;
`;

export const CloseButton = Styled.button`
  position: fixed;
  z-index:100;
  display:flex;
  align-items:center;
  justify-content:center;
  left:75.5vw;
  top:7vh;
  width: 3vw;
  height: 3vw;
  font-weight:100;
  border:none;
  border-radius:10vw;
  background:#131212;
  :hover {
    cursor: pointer;
  }
`;

export const BannerContainer = Styled.div`
  width: 100%;
  height: 30vw;
  position: relative;
`;

export const ImageWrapper = Styled.div`
  z-index:8;
  position: absolute;
  backdrop-filter:brightness(110%);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #202020b7 85%, #202020 100%);
  width: 100%;
  height: 30.1vw;
`;

export const LogoContainer = Styled.div`
  display: flex;
  flex-direction:column;
  position: absolute;
  bottom:1vw;
  left:1vw;
  z-index:10;
  width: 19vw;
  img {
    position: static !important;
    max-height:10vw;
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

const MovingAnimation = keyframes`
 0% { transform: translateX(0vw); }
 5% { transform: translateX(0vw); }
 50% { transform: translateX(-17vw); }
 55% { transform: translateX(-17vw); }
 95% { transform: translateX(-33vw); }
 100% { transform: translateX(-33vw); }
`;

export const ImageContainer = Styled.div`
  position: relative;
  overflow-x: clip;
  overflow-y: visible;
  height: 30vw;
  img{
    position: absolute !important;
    width:92.9vw !important;
    animation-name: ${MovingAnimation};
    animation-duration: 20s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
`;

export const ContentContainer = Styled.div`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  padding:1.5vw;
  > div {
    font-size: 14px !important;
  }
`;

export const DescriptionRow = Styled.div`
  width:55%;
`;

export const DetailsRow = Styled.div`
  width:40%;
  > div {
    font-size: 14px;
    margin-bottom:10px;
    flex-wrap: wrap;
    > span {
      width: fit-content;
      font-size: 14px;
      color:#777777;
    }
  }
`;
