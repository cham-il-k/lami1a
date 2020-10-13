import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton';
import {Link} from 'react-router-dom'
import {blue4} from './../variables'
export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 250px;
  
  align-items: center;
  position: relative;
  &:hover {
    .image {
      opacity: 0.9;
    }
   button {
      opacity: 0.85;
      display: flex;
    }
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
  background-size: cover;
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