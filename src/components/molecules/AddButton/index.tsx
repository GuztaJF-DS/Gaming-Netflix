/* ----------------- External ----------------- */
import React, { useState } from 'react';

/* ----------------- Atom ----------------- */
import { RoundButton } from '@/components/atoms/RoundButton';

/* ----------------- SVGs ----------------- */
import Add from '../../../../public/svg/add.svg';
import Checked from '../../../../public/svg/checked.svg';

/* ----------------- Interface ----------------- */
import { IDefaultButton } from '@/interfaces/IDefaultButton';

export function AddButton({ onClick }: IDefaultButton) {
  const [added, setAdded] = useState(false);

  return (
    <RoundButton
      onClick={() => {
        onClick();
        setAdded(!added);
      }}
    >
      {added ? (
        <Checked width={20} height={20} fill={'rgba(255, 255, 255, 0.7)'} />
      ) : (
        <Add width={20} height={20} fill={'rgba(255, 255, 255, 0.7)'} />
      )}
    </RoundButton>
  );
}
