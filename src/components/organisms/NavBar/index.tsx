/* ----------------- External ----------------- */
import React from 'react';
import Image from 'next/image';

/* ----------------- Style ----------------- */
import { MainContainer, Mask } from './style';

export function NavBar() {
  return (
    <>
      <MainContainer>
        <Image src={'/svg/logo.svg'} width={120} height={50} alt={'gameflix'} />
      </MainContainer>
      <Mask />
    </>
  );
}
