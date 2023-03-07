import React from 'react';
import Image from 'next/image';
import { CustomButton, ImageContainer } from './style';

export interface IDefaultButton {
  name?: string;
  backgroundColor?: string;
  fontSize?: number;
  fontColor?: string;
}

export function DefaultButton({
  name,
  backgroundColor,
  fontSize,
}: IDefaultButton) {
  return (
    <CustomButton backgroundColor={backgroundColor} fontSize={fontSize}>
      <ImageContainer>
        <Image src="svg/info.svg" height={20} width={20} alt="svg" />
      </ImageContainer>
      {name}
    </CustomButton>
  );
}
