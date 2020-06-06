import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../store/actions/cart';
import { selectCartItemsCount } from '../../store/selectors/cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styled';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon>
      <FontAwesomeIcon className="shoppingIcon" icon={faShoppingCart} />
    </ShoppingIcon>
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
  toggleCartHidden: toggleCartHidden
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
