/* ----------------- External ----------------- */
import Image from 'next/image';
import React from 'react';

/* ----------------- Molecules ----------------- */
import { LargePlayButton } from '@/components/molecules/LargePlayButton';
import { InfoButton } from '@/components/molecules/InfoButton';

/* ----------------- Style ----------------- */
import { Container, ImageContainer, LogoContainer } from './style';

export function MainCard() {
  return (
    <>
      <ImageContainer>
        <Image
          src={'/image/games/mario64.png'}
          fill
          style={{ objectFit: 'cover' }}
          alt="Game"
        />
      </ImageContainer>
      <Container>
        <LogoContainer>
          <Image
            src={'/image/games/mario64Logo.png'}
            style={{ objectFit: 'contain' }}
            fill
            alt="Game"
          />
        </LogoContainer>
        <LargePlayButton
          onClick={() => {
            console.log('play');
          }}
        />
        <InfoButton
          onClick={() => {
            console.log('mareo');
          }}
        />
      </Container>
    </>
  );
}
