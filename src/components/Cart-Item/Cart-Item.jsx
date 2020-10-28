import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './cart-item.styled';

const CartItem = ({ item, removeItem}) => {
  console.log({item})
  const { imageUrl, price, name, quantity } = item 
   return (
      <CartItemContainer>
        <CartItemImage src={`/assets${imageUrl}`} alt='item' />
        <ItemDetailsContainer>
          <span>{name}</span>
          <span>
            {quantity} x ${price}
          </span>
        </ItemDetailsContainer>
        <button onClick={() => removeItem(item)}>X</button>
      </CartItemContainer>
)
};

export default React.memo(CartItem);
