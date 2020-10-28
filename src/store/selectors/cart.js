import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems 
);
 
export const selectCartHidden = createSelector(
  [selectCart],
  cart =>  cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>{
    console.log({cartItems})
    if (!!cartItems){ 
    return cartItems.reduce(
          (accumalatedQuantity, cartItem) =>
            accumalatedQuantity + cartItem.quantity,
          0
    )}
    else return 0
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>{
    if(!!cartItems){
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )}
    else return 0
  }
);
