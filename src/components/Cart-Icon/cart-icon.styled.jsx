import styled, {css} from 'styled-components';
import { blue1, green4, blue2 } from './../variables'

export const CartContainer = styled.div`
  width: 5rem;
  height: 5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled.div`
  position:absolute;
  font-size: 2rem;
  color:${blue1};
  `;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 1.5rem;
  top:1px;
  font-weight: bold;
  text-align:center;
  color:${blue2};
`;
