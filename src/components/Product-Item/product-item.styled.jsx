import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton';
import {green3, green2, textBlue, blue41, textVert} from './../variables'

export const ProductItemContainer = styled.article`
  width: 100%;
  max-width:370px;
  display: flex;
  border-radius:5px;
  flex-direction: column;
  height: 350px;
  margin-bottom:.5rem;
  justify-content:center;
  box-shadow:0 7px 30px -10px #777 ;
  align-items: center;
  flex-wrap:wrap;
  padding:1rem auto !important;
  position: relative;
  
 @media screen and (min-width: 768px) {
      flex:0 1 47%; 
  }
 @media screen and (min-width: 992px) {
      flex:0 1 30%;  
}
  &:hover {
    .image {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  `;

export const AddButton = styled(CustomButton)`
  width: 50%;
  opacity: 0.7;
  position: absolute;
  color:${green3};
  background-color:${blue41};
  bottom: 1px;
  text-align:center;
  display: block;
  `;

export const BackgroundImage = styled.div`
  width: 100%;
  max-width:300px;
  border-radius:.5rem;
  height: 60%;
  cursor: pointer;
  background-size: contain;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({imageUrl}) => `url("${imageUrl}")`};
  
`;

export const ProductFooterContainer = styled.div`
  width: 100%;
  max-width:300px;
  display: flex;
  padding:1rem;
  justify-content: space-evenly;
  font-size: 1.3rem;
  color:${textVert};
  line-height:1.8rem;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 1.3rem;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
&:after {
  content:'€'
}
`;
