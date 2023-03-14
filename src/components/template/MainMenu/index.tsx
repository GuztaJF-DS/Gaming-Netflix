/* ----------------- External ----------------- */
import React from 'react';

/* ----------------- Style ----------------- */
import { Container, CardContainer } from './style';

/* ----------------- Organisms ----------------- */
import { NavBar } from '@/components/organisms/NavBar';
import { MainCard } from '@/components/organisms/MainCard';

export function MainMenu() {
  return (
    <Container>
      <NavBar />
      <MainCard />
      <CardContainer>test</CardContainer>
    </Container>
  );
}
