/* ----------------- External ----------------- */
import React from 'react';

/* ----------------- Interface ----------------- */
import { IDefaultButton } from '@/interfaces/IDefaultButton';

/* ----------------- Style ----------------- */
import { CustomButton, ImageContainer } from './style';

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
