/* ----------------- External ----------------- */
import React from 'react';
import { useRouter } from 'next/router';

/* ----------------- Style ----------------- */
import { Container } from './style';

/* ----------------- Organisms ----------------- */
import { GameModal } from '@/components/organisms/GameModal';
import { NavBar } from '@/components/organisms/NavBar';
import { MainCard } from '@/components/organisms/MainCard';
import { Carrousel } from '@/components/organisms/Carrousel';

export function MainMenu() {
  const router = useRouter();
  return (
    <Container>
      {router.query.id && <GameModal />}
      <NavBar />
      <MainCard />
      <Carrousel />
    </Container>
  );
}
