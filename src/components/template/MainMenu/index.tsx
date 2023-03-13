/* ----------------- External ----------------- */
import React from 'react';

/* ----------------- Style ----------------- */
import { Container } from './style';

/* ----------------- Organisms ----------------- */
import { NavBar } from '@/components/organisms/NavBar';
import { MainCard } from '@/components/organisms/MainCard';

export function MainMenu() {
  return (
    <Container>
      <MainCard />
      <NavBar />
    </Container>
  );
}
