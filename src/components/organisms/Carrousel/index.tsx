/* eslint-disable react/jsx-key */
/* ----------------- External ----------------- */
import { FakeData } from '@/api/FakeGameData';
import { Card } from '@/components/atoms/Card';
import React, { useState } from 'react';

/* ----------------- Style ----------------- */
import { Container, CardContainer } from './style';

export function Carrousel() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Container>
      <p>GameCube/GBA Era</p>
      <CardContainer currentPage={currentPage}>
        {FakeData.map(data => (
          <Card Data={data} />
        ))}
      </CardContainer>
    </Container>
  );
}
