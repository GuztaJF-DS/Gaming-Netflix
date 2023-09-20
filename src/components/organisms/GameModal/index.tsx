/* ----------------- External ----------------- */
import React from 'react';
import Image from 'next/image';
import { FakeData } from '@/api/FakeGameData';
import { LargePlayButton } from '@/components/molecules/LargePlayButton';
import { AddButton } from '@/components/molecules/AddButton';
import { LikeButton } from '@/components/molecules/LikeButton';

/* ----------------- Style ----------------- */
import {
  MaskBackground,
  Container,
  CloseButton,
  BannerContainer,
  ImageWrapper,
  LogoContainer,
  ImageContainer,
  ContentContainer,
  DescriptionRow,
  DetailsRow,
} from './style';

export function GameModal({
  gameSelected,
  setGameSelected,
}: {
  gameSelected: string;
  setGameSelected: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const currentGame = FakeData.find(data => data.id === gameSelected);
  return (
    <>
      <MaskBackground
        onClick={() => {
          setGameSelected(null);
        }}
      />
      <Container>
        <CloseButton
          onClick={() => {
            setGameSelected(null);
          }}
        >
          X
        </CloseButton>
        <BannerContainer>
          <ImageWrapper />
          <LogoContainer>
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
          </LogoContainer>
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
        </BannerContainer>
        <ContentContainer>
          <DescriptionRow>{currentGame?.description}</DescriptionRow>
          <DetailsRow>
            <div>
              <span>Made by:&nbsp;</span>
              {currentGame?.company.join(', ')}
            </div>
            <div>
              <span>Genres:&nbsp;</span>
              {currentGame?.genres.join(', ')}
            </div>
            <div>
              <span>Released for:&nbsp;</span>
              {currentGame?.platform.join(', ')}
            </div>
          </DetailsRow>
        </ContentContainer>
      </Container>
    </>
  );
}
