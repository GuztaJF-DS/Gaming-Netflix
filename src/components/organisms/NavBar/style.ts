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
    display: flex;
    z-index: 99;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    color: white;
    width: 100%;
    height: 5vw;
    > div {
      margin-right: 60px;
    }
    img {
      margin-left: 20px;
      position: relative !important;
      max-width: 10vw;
    }
    @media screen and (max-width: 768px) {
      height: 6.5vw;
      img {
        max-width: 14vw;
      }
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
  height: 100%;
`;

export const ButtonContainer = Styled.div`
  display: flex;
  width: 80vw;
  > p {
    margin-right: 20px;
  }
`;

export const ButtonNav = Styled.p`
  font-size: 85%;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const IconContainer = Styled.div`
  display: flex;
  justify-content:space-between;
  width: 13vw;
  align-items:center;
`;

export const IconNav = Styled.button`
  display: flex;
  height:2.6vw;
  background: transparent;
  border: none;
  width: 2.6vw;
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
  background: transparent;
  border: none;
  width: 3.5vw;
  img {
    border-radius: 3px;
    margin-left:0px !important;
    height: 100%;
    width: 100%;
    position: relative !important;
  }
  :hover {
    cursor: pointer;
  }
`;
