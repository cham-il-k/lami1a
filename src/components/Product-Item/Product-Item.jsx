import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions/cart';
import {compose} from 'redux'
import { withRouter} from 'react-router-dom'
import WithSpinner from './../With-Spinner/With-Spinner'
import {
  ProductItemContainer,
  ProductFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './product-item.styled';

const ProductItem = ({ addProduct, selection, collection, nameSlug, desc, price, id, imageUrl, name, edition,
             match,location }) => {
  
  console.log(match)
  return (
    <ProductItemContainer>
      <BackgroundImage className='image' imageUrl={`/assets${imageUrl}`} />
       <ProductFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      <div>description</div>
      <div>nameSlug</div>
      <div>selection</div>
      <div>collection</div>

      </ProductFooterContainer>
      <AddButton onClick={() => addProduct(nameSlug)} inverted>
        Add to cart
      </AddButton>
    </ProductItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(addItem(product))
});
const ProductItemCompose = compose(
  connect(null, mapDispatchToProps),
  withRouter,
  WithSpinner
)(ProductItem)
export default ProductItemCompose