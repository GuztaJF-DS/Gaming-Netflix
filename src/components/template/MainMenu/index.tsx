/* ----------------- External ----------------- */
import React, { useState } from 'react';

/* ----------------- Style ----------------- */
import { Container } from './style';

/* ----------------- Organisms ----------------- */
import { GameModal } from '@/components/organisms/GameModal';
import { NavBar } from '@/components/organisms/NavBar';
import { MainCard } from '@/components/organisms/MainCard';
import { Carrousel } from '@/components/organisms/Carrousel';

export function MainMenu() {
  const [gameSelected, setGameSelected] = useState<string | null>(null);
  return (
    <Container>
      {gameSelected && (
        <GameModal
          gameSelected={gameSelected}
          setGameSelected={setGameSelected}
        />
      )}
      <NavBar />
      <MainCard />
      <Carrousel setGameSelected={setGameSelected} />
    </Container>
  );
}
