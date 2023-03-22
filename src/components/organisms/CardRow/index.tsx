/* eslint-disable react/jsx-key */
/* ----------------- External ----------------- */
import { FakeData } from '@/api/FakeGameData';
import { Card } from '@/components/atoms/Card';
import React from 'react';

/* ----------------- Style ----------------- */
import { Container, CardContainer, MoveButton } from './style';

export function CardRow() {
  return (
    <Container>
      <MoveButton
        onClick={() => {
          console.log('return');
        }}
      >
        {'<'}
      </MoveButton>
      <CardContainer>
        {FakeData.map(data => {
          return <Card Name={data.name} />;
        })}
      </CardContainer>
      <MoveButton
        onClick={() => {
          console.log('return');
        }}
      >
        {'>'}
      </MoveButton>
    </Container>
  );
}
