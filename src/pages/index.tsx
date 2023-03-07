import React from 'react';
import { DefaultButton } from '@/components/atoms/DefaultButtons';
import { NavBar } from '@/components/organisms/NavBar';
import Styled from 'styled-components';

export const Container = Styled.div`
  padding: 15px;
`;

export default function Home() {
  return (
    <main>
      <NavBar />
      <Container>
        <DefaultButton name={'test'} />
      </Container>
    </main>
  );
}
