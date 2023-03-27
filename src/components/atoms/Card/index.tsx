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
  index,
  currentPage,
}: {
  Name: string;
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
      <HitboxContainer>
        <MainContainer
          onMouseOutCapture={onMouseOutCapture}
          onMouseOver={onMouseOver}
          BiggerCard={BiggerCard}
          transitionCard={transitionCard}
          index={index}
          currentPage={currentPage}
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
