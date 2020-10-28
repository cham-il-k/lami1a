/**
 * /shop/collection
 * /shop/products
 * /shop/books
 */
import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect'
import WithSpinner from './../../components/With-Spinner/With-Spinner'
import {compose} from 'redux'
import CollectionItem from '../../components/Collection-Item/Collection-Item';
import ProductItemComp from './../../components/Product-Item/Product-Item'
import moduleName from 'module'
import { selectSelectionCollections,} from '../../store/selectors/selection';
import { fetchProducts  } from './../../store/actions/selection'
import {
  TitleContainer,
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styled';
import slug from 'slug'
import ProductItemCompose from '../../components/Product-Item/Product-Item';
const CollectionPage = ({ collections ,match, history }) => {
let collection = []  
const items = (collection) => {
  return collection['items'].map(item => {
//    console.log(item)
        return <ProductItemComp key={item['id']} urlName={slug(item["name"])} product={item} />
  })
}

collections.forEach(col => {
//  console.log({collections, from:'collectionPage'})
 collection.push(
   <>
                <TitleContainer onClick={() => history.push(`${col['selection']}/${col['title']}`)}>
                  {`${col['selection']}/${col['title']}`.toUpperCase()}
                </TitleContainer>
                <CollectionItemsContainer key={col['id']} id="CollectionItemsContainer">
                  {items(col)}
                </CollectionItemsContainer>
                </>
)
  })
return (
  <CollectionPageContainer id="CollectionPageContainer">
    {collection}
  </CollectionPageContainer>
);
};
  

const mapStateToProps =  (state, ownProps) => createStructuredSelector({
    collections : selectSelectionCollections(ownProps.match.params.selectionId),
//    products : selectCollectionItems(ownProps.match.params.collectionId)
  })   
const CollectionPageContain = compose(
  connect(mapStateToProps),
  )(CollectionPage)

  export default CollectionPageContain;
