import {
    
    SIGNIN_FAIL,SIGNIN_SUCCESS, EMAIL_SIGNIN_START,
    SIGNUP_FAIL, SIGNUP_SUCCESS,
     LOGOUT_SUCCESS,LOGOUT_FAIL, 
     SET_NULL_CURRENT_PROFIL,
     SET_CURRENT_PROFIL,
    ADD_TO_COLLECTION,
    UPDATE_PROFIL_SUCCESS,
    GET_COLLECTION,
    REMOVE_FROM_COLLECTION,
    GET_ALL_PROFILS,
    IS_AUTHENTICATED_FAIL,
    SET_NULL_ERROR,
    SET_CURRENT_USER,
    SET_NULL_CURRENT_USER
} from '../actions/profil'
    import { removeProductsFromProfil } from './reducersUtils'
    
    const initialState = {
        currentProfil: '',
        currentUser:'', 
        products: '',
        collection:'',
        role:'user',
        admin:false,
        authenticated:false,
        loading: false,
        error:null
       }

const profilReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PROFIL:
        return {
                ...state,
                currentProfil: action.payload,
                authenticated:true,
                loading: false,
                error:null    
            };
       
        case SIGNUP_SUCCESS:
        case SIGNIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                authenticated:true,
                currentUser:action.payload
            };
        case  UPDATE_PROFIL_SUCCESS:    
            return {
                ...state,
                loading: false,
                error: null,
                authenticated:true,
                currentProfil:action.payload
            };
        case SIGNUP_FAIL:
        case SIGNIN_FAIL:
        case LOGOUT_FAIL:
        case IS_AUTHENTICATED_FAIL:    
            return {
                ...state,
                loading: false,
                error: action.error,
                authenticated:false
            };
        case SET_NULL_ERROR:
            return {
            ...state,
            error:null
        }
        case SET_NULL_CURRENT_PROFIL:
            return {
                ...state,
                currentProfil: null,
                authenticated:false
            }
        
        case SET_NULL_CURRENT_USER:
            return {
                ...state,
                currentUser: null,
                authenticated:false
            }    
         case SET_CURRENT_USER:
             return{
                ...state,
                currentUser:action.payload,
                loading:false,
                error:null
         }       
        case GET_COLLECTION:
            return {
                ...state,
                collections:action.payload
            };
        case GET_ALL_PROFILS:
            return {
                ...state,
                profils:action.payload
            };
        case ADD_TO_COLLECTION:
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case REMOVE_FROM_COLLECTION:
            const products = removeProductsFromProfil(state.products, action.payload)
            return {
                ...state,
                products: [...products]
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                currentProfil:'',
                error: null,
                authenticated:false,
                products: '',
                collection:'',
                currentUser:''
            };
        default:
            return state;
            };
        }

export default profilReducer;