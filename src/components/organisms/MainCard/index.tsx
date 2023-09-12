/* ----------------- External ----------------- */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

/* ----------------- Molecules ----------------- */
import { LargePlayButton } from '@/components/molecules/LargePlayButton';
import { InfoButton } from '@/components/molecules/InfoButton';
import { BannerData } from '@/api/BannerGameData';

/* ----------------- Style ----------------- */
import {
  Container,
  ImageWrapper,
  ContentContainer,
  LogoContainer,
  ButtonContainer,
  DescriptionContainer,
} from './style';

export function MainCard() {
  const [randomNumber, SetRandomNumber] = useState<number>();
  useEffect(() => {
    SetRandomNumber(Math.floor(Math.random() * BannerData.length));
    // SetRandomNumber(1);
  }, []);
  if (randomNumber !== undefined) {
    return (
      <Container>
        <ImageWrapper />
        <Image
          src={`/games/banner/${BannerData[randomNumber]?.name}.png`}
          fill
          style={{
            objectFit: 'contain',
            zIndex: 0,
          }}
          draggable={false}
          alt="Game"
        />
        <ContentContainer>
          <LogoContainer>
            <Image
              src={`/games/logo/${BannerData[randomNumber]?.name}.png`}
              style={{ objectFit: 'contain' }}
              fill
              draggable={false}
              alt="Game"
            />
          </LogoContainer>
          <DescriptionContainer>
            {BannerData[randomNumber]?.description || ''}
          </DescriptionContainer>
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
  } else {
    return <Container>Loading</Container>;
  }
}
