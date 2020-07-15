import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect'
import WithSpinner from './../../components/With-Spinner/With-Spinner'
import {compose} from 'redux'
import CollectionItem from '../../components/Collection-Item/Collection-Item';
import moduleName from 'module'
import { selectProductsCollection } from '../../store/selectors/selection';
import { fetchProducts  } from './../../store/actions/selection'
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styled';
import slug from 'slug'
const CollectionPage = ({ products ,match, history }) => {
let collection = []  
const items = (collection) => {
  return collection['items'].map(item => {
        return <CollectionItem key={item['id']} urlName={slug(item["name"])} collection={item} />
  })
}
products.forEach((col, index) => {
 collection.push(<>
        <CollectionTitle key={index}>{` ${col['selection']} / ${col['collection']}` }</CollectionTitle>
                <CollectionItemsContainer>
                  {items(col)}
                </CollectionItemsContainer>
          </>)
  })
return (
  <CollectionPageContainer>
    {collection}
  </CollectionPageContainer>
);
};
  

const mapStateToProps =  (state, ownProps) => createStructuredSelector({
    products : selectProductsCollection(ownProps.match.params.selectionId)
 })   
const CollectionPageContain = compose(
  connect(mapStateToProps),
  )(CollectionPage)

  export default CollectionPageContain;
