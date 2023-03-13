/* ----------------- External ----------------- */
import Styled, { css } from 'styled-components';

/* ----------------- Interface ----------------- */
import { IDefaultButton } from '@/interfaces/IDefaultButton';

export const CustomButton = Styled.button`
  ${({ backgroundColor, fontSize, fontColor }: IDefaultButton) => css`
    background-color: ${backgroundColor || '#e50914'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${fontColor || '#ffffff'};
    border-radius: 7px;
    font-size: ${fontSize || '1.2'}rem;
    font-weight: 500;
    width: fit-content;
    padding: 0.6rem 1.3rem;
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
  background-color: transparent;
  padding-right: 9px;
`;
