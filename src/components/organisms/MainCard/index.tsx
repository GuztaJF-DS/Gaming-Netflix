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
        src={'/image/games/darksouls3.png'}
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
            src={'/image/games/darksouls3Logo.png'}
            style={{ objectFit: 'contain' }}
            fill
            draggable={false}
            alt="Game"
          />
        </LogoContainer>
        <h4>
          The Lords of Cinder, long thought dead, have returned to their
          thrones, but they are no longer the heroes they once were. You must
          gather their ashes and kindle the fire anew, Ashen One.
        </h4>
        <ButtonContainer>
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
        </ButtonContainer>
      </ContentContainer>
    </Container>
  );
}
