import React from 'react';
import { RoundButton } from '@/components/atoms/RoundButton';
import Play from '../../../../public/svg/play.svg';

export interface IDefaultButton {
  name?: string;
  onClick: () => void;
}

export function PlayButton({ onClick }: IDefaultButton) {
  return (
    <RoundButton onClick={onClick}>
      <Play width={20} height={20} fill={'rgba(255, 255, 255, 0.7)'} />
    </RoundButton>
  );
}
