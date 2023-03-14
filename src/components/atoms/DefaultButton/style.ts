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
    }
    :active {
      filter: opacity(65%);
    }
    :focus {
      outline: 2px solid #ffffff;
    }
    @media screen and (max-width: 450px) {
      padding: 0.8vw 1.2vw;
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
    @media screen and (max-width:768px){
      max-width:2.5vw;
      max-height:10px;
    }
  }
`;
