import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton';
import {green2} from './../variables'

export const CartDropdownContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-radius:.5rem;
  //border: 1px solid ${green2};
  background-color: white;
  top: 90px;
  right: -10px;
  z-index: 5;
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
  font-size:10px;
  align-self:center;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-wrap:break-word ;
`;
