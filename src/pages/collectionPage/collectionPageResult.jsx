import React, {useState, useEffect} from 'react';
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

const CollectionPageResult = ({ products ,match, history, ...otherProps }) => {
 
  const {searchTerm} = otherProps
let collection = []  
products.forEach((product,i) => {
  console.log({product})
  collection.push(
  <>
    <CollectionTitle>{` ${searchTerm}` }</CollectionTitle>
        <CollectionItemsContainer>
          { 
          <CollectionItem key={product['id']} product={product} />
          }
        </CollectionItemsContainer> 
  </>)
})

return (
  <CollectionPageContainer>
    {collection}
  </CollectionPageContainer>
);
};
const CollectionPageResultContain = compose(
  WithSpinner)(CollectionPageResult)

export default CollectionPageResultContain;
