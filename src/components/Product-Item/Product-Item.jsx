import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions/cart';
import {compose} from 'redux'
import { withRouter} from 'react-router-dom'
import slug from 'slug'
import WithSpinner from './../With-Spinner/With-Spinner'
import {
  ProductItemContainer,
  ProductFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './product-item.styled';

const ProductItem = ({ addProduct, product}) => {
  const {desc, price, id, imageUrl, name, edition} = product
  console.log({desc, price, id, imageUrl, name, edition })     
  const nameSlug = slug(name)
  return (
    <ProductItemContainer>
      <BackgroundImage  imageUrl={`/assets${imageUrl}`} />
       <ProductFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      <div>{desc}</div>

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
)(ProductItem)
export default ProductItemCompose