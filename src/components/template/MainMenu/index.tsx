/* ----------------- External ----------------- */
import React from 'react';

/* ----------------- Style ----------------- */
import { Container } from './style';

/* ----------------- Organisms ----------------- */
import { NavBar } from '@/components/organisms/NavBar';
import { MainCard } from '@/components/organisms/MainCard';
import { Carrousel } from '@/components/organisms/Carrousel';

export function MainMenu() {
  return (
    <Container>
      <NavBar />
      <MainCard />
      <Carrousel />
    </Container>
  );
}
