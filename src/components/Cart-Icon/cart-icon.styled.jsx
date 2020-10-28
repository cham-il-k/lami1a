import styled, {css} from 'styled-components';
import { blue1, green4, blue2 } from './../variables'

export const CartContainer = styled.div`
  margin-left:1rem;
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
  font-size: 1.33rem;
  top:2px;
  font-weight: 400;
  text-align:center;
  color:${blue2};
`;
