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
      {added ? <Checked /> : <Add />}
    </RoundButton>
  );
}
