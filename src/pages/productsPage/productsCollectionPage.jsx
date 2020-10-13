import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect'
import WithSpinner from '../../components/With-Spinner/With-Spinner'
import {compose} from 'redux'
import ProductItemCompose from '../../components/Product-Item/Product-Item';
import { selectCollectionCategory } from '../../store/selectors/selection';
import {
  ProductsPageContainer,
  ProductsTitle,
  ProductsItemsContainer
} from './products-styled';

const ProductsPage = ({ products, category,match, history }) => {
  
   const productsAffichable = category['items'].map((prod,i) => {
    // const {selection, collection, nameSlug, desc, price, id, imageUrl, name, edition} = prod
     console.log({prod})
     return (
        <ProductItemCompose key={i} product={prod} />)
    })
  
return (
  <ProductsPageContainer id="ProductsPageContainer">
    <ProductsItemsContainer id="ProductsItemsContainer">
       {productsAffichable}
    </ProductsItemsContainer>
     </ProductsPageContainer>);
}
const mapStateToProps =  (state, ownProps) => createStructuredSelector({
  //product : selectProducts(ownProps.match.params.productSlug),
  category : selectCollectionCategory(ownProps.match.params.selectionId, ownProps.match.params.collectionId)
}) 

const ProductsCollectionPage = compose(
  connect(mapStateToProps),
  WithSpinner)(ProductsPage)

  export default ProductsCollectionPage;

