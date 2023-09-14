/* ----------------- External ----------------- */
import React, { useState } from 'react';

/* ----------------- Atom ----------------- */
import { RoundButton } from '@/components/atoms/RoundButton';

/* ----------------- SVGs ----------------- */
import Thumb1 from '../../../../public/svg/thumb1.svg';
import Thumb2 from '../../../../public/svg/thumb2.svg';

/* ----------------- Interface ----------------- */
import { IDefaultButton } from '@/interfaces/IDefaultButton';

export function LikeButton({ onClick }: IDefaultButton) {
  const [added, setAdded] = useState(false);

  return (
    <RoundButton
      onClick={() => {
        onClick();
        setAdded(!added);
      }}
    >
      {added ? (
        <Thumb2 fill={'rgba(255, 255, 255, 0.7)'} />
      ) : (
        <Thumb1 fill={'rgba(255, 255, 255, 0.7)'} />
      )}
    </RoundButton>
  );
}
