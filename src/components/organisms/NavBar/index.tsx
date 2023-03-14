/* ----------------- External ----------------- */
import React from 'react';
import Image from 'next/image';

/* ----------------- Style ----------------- */
import { MainContainer } from './style';

export function NavBar() {
  return (
    <MainContainer>
      <Image src={'/svg/logo.svg'} fill alt={'gameflix'} />
    </MainContainer>
  );
}
