/* ----------------- External ----------------- */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import sleep from '@/utils/sleep';

/* ----------------- Style ----------------- */
import {
  HitboxContainer,
  MainContainer,
  MaskContainer,
  ImageContainer,
  BottomContainer,
  NameContainer,
} from './style';
import { IFakeData } from '@/api/FakeGameData';
import { PlayButton } from '@/components/molecules/PlayButton';
import { AddButton } from '@/components/molecules/AddButton';

export function Card({
  Data,
  setGameSelected,
}: {
  Data: IFakeData;
  setGameSelected: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [mainHover, setMainHover] = useState(false);
  const [delayHover, setDelayHover] = useState(false);
  const [mouseTimer, setMouseTimer] = useState<number>();
  useEffect(() => {
    if (mainHover) {
      setDelayHover(mainHover);
    } else {
      sleep(400).then(() => {
        setDelayHover(mainHover);
      });
    }
  }, [mainHover]);

  return (
    <>
      <HitboxContainer
        onMouseEnter={() => {
          setMouseTimer(
            window.setTimeout(() => {
              setMainHover(true);
              setMouseTimer(0);
            }, 500),
          );
        }}
        onMouseLeave={() => {
          setMainHover(false);
          clearTimeout(mouseTimer);
          setMouseTimer(1);
        }}
      >
        <MaskContainer MainHover={delayHover} />
        <MainContainer DelayHover={delayHover} MainHover={mainHover}>
          <ImageContainer>
            <Image
              src={`/games/cover/${Data.thumbUrl}.png`}
              fill
              style={{
                objectFit: 'cover',
                borderRadius: '5px',
              }}
              alt="Game"
              draggable={false}
              onClick={() => {
                setGameSelected(Data.id);
              }}
            />
            <BottomContainer MainHover={mainHover}>
              <NameContainer>{Data.name}</NameContainer>
              <PlayButton
                onClick={() => {
                  setGameSelected(Data.id);
                }}
              />
              <AddButton
                onClick={() => {
                  console.log('play');
                }}
              />
            </BottomContainer>
          </ImageContainer>
        </MainContainer>
      </HitboxContainer>
    </>
  );
}
