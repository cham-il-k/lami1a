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
  let productCollection = []
    let productCo  =  products.map(prod => {
      prod.map((col) => {
         col.map(prod => {
          productCollection.push(prod)
          return prod
        })
    })
  })
   const productsAffichable = productCollection.map(prod => {
     const {selection, collection, nameSlug, desc, price, id, imageUrl, name, edition} = prod
     return (
        <ProductItemCompose key={id} product={prod} />)
    })
  
return (
  <ProductsPageContainer id="ProductsPageContainer">
    <ProductsItemsContainer id="ProductsItemsContainer">
       {productsAffichable}
    </ProductsItemsContainer>
     </ProductsPageContainer>);
}

const mapStateToProps =  createStructuredSelector({
    products : selectProducts
 }) 
const ProductsPageContain = compose(
  connect(mapStateToProps),
  WithSpinner)(ProductsPage)

  export default ProductsPageContain;
