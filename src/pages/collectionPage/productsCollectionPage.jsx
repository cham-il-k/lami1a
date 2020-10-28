import React, {Component} from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect'
import Spinner from './../../components/Spinner/Spinner'
import {compose} from 'redux'
import ProductItemCompose from '../../components/Product-Item/Product-Item';
import { selectCollectionCategory } from '../../store/selectors/selection';
import {ProductsPageContainer, ContentTitle} from './products-styled';

const ProductsPage = ({ products, category,match, history }) => {
console.log({category})
   const productsAffichable = category['items'].map((prod,i) => {
     return (
        <ProductItemCompose key={i} product={prod} />)
    })
  
return (
  <ProductsPageContainer id="ProductsPageContainer">
       <ContentTitle > {category['title'] }</ContentTitle> 
       {productsAffichable}
  </ProductsPageContainer>);
}
const mapStateToProps =  (state, ownProps) => createStructuredSelector({
  //product : selectProducts(ownProps.match.params.productSlug),
  category : selectCollectionCategory(ownProps.match.params.selectionId, ownProps.match.params.collectionId)
}) 

const ProductsCollectionPage = compose(
  connect(mapStateToProps))(ProductsPage)

  export default ProductsCollectionPage;

