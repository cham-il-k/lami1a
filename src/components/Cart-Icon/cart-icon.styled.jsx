import styled, {css} from 'styled-components';
import { green1, green4 } from './../variables'

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
  font-size: 2.7rem;
  color:${green4};
  `;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 1.3rem;
  top:5px;
  
  font-weight: bold;
  text-align:center;
  color:${green1};
`;
