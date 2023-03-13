import React, { useState } from 'react';
import { RoundButton } from '@/components/atoms/RoundButton';
import Add from '../../../../public/svg/add.svg';
import Checked from '../../../../public/svg/checked.svg';

export interface IDefaultButton {
  name?: string;
  onClick: () => void;
}

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
        <Add width={20} height={20} fill={'rgba(255, 255, 255, 0.7)'} />
      ) : (
        <Checked width={20} height={20} fill={'rgba(255, 255, 255, 0.7)'} />
      )}
    </RoundButton>
  );
}
