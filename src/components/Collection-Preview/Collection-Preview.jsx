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
    const {collections,location , imageUrl, title, id, routeName, history, match, linkUrl } = this.props
    console.log({collections, location , imageUrl, title, id, routeName, history, match, linkUrl}) 
    return (
      <CollectionPreviewContainer>
          <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
          {title.toUpperCase()}
        </TitleContainer>
      <PreviewCollections>
        {
        Object.entries(collections).map(collection => {
        console.log(`${collection[0]}: ${collection[1]['items']}`)

        console.log(`./assets${collection[1]['imageUrl']}`)
        return (
        <PreviewCollection onClick={()=>
          history.push(`${collection[1]['linkUrl']}`)}
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
  }

export default withRouter(CollectionPreview);
