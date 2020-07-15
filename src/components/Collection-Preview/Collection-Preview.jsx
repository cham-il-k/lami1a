import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../Collection-Item/Collection-Item';
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewCollection,
  PreviewCollections
} from './collection-preview.styled';

const CollectionPreview = ({collections,title, id, routeName, history, match}) => {
//console.log({match,history, collections})
    return (
     <CollectionPreviewContainer id="CollectionPreviewContainer">
          <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
          {title.toUpperCase()}
        </TitleContainer>
      
      <PreviewCollections id="PreviewCollections">
        {
        Object.entries(collections).map((collection,i) => {
        return (
           <PreviewCollection  key={i} onClick={()=>
              history.push(`${match.path}/${routeName}`)}
              imageUrl={ `./assets${collection[1]['imageUrl']}`} >
              <h2>{ collection[1]['title'].toUpperCase()} </h2>
           </PreviewCollection>
        )
        })
        }
      </PreviewCollections>
      </CollectionPreviewContainer>
  )
}

export default withRouter(CollectionPreview);
