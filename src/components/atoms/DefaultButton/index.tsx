/* ----------------- External ----------------- */
import React from 'react';

/* ----------------- Interface ----------------- */
import { IDefaultButton } from '@/interfaces/IDefaultButton';

/* ----------------- Style ----------------- */
import { CustomButton, ImageContainer } from './style';

export function DefaultButton({
  name,
  backgroundColor,
  fontColor,
  children,
  onClick,
}: IDefaultButton) {
  return (
    <CustomButton
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      onClick={onClick}
    >
      <>
        {children && <ImageContainer>{children}</ImageContainer>}
        {name}
      </>
    </CustomButton>
  );
}
