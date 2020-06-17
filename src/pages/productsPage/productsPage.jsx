import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect'
import WithSpinner from '../../components/With-Spinner/With-Spinner'
import {compose} from 'redux'
import ProductItemCompose from '../../components/Product-Item/Product-Item';
import { selectProducts } from '../../store/selectors/selection';
import {
  ProductsPageContainer,
  ProductsTitle,
  ProductsItemsContainer
} from './products-styled';

const ProductsPage = ({ products ,match, history }) => {
let col, sel =''
  let productsCollection =  products.map(prod => {
  
  const {selection, collection, product} = prod
  col= collection
  sel= selection
  const {id} = product
  return (<ProductItemCompose key={id} product={product} />)
  })
return (
  <ProductsPageContainer>
  <ProductsTitle>{`${col}/${sel}` }</ProductsTitle>
  <ProductsItemsContainer>
             
    {productsCollection}
    </ProductsItemsContainer>
  
  </ProductsPageContainer>
);
};
  

const mapStateToProps =  (state, ownProps) => createStructuredSelector({
    products : selectProducts(ownProps.match.params.collectionId)
 }) 
const ProductsPageContain = compose(
  connect(mapStateToProps),
  WithSpinner)(ProductsPage)

  export default ProductsPageContain;
