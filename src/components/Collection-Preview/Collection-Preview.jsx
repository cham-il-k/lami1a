import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../Collection-Item/Collection-Item';
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewCollection,
  PreviewCollections
} from './collection-preview.styled';

const CollectionPreview = ({collections,title,  routeName, history, match}) => {
    return (
     <CollectionPreviewContainer id="CollectionPreviewContainer">
          <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
          {title.toUpperCase()}
        </TitleContainer>
      
      <PreviewCollections id="PreviewCollections">
        {
        Object.keys(collections).map((collection,i) => {
      //    console.log({collection})
            const colRouteName = collections[collection]['rooteName']
            const colTitle = collections[collection]['title']
            const colImageUrl = collections[collection]['imageUrl']
        return (
           <PreviewCollection  key={i} onClick={()=>
              history.push(`${match.path}/${routeName}/${collection}`)}
              imageUrl={ `/assets${colImageUrl}`} >
              <h2>{ colTitle.toUpperCase()} </h2>
           </PreviewCollection>
        )
        })
        }
      </PreviewCollections>
      </CollectionPreviewContainer>
  )
}

export default withRouter(CollectionPreview);
