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
  ImageContainer,
} from './style';

export function GameModal() {
  const router = useRouter();
  const currentGame = FakeData.find(data => data.id === router.query.id);
  return (
    <>
      <MaskBackground
        onClick={() => {
          router.push({
            query: undefined,
          });
        }}
      />
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
          <LogoDiv>
            <Image
              src={`/games/logo/${currentGame?.thumbUrl}.png`}
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
                  console.log('added');
                }}
              />
              <LikeButton
                onClick={() => {
                  console.log('liked');
                }}
              />
            </div>
          </LogoDiv>
          <ImageContainer>
            <Image
              src={`/games/banner/${currentGame?.thumbUrl}.png`}
              fill
              style={{
                objectFit: 'contain',
                zIndex: 0,
              }}
              draggable={false}
              alt="Game"
            />
          </ImageContainer>
        </BannerDiv>
        {currentGame?.company.join(' - ')}
      </Container>
    </>
  );
}
