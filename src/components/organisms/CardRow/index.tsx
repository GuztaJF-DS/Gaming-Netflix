/* ----------------- External ----------------- */
import { Card } from '@/components/atoms/Card';
import React from 'react';

/* ----------------- Style ----------------- */
import { Container, CardContainer, MoveButton } from './style';

export function CardRow() {
  return (
    <Container>
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
      <MoveButton
        onClick={() => {
          console.log('return');
        }}
      >
        {'<'}
      </MoveButton>
      <MoveButton
        onClick={() => {
          console.log('return');
        }}
        Right={true}
      >
        {'>'}
      </MoveButton>
    </Container>
  );
}
