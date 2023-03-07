import Styled from 'styled-components';

export const MainContainer = Styled.div`
  display: flex;
  z-index: 1;
  position:fixed;
  background: rgb(255,255,255);
  background: linear-gradient(0deg,transparent 0%, rgba(63, 62, 62, 1) 100%);
  color: white;
  align-items:center;
  padding: 0px 30px;
  width: 100%;
  min-height: 60px;
  img{
    background: transparent;
  }
`;

export const Mask = Styled.div`
  background: transparent;
  position: relative;
  height: 65px;
`;
