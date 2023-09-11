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
} from './style';
import { IFakeData } from '@/api/FakeGameData';

export function Card({ Data, index }: { Data: IFakeData; index: number }) {
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
        <MainContainer
          Index={index}
          DelayHover={delayHover}
          MainHover={mainHover}
          CurrentPage={Math.ceil(index / 6)}
        >
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
