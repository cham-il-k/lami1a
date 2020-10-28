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
   width: 100%;
  display: flex;
  position:relative;
    flex-direction:column;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  border-radius:5px;
  &:hover {
    .image {
      opacity: 0.8;
    }
    }

 @media screen and (min-width: 768px) {
    flex-direction:row;
    justify-content:space-evenly
 }
 @media screen and (min-width: 992px) {
  flex-direction:row;
  justify-content:space-evenly
}
`;

export const TitleContainer = styled.h1`
  font-size: 2rem;
  color:${blue4};
  text-align:center;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;