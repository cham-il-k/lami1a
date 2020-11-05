import styled from 'styled-components';
import {green3, green1,textBlue, blue41, textVert, textBlanc, blue4, blanc} from './../variables'


export const Selection = styled.div`
 display:flex;
 flex-direction:column;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap;
  width:100%;
  padding:  1rem ;
 // margin:0 1rem;    



`

export const TitleContainer = styled.h1`
  font-size: 2rem;
  color:${blue4};
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;



export const CollectionPreviewContainer = styled.article`
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
  justify-content:space-between
}
  `;


export const BackgroundImage = styled.div`
  width: 100%;
  max-width:300px;
  border-radius:5px;
  height: 90%;
  cursor: pointer;
  background-size: contain;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({imageUrl}) => `url("${imageUrl}")`};
`;
export const CollectionTitle = styled.h2`
  font-size:2rem;
  padding:1rem;
  position:absolute;
  top:50%;
  left:50%;
  opacity:.5;
  transform:translate(-50%,-50%);
  background-color:${blanc};
  color:${textBlue};
`
export const PreviewCollection = styled.div`
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
  padding:1rem;
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