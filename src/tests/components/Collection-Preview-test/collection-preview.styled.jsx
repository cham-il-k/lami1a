import styled from 'styled-components';
import {textBlanc, blue4} from '../variables'
export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const TitleContainer = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
  color:${blue4};
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const PreviewCollections = styled.div`
  display: flex;
  flex-direction:row;
  font-size: 18px;
  justify-content: space-between;
  align-items:center;
  padding:0;
  cursor: pointer;
  margin:3rem 2rem 1rem;
`;

export const PreviewCollection = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  margin:-3rem 1rem 1rem;
  background-image:${({ imageUrl }) => `url(${imageUrl})`};
  width:100%;
  height:300px;
  color:${textBlanc}
`;