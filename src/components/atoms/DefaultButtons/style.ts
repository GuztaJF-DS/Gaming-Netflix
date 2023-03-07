import Styled, { css } from 'styled-components';
import { IDefaultButton } from './index';

export const CustomButton = Styled.button`
  ${({ backgroundColor, fontSize, fontColor }: IDefaultButton) => css`
    background-color: ${backgroundColor || '#e50914'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${fontColor || '#ffffff'};
    border-radius: 5px;
    font-size: ${fontSize || '1.2'}rem;
    font-weight: 500;
    width: fit-content;
    padding: 0.3rem 1.3rem;
    background-clip: padding-box;
    border: 2.5px solid rgba(0, 0, 0, 0.5);
    :hover {
      background-image: linear-gradient(rgb(0 0 0/15%) 0 0);
    }
    :active {
      background-image: linear-gradient(rgb(0 0 0/15%) 0 0);
      outline: 1.5px solid #ffffff;
    }
  `}
`;

export const ImageContainer = Styled.div`
  display: flex;
  background-color: transparent;
  padding-right: 9px;
  img {
    color:white;
    background-color: transparent;
  }
`;
