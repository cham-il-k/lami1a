import styled from 'styled-components';
import { green3,textBlue, blue2, blue3 } from '../../components/variables';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0 auto 30px;
  color: ${green3};
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margin-bottom: 30px;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 400px;
`;

export const CollectionContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 400px;
`;
export const FileContainer = styled.div`
display: flex;
margin: .5rem auto;
flex-direction: column;
padding:.5rem;
width: 400px;
`;
export const ProductTitle = styled.h2`
 margin: 10px 0;
  font-size:2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color:${textBlue};
  
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Message = styled.h2`
margin: 10px;
color:${blue3};
`;
export const AddProductContainer= styled.div`
 display: flex;

`
