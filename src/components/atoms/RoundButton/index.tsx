import React from 'react';
import { CustomButton, ImageContainer } from './style';

export interface IDefaultButton {
  name?: string;
  backgroundColor?: string;
  fontSize?: number;
  fontColor?: string;
  children: React.ReactElement;
  onClick: () => void;
}

export function RoundButton({
  name,
  backgroundColor,
  fontSize,
  fontColor,
  children,
  onClick,
}: IDefaultButton) {
  return (
    <CustomButton
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      fontColor={fontColor}
      onClick={onClick}
    >
      <>
        <ImageContainer>{children}</ImageContainer>
        {name}
      </>
    </CustomButton>
  );
}
