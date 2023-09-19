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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non
          luctus sem. Mauris consectetur, velit eu laoreet maximus, lorem turpis
          tincidunt dolor, ac rhoncus lacus odio scelerisque odio. Sed arcu
          metus, euismod sed orci at, finibus suscipit nunc. Cras sed
          pellentesque nisl. Morbi consectetur tempor dictum. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Vestibulum sit amet interdum
          orci. Proin sed tristique nisi. Ut euismod sapien ac purus fermentum
          convallis. Cras imperdiet augue libero, vitae imperdiet nisl venenatis
          ac. Cras orci est, tempus eget diam vel, imperdiet venenatis enim.
          Nullam commodo aliquet odio, sit amet dictum tortor euismod non. Proin
          sed scelerisque mauris. Mauris sagittis luctus ante, at luctus purus
          venenatis pretium. Nulla lobortis vel urna id tincidunt. Vestibulum
          vehicula elementum dolor, in vehicula nisl. Curabitur hendrerit enim
          sit amet erat lacinia tempor. Phasellus at massa nulla. Vestibulum
          ultrices sapien in mi ullamcorper, vitae condimentum ipsum tempor.
          Praesent aliquam pulvinar elementum. Cras quis quam et ligula
          condimentum tincidunt. Donec pretium tristique ante, eget feugiat
          mauris efficitur sed. Ut in ante sem. Sed bibendum odio sit amet
          mauris tempus suscipit. Praesent erat risus, lacinia ut blandit quis,
          facilisis non nunc. Aliquam non sapien metus. Integer metus ex,
          fermentum sit amet dui nec, volutpat tempor orci. Aliquam dolor
          turpis, cursus et metus et, suscipit accumsan mi. Praesent gravida
          felis sed felis vestibulum, nec mollis lectus volutpat. Integer id
          mattis quam, eu dapibus dolor. Sed sit amet ornare mi, nec fermentum
          ipsum. Suspendisse dictum nunc nunc, ut consequat nisl pharetra
          faucibus. Mauris tincidunt sit amet ipsum vitae cursus. Sed maximus
          finibus mauris. Curabitur et nunc nulla. Curabitur sagittis purus sit
          amet est tristique aliquet. Morbi faucibus, nisl consectetur congue
          cursus, risus nisi tempor risus, sit amet pretium purus ligula a arcu.
          Cras rhoncus, eros in bibendum elementum, nibh velit volutpat mi, id
          tristique erat purus non arcu. Proin porttitor metus nisi, a cursus
          ante aliquam et.
        </ContentContainer>
      </Container>
    </>
  );
}
