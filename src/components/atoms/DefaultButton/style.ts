/* ----------------- External ----------------- */
import Styled, { css } from 'styled-components';

/* ----------------- Interface ----------------- */
import { IDefaultButton } from '@/interfaces/IDefaultButton';

export const CustomButton = Styled.button`
  ${({ backgroundColor, fontColor }: IDefaultButton) => css`
    background-color: ${backgroundColor || '#e50914'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${fontColor || '#ffffff'};
    border-radius: 7px;
    font-size: 2vw;
    font-weight: 500;
    margin-right: 10px;
    max-width: 25vw;
    width: fit-content;
    padding: 1.7vh 2vw;
    background-clip: padding-box;
    border: 2px solid rgba(255, 255, 255, 0);
    :hover {
      filter: opacity(85%);
    }
    :active {
      filter: opacity(65%);
    }
    :focus {
      outline: 2px solid #ffffff;
    }
  `}
`;

export const ImageContainer = Styled.div`
  display: flex;
  max-width: 20vw;
  padding-right: 9px;
`;
