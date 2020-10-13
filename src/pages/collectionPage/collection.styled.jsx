import styled from 'styled-components';
import {Link} from 'react-router-dom'
import {textBlanc, blue4, blanc} from './../../components/variables'


export const CollectionPageContainer = styled.div`
  margin-top:2rem;
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled(Link)`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-bottom:6rem;
 
`;

export const TitleContainer = styled.h1`
  font-size: 2rem;
  color:${blue4};
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;