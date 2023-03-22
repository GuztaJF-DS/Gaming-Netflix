/* ----------------- External ----------------- */
import React from 'react';
// import Image from 'next/image';

/* ----------------- Style ----------------- */
import { MainContainer } from './style';

export function Card({ Name }: { Name: string }) {
  return (
    <MainContainer>
      {/* <Image
        src={'/image/games/melee.jpeg'}
        fill
        style={{
          objectFit: 'cover',
          borderRadius: '3px',
        }}
        alt="Game"
        draggable={false}
      /> */}
      {Name}
    </MainContainer>
  );
}
