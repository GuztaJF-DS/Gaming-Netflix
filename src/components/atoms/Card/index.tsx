/* ----------------- External ----------------- */
import React, { useEffect, useState } from 'react';
// import Image from 'next/image';

/* ----------------- Style ----------------- */
import { MainContainer, HitboxContainer } from './style';

export function Card({
  Name,
  onMouseOutCapture,
  onMouseOver,
  BiggerCard = false,
}: {
  Name: string;
  onMouseOutCapture: () => void;
  onMouseOver: () => void;
  BiggerCard?: boolean;
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
      <HitboxContainer>
        aaa
        <MainContainer
          onMouseOutCapture={onMouseOutCapture}
          onMouseOver={onMouseOver}
          BiggerCard={BiggerCard}
          transitionCard={transitionCard}
        >
          {/* 
          <Image
          src={'/image/games/melee.jpeg'}
          fill
          style={{
            objectFit: 'cover',
            borderRadius: '3px',
          }}
          alt="Game"
          draggable={false}
        /> 
        */}
          {Name}
        </MainContainer>
      </HitboxContainer>
    </>
  );
}
