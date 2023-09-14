/* ----------------- External ----------------- */
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FakeData } from '@/api/FakeGameData';
import { LargePlayButton } from '@/components/molecules/LargePlayButton';
import { AddButton } from '@/components/molecules/AddButton';
import { LikeButton } from '@/components/molecules/LikeButton';

/* ----------------- Style ----------------- */
import {
  MaskBackground,
  Container,
  CloseButton,
  BannerDiv,
  ImageWrapper,
  LogoDiv,
} from './style';

export function GameModal() {
  const router = useRouter();
  const currentGame = FakeData.find(data => data.id === router.query.id);
  return (
    <>
      <MaskBackground />
      <Container>
        <CloseButton
          onClick={() => {
            router.push({
              query: undefined,
            });
          }}
        >
          X
        </CloseButton>
        <BannerDiv>
          <ImageWrapper />
          <Image
            src={`/games/banner/SuperMetroid.png`}
            fill
            style={{
              objectFit: 'contain',
              zIndex: 0,
            }}
            draggable={false}
            alt="Game"
          />
          <LogoDiv>
            <Image
              src={`/games/logo/SuperMetroid.png`}
              fill
              style={{
                objectFit: 'contain',
                zIndex: 0,
              }}
              draggable={false}
              alt="Game"
            />
            <div>
              <LargePlayButton
                onClick={() => {
                  console.log('play');
                }}
              />
              <AddButton
                onClick={() => {
                  console.log('play');
                }}
              />
              <LikeButton
                onClick={() => {
                  console.log('play');
                }}
              />
            </div>
          </LogoDiv>
        </BannerDiv>
        {currentGame?.name}
      </Container>
    </>
  );
}
