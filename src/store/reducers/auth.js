import Redux from 'redux';
import { AUTH_SUCCESS, AUTH_FAIL,AUTH_START} from '../actions/actionTypes';
import {addUser, signUser, loginUser} from '../actions/index';

 
const authReducer = (state=null , action) => {

    switch(action.type) {

        case AUTH_START: 
            return {
                ...state,
                path:"/auth",
                authenticated: false,
                
            };
        
        case AUTH_SUCCESS:
            return {
                ...state,
                authenticated: true
            };
              
        case AUTH_FAIL:
            return {
                ...state,
                authenticated: false
                }
        default:
            return state;
    
    }
}
export default authReducer;