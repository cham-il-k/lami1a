
export const ADD_CATEGORY = 'ADD_CATEGORY'
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY'
export const SEARCH_CATEGORY = 'SEARCH_CATEGORY'

export const addGift = (cart) => {
    return {
        type:ADD_CATEGORY,
        payload: {
            cart
            }
    }
}
export const removeCategory = ( id ) => {
    return {
        type:REMOVE_CATEGORY,
        payload: id
    }
}
export const searchCategory = ( category ) => {
    return {
        type: SEARCH_CATEGORY,
        payload: category
    }
}