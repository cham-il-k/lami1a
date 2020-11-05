import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {withRouter} from 'react-router-dom'
import { toggleCartHidden } from '../../store/actions/cart';
import { selectCartItemsCount } from '../../store/selectors/cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styled';

const CartIcon = ({ toggleCartHidden, itemCount, history }) => (
  <CartContainer onClick={() => history.push('/profil')}>
    <ShoppingIcon>
      <FontAwesomeIcon className="shoppingIcon" icon={faShoppingCart} />
    </ShoppingIcon>
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default withRouter(connect(
  mapStateToProps,
)(CartIcon));
