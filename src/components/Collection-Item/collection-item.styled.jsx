import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton';
import {Link} from 'react-router-dom'
import {blue4} from './../variables'

export const CollectionItemContainer = styled.div`
  //width: 15rem;
  display: flex;
  flex-direction: column;
  height: 250px;
  align-items: center;
  position: relative;
  margin-bottom:7rem;  
  &:hover {
    .image {
      opacity: 0.9;
    }
   button {
      opacity: 0.85;
      display: flex;
    }
  }
  
 @media screen and (min-width: 768px) {
      flex:0 1 48% !important;
      background-color:tomato ;
  }
 @media screen and (min-width: 992px) {
        flex:0 1 30% !important ;  
        background-color:greenyellow;
}
 
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 271px;
  border-radius:1rem;
  background-size: contain;
  background-position: center;
  margin-bottom: 2rem;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-evenly;
  align-items:center;
  font-size: 1.2rem;
  color:${blue4};
  margin-bottom:2rem;
`;

export const NameContainer = styled.div`
  display:inline-block;
  margin-bottom: 15px;
  
`;

export const PriceContainer = styled.span`
  
  text-align: right;
  margin-bottom: 15px;
  text-decoration: none;
`;
export const LinkProduct = styled(Link)`
  width:100%;
  height:100%;
  opacity:0.8;
  text-decoration: none;
  margin-bottom:2rem;
`