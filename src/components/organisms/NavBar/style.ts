/* ----------------- External ----------------- */
import Styled, { css } from 'styled-components';

export const MainContainer = Styled.div`
  ${({ blackHeader }: { blackHeader?: boolean }) => css`
    @property --linearColor1 {
      syntax: '<color>';
      initial-value: #000000c9;
      inherits: false;
    }

    @property --linearColor2 {
      syntax: '<color>';
      initial-value: transparent;
      inherits: false;
    }
    padding: 0.5vw;
    display: flex;
    z-index: 99;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    color: white;
    width: 100%;
    height: 5vw;
    @media (max-width: 768px) {
      height: 6.5vw;
    }
    transition: --linearColor1 0.6s, --linearColor2 0.6s;
    background: linear-gradient(
      180deg,
      var(--linearColor1),
      var(--linearColor2)
    );
    ${blackHeader
      ? `
      --linearColor1: #000000;
      --linearColor2: #000000;
      `
      : `
      --linearColor1: #000000c9;
      --linearColor2: transparent;
      `}
  `}
`;

export const ImageContainer = Styled.div`
  display: flex;
  width:15vw;
  height: 100%;
  @media (max-width: 768px) {
    margin-top:0.5vw;
    width: 29vw;
  }
  img {
    margin-left: 1.5vw;
    position: relative !important;
    max-width: 10vw;
    @media (max-width: 768px) {
      max-width: 20vw;
    }
  }
`;

export const ButtonContainer = Styled.div`
  display: flex;
  width: 80vw;
  > p {
    margin-right: 2vw;
  }
  @media (max-width: 768px) {
    width: 70vw;
  }
`;

export const ButtonNav = Styled.p`
  font-size: 1vw;
  color:#e5e5e5;
  cursor: pointer;
  transition:color 0.3s;
  :first-child {
    color:#ffffff;
  }
  :hover {
    color:#b3b3b3;
  }
  @media (max-width: 768px) {
    font-size: 1.7vw;
  }
`;

export const IconContainer = Styled.div`
  display: flex;
  justify-content:flex-start;
  width: 17vw;
  align-items:center;
  > button{
    margin-left:0.3vw;
  }
  @media (max-width: 768px) {
    width: 20vw;
  }
`;

export const IconNav = Styled.button`
  display: flex;
  background: transparent;
  border: none;
  height:2.4vw;
  width: 2.4vw;
  @media (max-width: 768px) {
    height:4vw;
    width: 4vw;
  }
  img {
    margin-left:0px !important;
    height: 200%;
    position: static !important;
  }
  :hover {
    cursor: pointer;
  }
`;

export const ProfilePic = Styled.button`
  display: flex;
  align-items:center;
  background: transparent;
  border: none;
  width: 3.5vw;
  p{
    font-size:1.4vw;
    @media (max-width: 768px) {
        font-size:2.2vw;
    }
  }
  @media (max-width: 768px) {
    width: 5.5vw;
  }
  img {
    border-radius: 3px;
    margin-left:0px !important;
    height: 100%;
    width: 100%;
    position: relative !important;
    margin-right:0.5vw;
    @media (max-width: 425px) {
      margin-right:1px;
    }
  }
  :hover {
    cursor: pointer;
  }
`;
