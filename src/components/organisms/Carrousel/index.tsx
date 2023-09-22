/* eslint-disable react/jsx-key */
/* ----------------- External ----------------- */
import React, { useState, useEffect } from 'react';
import { FakeData } from '@/api/FakeGameData';
import { Card } from '@/components/atoms/Card';
import Arrow from '../../../../public/svg/arrow-icon.svg';

/* ----------------- Style ----------------- */
import { Container, CardContainer, MoveButton } from './style';

function getCurrentDimension() {
  if (typeof window !== 'undefined') {
    if (window.innerWidth <= 768 && window.innerWidth >= 0) {
      return 4;
    } else {
      return 6;
    }
  }
  return 6;
}

export function Carrousel({
  setGameSelected,
}: {
  setGameSelected: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pagesAmount, setPagesAmount] = useState(getCurrentDimension());
  const [cancelHover, setCancelHover] = useState(false);

  useEffect(() => {
    const updateDimension = () => {
      setPagesAmount(getCurrentDimension());
      if (
        currentPage + 1 > Math.ceil(FakeData.length / 6) &&
        window.innerWidth >= 768
      ) {
        setCurrentPage(Math.ceil(FakeData.length / 6) - 1);
      }
    };
    window.addEventListener('resize', updateDimension);

    return () => {
      window.removeEventListener('resize', updateDimension);
    };
  }, [pagesAmount, currentPage]);

  function UpdatePage(sum: boolean) {
    if (sum) {
      if (currentPage + 1 < Math.ceil(FakeData.length / pagesAmount)) {
        setCurrentPage(currentPage + 1);
      } else {
        setCurrentPage(0);
      }
    } else if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <>
      <Container>
        <p>GameCube Era</p>
        <MoveButton
          onClick={() => {
            UpdatePage(false);
            setCancelHover(true);
          }}
        >
          <Arrow />
        </MoveButton>
        <CardContainer currentPage={currentPage}>
          {FakeData.map(data => (
            <Card
              cancelHover={cancelHover}
              setCancelHover={setCancelHover}
              data={data}
              setGameSelected={setGameSelected}
            />
          ))}
        </CardContainer>
        <MoveButton
          onClick={() => {
            UpdatePage(true);
            setCancelHover(true);
          }}
        >
          <Arrow />
        </MoveButton>
      </Container>
    </>
  );
}
