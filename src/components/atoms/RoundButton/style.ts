import Styled, { css } from 'styled-components';
import { IDefaultButton } from './index';

export const CustomButton = Styled.button`
  ${({ backgroundColor }: IDefaultButton) => css`
    background-color: ${backgroundColor || 'rgba(42,42,42,0.5)'};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    height: 42px;
    width: 42px;
    background-clip: padding-box;
    border: 3px solid rgba(255, 255, 255, 0.5);
    :hover {
      border: 3px solid hsla(0, 0%, 100%, 1);
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
`;
