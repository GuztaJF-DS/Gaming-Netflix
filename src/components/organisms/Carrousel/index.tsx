/* eslint-disable react/jsx-key */
/* ----------------- External ----------------- */
import React, { useState } from 'react';
import { FakeData } from '@/api/FakeGameData';
import { Card } from '@/components/atoms/Card';
import Arrow from '../../../../public/svg/arrow-icon.svg';

/* ----------------- Style ----------------- */
import { Container, CardContainer, MoveButton } from './style';

export function Carrousel({
  setGameSelected,
}: {
  setGameSelected: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [currentPage, setCurrentPage] = useState<number>(0);

  function UpdatePage(sum: boolean) {
    if (sum) {
      if (currentPage + 1 < Math.ceil(FakeData.length / 6)) {
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
        {currentPage !== 0 && (
          <MoveButton
            onClick={() => {
              UpdatePage(false);
            }}
          >
            <Arrow />
          </MoveButton>
        )}
        <p>GameCube Era</p>
        <CardContainer currentPage={currentPage}>
          {FakeData.map(data => (
            <Card Data={data} setGameSelected={setGameSelected} />
          ))}
        </CardContainer>
        <MoveButton
          onClick={() => {
            UpdatePage(true);
          }}
        >
          <Arrow />
        </MoveButton>
      </Container>
    </>
  );
}
