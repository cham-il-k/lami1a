import React, {Component} from 'react';
import Modal from 'react-modal'
import {
  ProductsPageContainer,ContentTitle
  
} from '../../pages/productsPage/products-styled';

const ProductModal = ({ product , onCancel, isOpen, match,  history }) => {
console.log({product})
  return (
    <Modal isOpen={isOpen} onRequestClose={onCancel}>
        <ProductsPageContainer>
        <ContentTitle> {product['name']}</ContentTitle>
        <div>{product['desc']}
          </div>
  <span>Edition : { product['edition']}</span>
        <button onClick={onCancel}>X</button>
        </ProductsPageContainer>
  </Modal>
);
};
  

  export default ProductModal;
