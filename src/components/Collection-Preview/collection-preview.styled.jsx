import styled from 'styled-components';
import {textBlanc, blue4, blanc} from './../variables'

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width:800px) {
}
  @media screen and (max-width:600px) {
  	}    
`;

export const TitleContainer = styled.h1`
  font-size: 2rem;
  color:${blue4};
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const PreviewCollections = styled.div`
  display: flex;
  flex-direction:row;
  font-size: 1.2rem;
  justify-content: space-between;
  align-items:center;
  padding:1rem;
  cursor: pointer;
  margin:0  1rem;

  @media screen and (max-width:800px) {
        wrap: wrap
      
  }
  @media screen and (max-width:600px) {
  	wrap: wrap
  	}    
`;

export const PreviewCollection = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  margin:0 .5rem;
  background-image:${({ imageUrl }) => `url(${imageUrl})`};
  width: 100%;
  height: 18rem;
  border-radius:.5rem;
  background-size: cover;
  color:${blue4};
  font-weight:bold;
  & > h2 {
    padding:2rem 2rem;
    background-color:${blanc};
    opacity:.8;
    border-radius:.5rem;
  }
`;