import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../store/actions/cart';
import {compose} from 'redux'
import { withRouter} from 'react-router-dom'
import slug from 'slug'
import Spinner from './../Spinner/Spinner'
import Modal from '../Product-Modal/ProductModal'
import {
  ProductItemContainer,
  ProductFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from './product-item.styled';
import ProductModal from '../Product-Modal/ProductModal';

const ProductItem = ({ addProduct, product}) => {
  const {desc, price, id, imageUrl, name, edition} = product
//  console.log({desc, price, id, imageUrl, name, edition })     
  const nameSlug = slug(name)
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    //console.log(isOpen)
    
  }, [isOpen])
  return (
    <ProductItemContainer >
      <BackgroundImage  imageUrl={`/assets${imageUrl}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <ProductModal isOpen={isOpen} product={product} onCancel={() => setIsOpen(!isOpen)} />: ''}
      </BackgroundImage>
       <ProductFooterContainer>
        <NameContainer >{name}</NameContainer>
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
)(ProductItem)
export default ProductItemCompose