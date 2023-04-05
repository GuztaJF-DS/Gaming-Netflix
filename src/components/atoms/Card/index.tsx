/* ----------------- External ----------------- */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

/* ----------------- Style ----------------- */
import { HitboxContainer, MainContainer, ImageContainer } from './style';

export function Card({
  Data,
  onMouseOutCapture,
  onMouseOver,
  BiggerCard = false,
  index,
  currentPage,
}: {
  Data: any;
  onMouseOutCapture: () => void;
  onMouseOver: () => void;
  BiggerCard?: boolean;
  index: number;
  currentPage: number;
}) {
  const [transitionCard, setTransitionCard] = useState(false);

  useEffect(() => {
    if (BiggerCard === false) {
      window.setTimeout(() => {
        setTransitionCard(BiggerCard);
      }, 500);
    } else {
      setTransitionCard(BiggerCard);
    }
  }, [BiggerCard]);

  return (
    <>
      <HitboxContainer
        onMouseLeave={onMouseOutCapture}
        onMouseEnter={onMouseOver}
      >
        <MainContainer
          BiggerCard={BiggerCard}
          transitionCard={transitionCard}
          index={index}
          currentPage={currentPage}
        >
          <ImageContainer>
            <Image
              src={Data.thumbUrl}
              fill
              style={{
                objectFit: 'cover',
                borderRadius: '3px',
              }}
              alt="Game"
              draggable={false}
            />
          </ImageContainer>
          {BiggerCard && <div>{Data.name}</div>}
        </MainContainer>
      </HitboxContainer>
    </>
  );
}
