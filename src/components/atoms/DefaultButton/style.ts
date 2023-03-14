/* ----------------- External ----------------- */
import Styled, { css } from 'styled-components';

/* ----------------- Interface ----------------- */
import { IDefaultButton } from '@/interfaces/IDefaultButton';

export const CustomButton = Styled.button`
  ${({ backgroundColor, fontColor }: IDefaultButton) => css`
    background-color: ${backgroundColor || '#e50914'};
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    color: ${fontColor || '#ffffff'};
    border-radius: 7px;
    font-weight: 500;
    margin-right: 10px;
    width: fit-content;
    font-size: 1.7vw;
    padding: 1vw 1.5vw;
    white-space: nowrap;
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
  svg {
  }
`;
