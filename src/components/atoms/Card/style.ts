/* ----------------- External ----------------- */
import Styled from 'styled-components';

export const HitboxContainer = Styled.div`
  display: flex;
  position: relative;
`;

export const MainContainer = Styled.div`
  background: rgb(70, 70, 70);
  background: linear-gradient(
    180deg,
    rgba(70, 70, 70, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  height: 19vw;
  width: 13.57vw;
`;

export const ImageContainer = Styled.div`
    align-items: center !important;
    object-fit: cover;
    justify-content: flex-end !important;
    height: 100%;
    width: 100%;
    img {
      position: relative !important;
    }
`;
