import Redux from 'redux';
import { AUTH_SUCCESS, AUTH_FAIL,AUTH_START,SET_CURRENT_USER,
    INIT_USER , VALID_USER , SIGNIN_USER ,SIGNIN_USER_SUCCESS,
     SIGNIN_USER_FAIL ,SIGNOUT_USER } from '../actions/user';


    const INITIAL_STATE = {
      currentUser: null
    };
    
    const userReducer = (state = INITIAL_STATE, action) => {
      switch (action.type) {
        case SET_CURRENT_USER:
          return {
            ...state,
            currentUser: action.payload
          };

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
    };
    
    export default userReducer;
     
