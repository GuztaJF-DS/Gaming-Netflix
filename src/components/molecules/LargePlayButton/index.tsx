/* ----------------- External ----------------- */
import React from 'react';

/* ----------------- Atoms ----------------- */
import { DefaultButton } from '@/components/atoms/DefaultButton';

/* ----------------- SVG ----------------- */
import Play from '../../../../public/svg/play.svg';

/* ----------------- Interface ----------------- */
import { IDefaultButton } from '@/interfaces/IDefaultButton';

export function LargePlayButton({ name = 'Play', onClick }: IDefaultButton) {
  return (
    <DefaultButton
      name={name}
      onClick={onClick}
      backgroundColor={'white'}
      fontColor={'#000000'}
    >
      <Play width={20} height={20} fill={'black'} />
    </DefaultButton>
  );
}
