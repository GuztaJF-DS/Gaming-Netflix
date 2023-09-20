/* ----------------- External ----------------- */
import React, { useState, useCallback } from 'react';

/* ----------------- Style ----------------- */
import { Container } from './style';

/* ----------------- Organisms ----------------- */
import { GameModal } from '@/components/organisms/GameModal';
import { NavBar } from '@/components/organisms/NavBar';
import { MainCard } from '@/components/organisms/MainCard';
import { Carrousel } from '@/components/organisms/Carrousel';

export function MainMenu() {
  const [gameSelected, setGameSelected] = useState<string | null>(null);
  const [blackHeader, setBlackHeader] = useState(false);

  const containerRef = useCallback(
    (element: HTMLDivElement) => {
      if (element) {
        element.addEventListener(
          'scroll',
          () => {
            if (element?.scrollTop > 0 !== blackHeader) {
              setBlackHeader(!blackHeader);
            }
          },
          { passive: true },
        );
      }
    },
    [blackHeader],
  );
  return (
    <Container ref={containerRef}>
      {gameSelected && (
        <GameModal
          gameSelected={gameSelected}
          setGameSelected={setGameSelected}
        />
      )}
      <NavBar blackHeader={blackHeader} />
      <MainCard />
      <Carrousel setGameSelected={setGameSelected} />
    </Container>
  );
}
