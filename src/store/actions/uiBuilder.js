import * as actioTypes from './actionTypes';


export const fetchHeader = (name) => {
    return {
        type:actionTypes.FETSH_HEADER,
    }
}

export const fetchProgram = () => {
    return {
        type:actionTypes.FETCH_PROGRAM,
          }
}

export const fetchTablet = () => {
    return {
        type:actionTypes.FETCH_TABLET,
           }
}
export const fetchCart = (name) => {
    return {
        type:actionTypes.FETCH_CART,
          }
}   
export const fetchContact = (name) => {
    return {
        type:actionTypes.FETCH_CONTACT,
           }
}