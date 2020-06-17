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

const ProductItem = ({product , addProduct, match,location }) => {
  const { name, price, imageUrl } = product;
  console.log(match)
  return (
    <ProductItemContainer>
      <BackgroundImage className='image' imageUrl={`/assets${imageUrl}`} />
       <ProductFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </ProductFooterContainer>
      <AddButton onClick={() => addProduct(product)} inverted>
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