/* ----------------- External ----------------- */
import React from 'react';
import Image from 'next/image';

/* ----------------- Style ----------------- */
import { HitboxContainer, MainContainer, ImageContainer } from './style';
import { IFakeData } from '@/api/FakeGameData';

export function Card({ Data }: { Data: IFakeData }) {
  return (
    <>
      <HitboxContainer>
        <MainContainer>
          <ImageContainer>
            <Image
              src={`/games/cover/${Data.thumbUrl}.png`}
              fill
              style={{
                objectFit: 'cover',
                borderRadius: '3px',
              }}
              alt="Game"
              draggable={false}
            />
          </ImageContainer>
        </MainContainer>
      </HitboxContainer>
    </>
  );
}
