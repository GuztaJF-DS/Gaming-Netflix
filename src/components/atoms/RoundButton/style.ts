/* ----------------- External ----------------- */
import Styled, { css } from 'styled-components';

/* ----------------- Interface ----------------- */
import { IDefaultButton } from '@/interfaces/IDefaultButton';

export const CustomButton = Styled.button`
  ${({ backgroundColor }: IDefaultButton) => css`
    background-color: ${backgroundColor || 'rgba(42,42,42,0.5)'};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    height: 2.8vw;
    width: 2.8vw;
    background-clip: padding-box;
    border: 0.2vw solid rgba(255, 255, 255, 0.5);
    :hover {
      border: 0.2vw solid hsla(0, 0%, 100%, 1);
    }
    :active {
      filter: opacity(65%);
    }
    :focus {
      outline: 0.2vw solid #ffffff;
    }
    @media (max-width: 425px) {
      height: 3vw;
      width: 0vw;
    }
  `}
`;

export const ImageContainer = Styled.div`
  display: flex;
  background-color: transparent;
  height: 1vw;
  @media (max-width: 425px) {
    height: 1vw;
    width: 1vw;
  }
`;
