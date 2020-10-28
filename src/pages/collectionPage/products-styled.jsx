import styled from 'styled-components';
import {blue4} from './../../components/variables'
export const ProductsPageContainer = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap;
  padding:  1rem ;
 // margin:0 1rem;
`;
export const ContentTitle = styled.div`
  font-size: 2rem;
  color:${blue4};
  margin-bottom:1rem;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`