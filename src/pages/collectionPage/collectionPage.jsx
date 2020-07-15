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
console.log(products)
const items = (collection) => {
  return collection['items'].map(item => {
    console.log(item)
        return <CollectionItem key={item['id']} urlName={slug(item["name"])} product={item} />
  })
}
products.forEach(col => {
 collection.push(<>
        <CollectionTitle>{` ${col['selection']} / ${col['collection']}` }</CollectionTitle>
                <CollectionItemsContainer id="CollectionItemsContainer">
                  {items(col)}
                </CollectionItemsContainer>
          </>)
  })
return (
  <CollectionPageContainer id="CollectionPageContainer">
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
