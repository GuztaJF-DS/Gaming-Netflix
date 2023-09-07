/* eslint-disable react/jsx-key */
/* ----------------- External ----------------- */
import { FakeData } from '@/api/FakeGameData';
import { Card } from '@/components/atoms/Card';
import React, { useState } from 'react';

import Arrow from '../../../../public/svg/arrow-icon.svg';

/* ----------------- Style ----------------- */
import { Container, CardContainer, MoveButton } from './style';

export function Carrousel() {
  const [currentPage, setCurrentPage] = useState<number>(2);
  // const [mouseLeave, setMouseLeave] = useState<number>();

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
          <Card
            // onMouseOver={() => {
            //   setMouseLeave(
            //     window.setTimeout(() => {
            //       data.biggerCard = true;
            //       console.log('enter');
            //       setMouseLeave(0);
            //     }, 500),
            //   );
            // }}
            // onMouseOutCapture={() => {
            //   data.biggerCard = false;
            //   console.log('leave');
            //   clearTimeout(mouseLeave);
            //   setMouseLeave(1);
            // }}
            Data={data}
            // index={index + 1}
            // currentPage={currentPage}
          />
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
  );
}
