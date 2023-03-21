/* ----------------- External ----------------- */
import React from 'react';

/* ----------------- Style ----------------- */
import { Container } from './style';

/* ----------------- Organisms ----------------- */
import { NavBar } from '@/components/organisms/NavBar';
import { MainCard } from '@/components/organisms/MainCard';
import { CardRow } from '@/components/organisms/CardRow';

export function MainMenu() {
  return (
    <Container>
      <NavBar />
      <MainCard />
      <CardRow />
    </Container>
  );
}
