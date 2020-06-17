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
console.log({})
    return (
     <CollectionPreviewContainer>
          <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
          {title.toUpperCase()}
        </TitleContainer>
      <PreviewCollections>
        {
        Object.entries(collections).map((collection,i) => {
        return (
           <PreviewCollection  key={i} onClick={()=>
              history.push(`products${collection[1]['linkUrl']}`)}
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
