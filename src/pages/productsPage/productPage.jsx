import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect'
import WithSpinner from '../../components/With-Spinner/With-Spinner'
import {compose} from 'redux'
import ProductItemCompose from '../../components/Product-Item/Product-Item';
import { selectProduct } from '../../store/selectors/selection';
import {
  ProductsPageContainer,
  ProductsTitle,
  ProductsItemsContainer
} from './products-styled';

const ProductsPage = ({ products ,match, history }) => {

  return (
  <ProductsPageContainer>
  <ProductsTitle> title</ProductsTitle>
  <ProductsItemsContainer>
             
             products item
    </ProductsItemsContainer>
  
  </ProductsPageContainer>
);
};
  

const mapStateToProps =  (state, ownProps) => createStructuredSelector({
    product : selectProduct(ownProps.match.params.productSlug)
 }) 
const ProductsPageContain = compose(
  connect(mapStateToProps),
  WithSpinner)(ProductsPage)

  export default ProductsPageContain;
