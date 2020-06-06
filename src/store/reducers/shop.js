import { INITIAL_SHOP } from './shopData'
//import { ADD_PRODUCT, PAY_PRODUCT, PAY_PRODUCT_FAIL, VALID_PRODUCT ,SHIP_PRODUCT} from '../actions/shop';
import { FETCH_COLLECTIONS_SUCCESS,  FETCH_COLLECTIONS_FAIL } from './../actions/shop'
const initialState = {
        shop: {},
        collections:[],
        products:[],
        loading: false,
        error: null
    };
    

const shopReducer = ( state = initialState, action) => {
    switch (action.type) {
        
        case FETCH_COLLECTIONS_SUCCESS:
            return { 
                ...state,
                collections:action.payload,
                loading:false
                };
        
        case FETCH_COLLECTIONS_FAIL:
            return { 
                ...state,
                shop:{},
            loading:false,
            error:action.payload                
            };
                
  /*       case ADD_PRODUCT:
            return { 
                ...state,
                    products: [...state, action.payload]
                };
        
        case PAY_PRODUCT:
            return { 
            PRODUCTs: [...state,action.payload]
        };

        case VALID_PRODUCT:    
        return { 
            PRODUCTs: [...state,action.payload]
        };
        case SHIP_PRODUCT:
            return { 
                PRODUCTs: [...state,action.payload]
            };
   */      default:
            return state ;       
    }
}

export default shopReducer; 
