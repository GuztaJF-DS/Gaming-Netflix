import React from 'react';
import { DefaultButton } from '@/components/atoms/DefaultButtons';
import { NavBar } from '@/components/organisms/NavBar';
import Styled from 'styled-components';

export const Container = Styled.div`
  background-color:white;
  height:300vh;
`;

export default function Home() {
  return (
    <Container>
      <NavBar />
      <DefaultButton name={'test'} />
    </Container>
  );
}
