import styled from 'styled-components';
import CustomButton from '../CustomButton/CustomButton';
import {textBlue} from '../../components/variables'
import {Link} from 'react-router-dom'
export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

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
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 95%;
  background-size: contain;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const NameContainer = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
  width: 10%;
  text-align: right;
`;
export const LinkProduct = styled(Link)`

  width:100%;
  height:100%;
  opacity:0.6;
`
export const ContactContainer = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width: 400px;
`;
export const Coordone = styled.div`
  
  display: flex;
  margin-top:3rem;
  flex-direction: column;
  justify-content:center;
  align-items:center;

`
export const CancelButton = styled.div`
    position: absolute;
    top:5px;
    right:5px;
    font-size: 3rem;
    padding:1rem;
    color:aqua;
    cursor:pointer
`
export const ContactTitle = styled.h2`
  margin: 10px 0;
`;
export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Message = styled.h2`
margin: 10px;
color:${textBlue}
`;