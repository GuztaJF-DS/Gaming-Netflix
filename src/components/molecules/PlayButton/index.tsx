/* ----------------- External ----------------- */
import React from 'react';

/* ----------------- Atoms ----------------- */
import { RoundButton } from '@/components/atoms/RoundButton';

/* ----------------- SVG ----------------- */
import Play from '../../../../public/svg/play.svg';

/* ----------------- Interface ----------------- */
import { IDefaultButton } from '@/interfaces/IDefaultButton';

export function PlayButton({ onClick }: IDefaultButton) {
  return (
    <RoundButton onClick={onClick}>
      <Play />
    </RoundButton>
  );
}
