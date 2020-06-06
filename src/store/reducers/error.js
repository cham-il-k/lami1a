import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../updateObject';
import { ADD_ERROR, REMOVE_ERROR} from './../actions/error'
const initialState = {
    error: false,
    message:'' 
    };
    
const errorReducer = ( state = initialState, action) => {
    switch (action.type) {
        case ADD_ERROR:
            return {
                ...state,
                error: true, 
                message: action.message
            }
            
        case REMOVE_ERROR:
            return {
                ...state,
                error: false, 
                message: ''
            }
        default:
            return state
            
    }
}

export default errorReducer; 
