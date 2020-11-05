import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CartItem from '../Cart-Item/Cart-Item';
import { selectCartItems } from '../../store/selectors/cart';
import { toggleCartHidden, removeItem } from '../../store/actions/cart';

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './cart.dropdown.styled';

const CartDropdown = ({ cartItems, history, dispatch, onRemoveItem, onToggleCartHidden }) => {
  //console.log({cartItems})
  return (
        <CartDropdownContainer>
          <CartItemsContainer>
              {
              cartItems.length ? (
              cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} removeItem={onRemoveItem} />
              ))
            ) : (
              <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            )}
          </CartItemsContainer>
          <CartDropdownButton
            onClick={() => {
              history.push('/checkout');
              onToggleCartHidden()
            }}>
            GO TO CHECKOUT
          </CartDropdownButton>
        </CartDropdownContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = (dispatch) => ({
  onRemoveItem: (item) => dispatch(removeItem(item)),
  onToggleCartHidden : () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
