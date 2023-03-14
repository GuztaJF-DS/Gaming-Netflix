/* ----------------- External ----------------- */
import Image from 'next/image';
import React from 'react';

/* ----------------- Molecules ----------------- */
import { LargePlayButton } from '@/components/molecules/LargePlayButton';
import { InfoButton } from '@/components/molecules/InfoButton';

/* ----------------- Style ----------------- */
import {
  Container,
  ContentContainer,
  LogoContainer,
  ButtonContainer,
} from './style';

export function MainCard() {
  return (
    <Container>
      <Image
        src={'/image/games/mario64.png'}
        fill
        style={{
          objectFit: 'cover',
        }}
        draggable={false}
        alt="Game"
      />
      <ContentContainer>
        <LogoContainer>
          <Image
            src={'/image/games/mario64Logo.png'}
            style={{ objectFit: 'contain' }}
            fill
            draggable={false}
            alt="Game"
          />
        </LogoContainer>
        <h4>
          the first 3D Super Mario game, released for the Nintendo 64 is one of
          the greatest games of all time
        </h4>
        {/* <ButtonContainer>
          <LargePlayButton
            onClick={() => {
              console.log('play');
            }}
          />
          <InfoButton
            onClick={() => {
              console.log('mario');
            }}
          />
        </ButtonContainer> */}
      </ContentContainer>
    </Container>
  );
}
