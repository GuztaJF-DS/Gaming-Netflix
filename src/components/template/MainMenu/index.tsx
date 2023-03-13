/* ----------------- External ----------------- */
import React from 'react';

/* ----------------- Style ----------------- */
import { Container, MainCardImage, Content } from './style';

/* ----------------- Molecules ----------------- */
import { LargePlayButton } from '@/components/molecules/LargePlayButton';
import { InfoButton } from '@/components/molecules/InfoButton';
import { PlayButton } from '@/components/molecules/PlayButton';
import { AddButton } from '@/components/molecules/AddButton';

/* ----------------- Organisms ----------------- */
import { NavBar } from '@/components/organisms/NavBar';

export function MainMenu() {
  return (
    <Container>
      <MainCardImage />
      <NavBar />
      <Content>
        <LargePlayButton
          onClick={() => {
            console.log('play');
          }}
        />
        <InfoButton
          onClick={() => {
            console.log('info');
          }}
        />
        <PlayButton
          onClick={() => {
            console.log('Round');
          }}
        />
        <AddButton
          onClick={() => {
            console.log('Round');
          }}
        />
      </Content>
    </Container>
  );
}
