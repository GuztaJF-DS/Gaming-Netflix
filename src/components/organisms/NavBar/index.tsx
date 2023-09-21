/* ----------------- External ----------------- */
import React from 'react';
import Image from 'next/image';

/* ----------------- Style ----------------- */
import {
  MainContainer,
  ImageContainer,
  ButtonContainer,
  ButtonNav,
  IconContainer,
  IconNav,
  ProfilePic,
} from './style';

export function NavBar({ blackHeader }: { blackHeader: boolean }) {
  return (
    <MainContainer blackHeader={blackHeader}>
      <ImageContainer>
        <Image src={'/svg/logo.svg'} fill alt={'gameflix'} />
      </ImageContainer>
      <ButtonContainer>
        <ButtonNav>Main Page</ButtonNav>
        <ButtonNav>Games</ButtonNav>
        <ButtonNav>New & Popular</ButtonNav>
        <ButtonNav>My List</ButtonNav>
        <ButtonNav>Browse By Consoles</ButtonNav>
      </ButtonContainer>
      <IconContainer>
        <IconNav>
          <Image src={'/svg/search.svg'} fill alt={'search'} />
        </IconNav>
        <IconNav>
          <Image src={'/svg/bell.svg'} fill alt={'bell'} />
        </IconNav>
        <ProfilePic>
          <Image src={'/images/ProfilePic/Mario.png'} fill alt={'bell'} />
          <p>▼</p>
        </ProfilePic>
      </IconContainer>
    </MainContainer>
  );
}
