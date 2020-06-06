export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS'
export const FETCH_COLLECTIONS_FAIL = 'FETCH_COLLECTIONS_FAIL'
export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START'

export const LOAD_PRODUCTS_START = 'LOAD_PRODUCTS_START'
export const LOAD_PRODUCTS_SUCCESS = 'LOAD_PRODUCTS_SUCCESS'
export const LOAD_PRODUCTS_FAIL = 'LOAD_PRODUCTS_FAIL'

export const FETCH_PRODUCT_BYID = 'FETCH_PRODUCT_BYID'
export const FETCH_PRODUCT_BYID_SUCCESS = 'FETCH_PRODUCT_BYID_SUCCESS'
export const FETCH_PRODUCT_BYID_FAIL = 'FETCH_PRODUCT_BYID_FAIL'



export const PAY_PRODUCT_FAIL = 'PAY_PRODUCT_FAIL'
export const VALID_PRODUCT = 'VALID_PRODUCT'
export const SHIP_PRODUCT = 'SHIP_PRODUCT'
export const SEARCH_CHANGE = 'SEARCH_CHANGE'

export const fetchCollectionsStart = () => {
    return {
        type: FETCH_COLLECTIONS_START,

    }
}
export const fetchCollectionSuccess = (collections) => {
    return {
        type: FETCH_COLLECTIONS_SUCCESS,
        payload: collections
    }
}
export const fetchCollectionsFail = (error) => {
    return {
        type: FETCH_COLLECTIONS_FAIL,
        payload: error

    }
}
export const loadProductsStart = () => {
    return {
        type: LOAD_PRODUCTS_START,
    }
}