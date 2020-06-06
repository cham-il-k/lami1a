import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions/cart';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './product-item.styled';

const ProductItem = ({ product , addProduct }) => {
  const { name, price, imageUrl } = product;

  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
       <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addProduct(product)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(addItem(product))
});

export default connect(
  null,
  mapDispatchToProps
)(ProductItem);
