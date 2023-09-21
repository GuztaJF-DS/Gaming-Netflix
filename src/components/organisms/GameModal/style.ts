/* ----------------- External ----------------- */
import Styled, { css, keyframes } from 'styled-components';

export const Container = Styled.div`
  position: fixed;
  z-index: 101;
  width: 65vw;
  max-height: 95vh;
  overflow: auto;
  top: 4vh;
  left: 17.5vw;
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
  left:78.5vw;
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
  height: 32vw;
  position: relative;
`;

export const ImageWrapper = Styled.div`
  z-index:8;
  position: absolute;
  backdrop-filter:brightness(110%);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #202020b7 85%, #202020 100%);
  width: 100%;
  height: 32.1vw;
`;

export const LogoContainer = Styled.div`
  display: flex;
  flex-direction:column;
  position: absolute;
  bottom:3vw;
  left:3.5vw;
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
 95% { transform: translateX(-34vw); }
 100% { transform: translateX(-34vw); }
`;

export const ImageContainer = Styled.div`
  position: relative;
  overflow-x: clip;
  overflow-y: visible;
  height: 32vw;
  img{
    position: absolute !important;
    width:99vw !important;
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
  padding:2vw;
`;

export const DetailsRow = Styled.div`
  width:37%;
  > div {
    font-size: 1vw;
    margin-bottom:1vw;
    flex-wrap: wrap;
    > span {
      width: fit-content;
      font-size: 1vw;
      color:#777777;
    }
  }
`;

export const DescriptionRow = Styled.div`
  width:55%;
  > div {
    font-size: 1vw !important;
  }
  > p { 
    margin-bottom: 1vw;
    > div {
      display: flex;
      align-items: center;
    }
    justify-content:space-between;
    width:96%;
    display: flex;
    align-items: center;
    >span {
      color:#BCBCBC;
    }
  }
`;

export const ScoreBox = Styled.div`
  ${({ score }: { score: number }) => css`
    background: ${(() => {
      if (score >= 75 && score <= 100) {
        return '#66CC33';
      } else if (score <= 74 && score >= 50) {
        return '#FFCC33';
      } else {
        return '#FF0000';
      }
    })()};
    color: ${score >= 50 && score <= 100 ? '#262626' : '#ffffff'};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.3vw;
    font-weight: 600;
    width: 2.2vw;
    height: 2.1vw;
  `}
`;

export const ScoreText = Styled.div`
  ${({ score }: { score: number }) => css`
    color: ${(() => {
      if (score >= 75 && score <= 100) {
        return '#66CC33';
      } else if (score <= 74 && score >= 50) {
        return '#FFCC33';
      } else {
        return '#FF0000';
      }
    })()};
  `}
`;
