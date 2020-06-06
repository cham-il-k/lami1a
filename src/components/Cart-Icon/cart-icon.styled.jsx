import styled, {css} from 'styled-components';
import {textBlanc, textBleu} from './../variables'
import { ReactComponent as ShoppingIconSVG } from '../../assets/shopping-bag.svg';

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
  font-size: 2.5rem;
  
 
  
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 1rem;
  font-weight: bold;
  text-align:center;
  color:${textBlanc};
`;
