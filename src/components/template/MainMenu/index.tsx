import React from 'react';
import { DefaultButton } from '@/components/atoms/DefaultButtons';
import { NavBar } from '@/components/organisms/NavBar';
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
  z-index:98;
`;

export function MainMenu() {
  return (
    <Container>
      <MainCardImage />
      <NavBar />
      <Content>
        <DefaultButton name={'test'} />
      </Content>
    </Container>
  );
}
