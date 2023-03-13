import React from 'react';
import { DefaultButton } from '@/components/atoms/DefaultButton';
import Play from '../../../../public/svg/play.svg';

export interface IDefaultButton {
  name?: string;
  onClick: () => void;
}

export function LargePlayButton({
  name = 'Assistir',
  onClick,
}: IDefaultButton) {
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
