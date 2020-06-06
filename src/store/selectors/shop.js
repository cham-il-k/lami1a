import { createSelector } from 'reselect';

const selectShop = state => state.shop;


export const selectShopShop = createSelector(
    [selectShop],
    shop => shop.shop
)
export const selectShopCollections = createSelector(
  [selectShopShop],
  shop => {
    const collections = Object.entries(shop)
    return collections
})



export const selectShopProducts = collectionParam => createSelector(
  [selectShopShop],
  shop =>  shop[collectionParam]
  )