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

export function Card({
  Data,
  onMouseOutCapture,
  onMouseOver,
  LargerCard = false,
}: {
  Data: IFakeData;
  onMouseOutCapture: () => void;
  onMouseOver: () => void;
  LargerCard?: boolean;
}) {
  const [cardHover, setCardHover] = useState(false);
  useEffect(() => {
    if (LargerCard) {
      setCardHover(LargerCard);
    } else {
      sleep(400).then(() => {
        setCardHover(LargerCard);
      });
    }
  }, [LargerCard]);

  return (
    <>
      <HitboxContainer
        onMouseEnter={onMouseOver}
        onMouseLeave={onMouseOutCapture}
      >
        <MaskContainer LargerCard={cardHover} />
        <MainContainer Hovering={cardHover} LargerCard={LargerCard}>
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
