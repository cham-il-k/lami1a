import { apifetchSelections, apifetchCollections} from './../api'
import { apiShopProducts } from '../api/selections'



export const FETCH_SELECTIONS_START = 'FETCH_SELECTIONS_START'
export const FETCH_SELECTIONS_SUCCESS = 'FETCH_SELECTIONS_SUCCESS'
export const FETCH_SELECTIONS_FAIL = 'FETCH_SELECTIONS_FAIL'

export const FETCH_COLLECTIONS_START = 'FETCH_COLLECTIONS_START'
export const FETCH_COLLECTIONS_SUCCESS = 'FETCH_COLLECTIONS_SUCCESS'
export const FETCH_COLLECTIONS_FAIL = 'FETCH_COLLECTIONS_FAIL'

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL'

export const REMOVE_COLLECTION_START = 'REMOVE_COLLECTION_START'
export const REMOVE_COLLECTION_SUCCESS = 'REMOVE_COLLECTION_SUCCESS'
export const REMOVE_COLLECTION_FAIL = 'REMOVE_COLLECTION_FAIL'

export const REMOVE_PRODUCT_START = 'REMOVE_PRODUCT_START'
export const REMOVE_PRODUCT_SUCCESS = 'REMOVE_PRODUCT_SUCCESS'
export const REMOVE_PRODUCT_FAIL = 'REMOVE_PRODUCT_FAIL'

export const REMOVE_SELECTION_START = 'REMOVE_SELECTION_START'
export const REMOVE_SELECTION_SUCCESS = 'REMOVE_SELECTION_SUCCESS'
export const REMOVE_SELECTION_FAIL = 'REMOVE_SELECTION_FAIL'

export const ADD_COLLECTION_START = 'ADD_COLLECTION_START'
export const ADD_COLLECTION_SUCCESS = 'ADD_COLLECTION_SUCCESS'
export const ADD_COLLECTION_FAIL = 'ADD_COLLECTION_FAIL'

export const ADD_PRODUCT_START = 'ADD_PRODUCT_START'
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS'
export const ADD_PRODUCT_FAIL = 'ADD_PRODUCT_FAIL'

export const ADD_SELECTION_START = 'ADD_SELECTION_START'
export const ADD_SELECTION_SUCCESS = 'ADD_SELECTION_SUCCESS'
export const ADD_SELECTION_FAIL = 'ADD_SELECTION_FAIL'

export const fetchSelectionsStart =  () => ({type: FETCH_SELECTIONS_START})


export const fetchSelectionsSuccess =  (selections) => {
    return {
                type: FETCH_SELECTIONS_SUCCESS,
                payload:selections,
                errors: null
            }
    }
export const fetchSelectionsFail =  () => {
    return {
        type: FETCH_SELECTIONS_FAIL,
        errors: 'fetch selection FAil'
    }
}
export const fetchCollectionsSuccess = async () => {
        try {
            const collections = await apifetchCollections()
            return {
                type: FETCH_COLLECTIONS_SUCCESS,
                payload: collections,
                errors: null
            }
        } catch (err) {
            return {
                type: FETCH_COLLECTIONS_FAIL,
                payload: {},
                errors: err
            }
        }

    }

export const fetchCollectionsFail = async () => {
        return {
            type: FETCH_COLLECTIONS_FAIL,
            errors: 'Fetch FAil'
        }
    }
export const fetchProductsSuccess = async (products) => {
    try {
        return {
            type: FETCH_PRODUCTS_SUCCESS,
            payload: products,
            errors: null
        }
    } catch (err) {
        return {
            type: FETCH_PRODUCTS_FAIL,
            errors: err
        }
    }
}
export const fetchProductsStart = () => {
        return {
            type:FETCH_PRODUCTS_START
        }
}
export const fetchProductsFail = () => {
    return {
        type: FETCH_PRODUCTS_FAIL,
        errors: 'fetc products fail'
    }
}
export const addSelectionSuccess = (selection) => {
    return {
        type: ADD_SELECTION_SUCCESS,
        payload: selection
    }
}
export const addSelectionFail = () => {
    return {
        type: ADD_SELECTION_FAIL,
        error: 'cant add selection'
    }
}

export const addCollectionSuccess = (collection) => {
    return {
        type: ADD_COLLECTION_SUCCESS,
        payload: collection

    }
}
export const addCollectionFail = () => {
    return {
        type: ADD_COLLECTION_FAIL,
        error: 'add collection Fail'
   }
}

//ADD PRODUCT 
export const addProductSuccess = (product) => {
    return {
        type: ADD_PRODUCT_SUCCESS,
        payload: product

    }
}
export const addProductStart =({uid,product}) => {
    console.log({productToAdd:product})
    return {
        type:ADD_PRODUCT_START,
        payload:{uid,product}
    }
}
export const addProductFail = () => {
    return {
        type: ADD_PRODUCT_FAIL,
        error: 'add product Fail'
   }
}


export const removeProductSuccess = (product) => {
    return {
        type: REMOVE_PRODUCT_SUCCESS,
        payload: product

    }
}
export const removeProductFail = () => {
    return {
        type: REMOVE_PRODUCT_FAIL,
        error: 'remove product Fail'
   }
}



export const removeCollectionSuccess = (collection) => {
    return {
        type: REMOVE_COLLECTION_SUCCESS,
        payload: collection

    }
}
export const removeCollectionFail = () => {
    return {
        type: REMOVE_COLLECTION_FAIL,
        error: 'add collection Fail'
   }
}

export const removeSelectionSuccess = (selection) => {
    return {
        type: REMOVE_SELECTION_SUCCESS,
        payload: selection

    }
}
export const removeSelectionFail = () => {
    return {
        type: REMOVE_SELECTION_FAIL,
        error: 'add collection Fail'
   }
}