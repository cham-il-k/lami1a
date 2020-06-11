import styled from 'styled-components';
import {textBleu, subText} from './../../components/variables'

export const collectionContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 400px;
`;

export const collectionTitle = styled.h2`
  margin: 10px 0;
`;
export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Message = styled.h2`
margin: 10px;
color:${textBleu};
`;
export const addProductContainer = styled.div`
 display: flex;

`
export const selectContainer = styled.div`
  background: none;
  background-color: white;
  color: ${subText};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subText};
  margin: 25px 0;

  &:focus {
    outline: none;
  
 }
`
