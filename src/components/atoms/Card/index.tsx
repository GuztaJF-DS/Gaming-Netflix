/* ----------------- External ----------------- */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
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

export function Card({ Data }: { Data: IFakeData; index: number }) {
  const router = useRouter();
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
                router.replace({
                  query: { ...router.query, id: Data.id },
                });
              }}
            />
            <BottomContainer MainHover={mainHover}>
              <NameContainer>{Data.name}</NameContainer>
              <PlayButton
                onClick={() => {
                  router.replace({
                    query: { ...router.query, id: Data.id },
                  });
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
