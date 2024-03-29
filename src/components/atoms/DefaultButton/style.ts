/* ----------------- External ----------------- */
import Styled, { css } from 'styled-components';

/* ----------------- Interface ----------------- */
import { IDefaultButton } from '@/interfaces/IDefaultButton';

export const CustomButton = Styled.button`
  ${({ backgroundColor, fontColor }: IDefaultButton) => css`
    z-index: 1;
    background-color: ${backgroundColor || '#e50914'};
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    color: ${fontColor || '#ffffff'};
    border-radius: 5px;
    font-weight: 500;
    margin-right: 10px;
    width: fit-content;
    font-size: 1.4vw;
    padding: 0.6vw 1.3vw;
    white-space: nowrap;
    background-clip: padding-box;
    border: 2px solid rgba(255, 255, 255, 0);
    :hover {
      filter: opacity(85%);
      cursor: pointer;
    }
    :active {
      filter: opacity(65%);
    }
    :focus {
      outline: 0.2vw solid #ffffff;
    }
    @media (max-width: 768px) {
      font-size: 1.8vw;
    }
  `}
`;

export const ImageContainer = Styled.div`
  display: flex;
  max-width: 20vw;
  padding-right: 2px;
  svg {
    width:3vw;
    height:1.8vw; 
  }
`;
