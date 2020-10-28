/**
 * /shop/selection
 * collection . . .books/sagesse
 * collection      books/dogme
 */

 import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../Collection-Item/Collection-Item';
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewCollection,
  CollectionTitle,  Selection,BackgroundImage
} from './collection-preview.styled';

const CollectionPreview = ({collections,title,  routeName, history, match}) => {
  return (
          <Selection id='Selection' >
            <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
              {title.toUpperCase()}
            </TitleContainer>
            <CollectionPreviewContainer id="CollectionPreviewContainer">
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
                      <BackgroundImage imageUrl={ `/assets${colImageUrl}`}></BackgroundImage>
                    <CollectionTitle>{ colTitle.toUpperCase()} </CollectionTitle>
                 </PreviewCollection>
              )
              })
              }
            </CollectionPreviewContainer>
      </Selection>
          
  )
}

export default withRouter(CollectionPreview);
