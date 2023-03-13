/* ----------------- External ----------------- */
import Styled from 'styled-components';

export const Container = Styled.div`
  height:100vh;
`;

export const MainCardImage = Styled.div`
  background-image:url('/image/games/mario64.png');
  background-size: cover; 
  width:100%;
  height:100vh;
  display: flex;
  z-index: 0;
  position:absolute;
`;

export const Content = Styled.div`
  position:absolute;
  width:100%;
  height:100%;
  z-index:98;
`;
