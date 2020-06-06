import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../Collection-Item/Collection-Item';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewCollection,
  PreviewCollections
} from './collection-preview.styled';


class CollectionPreview extends Component {

render() {
    
    const {collections, imageUrl, title, history, match, linkUrl } = this.props
    return (
      <CollectionPreviewContainer>
          <TitleContainer onClick={() => history.push(`${match.path}/${title}`)}>
          {title.toUpperCase()}
        </TitleContainer>
      <PreviewCollections>
        {
          
          Object.values(collections).map(collection => {
            console.log(`${collection}`)
          
          return (
            <PreviewCollection onClick={() => history.push(`${match.path}/${title}/${collection['title']}`)} imageUrl={imageUrl}>
            <h2>{ collection['title'].toUpperCase()} </h2>

          </PreviewCollection>

           )
        })
        }
           </PreviewCollections>
      </CollectionPreviewContainer>
  )
}
  }

export default withRouter(CollectionPreview);
