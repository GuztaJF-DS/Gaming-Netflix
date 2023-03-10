/* ----------------- External ----------------- */
import React from 'react';

/* ----------------- Atom ----------------- */
import { DefaultButton } from '@/components/atoms/DefaultButton';

/* ----------------- SVGs ----------------- */
import Info from '../../../../public/svg/info.svg';

/* ----------------- Interface ----------------- */
import { IDefaultButton } from '@/interfaces/IDefaultButton';

export function InfoButton({
  name = 'Mais informações',
  onClick,
}: IDefaultButton) {
  return (
    <DefaultButton
      name={name}
      onClick={onClick}
      backgroundColor={'rgba(134, 134, 134, 0.7)'}
      fontColor={'#ffffff'}
    >
      <Info width={20} height={20} fill={'#ffffff'} />
    </DefaultButton>
  );
}
