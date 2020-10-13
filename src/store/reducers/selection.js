import {
    FETCH_SELECTIONS_SUCCESS,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_PRODUCTS_SUCCESS,
    //TODO
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    
    REMOVE_PRODUCT_SUCCESS,
    REMOVE_PRODUCT_FAIL,
    REMOVE_COLLECTION_SUCCESS,
    ADD_COLLECTION_SUCCESS,

} from './../actions/selection'
const initialState = {
        selections:{},
        collections:{},
        collectionsTitle:'',
        items:{},
        error: '',
        loading: false
    };
    
const selectionReducer = ( state = initialState , action) => {
    switch (action.type) {
        case FETCH_SELECTIONS_SUCCESS:
           // console.log(action.payload)
            return {
                ...state,
                selections: action.payload,
                loading:false
            };
            
        case FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: action.payload,
                loading:false

            };
            
        case FETCH_PRODUCTS_SUCCESS:
        console.log({items:  action.payload})   
        return {
                ...state,
                items:  action.payload,
                loading:false
            };
        

        case ADD_COLLECTION_SUCCESS:
            
            return {
                ...state,
                 collections: {...state.collections, action}
            };
        
        case ADD_PRODUCT_SUCCESS:
            const product = action.payload
        return {
                ...state,
                items: {...state.items, product }
            };
        
        case ADD_PRODUCT_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case REMOVE_PRODUCT_SUCCESS:
            return {
                ...state,
                products:action.payload
            };
        
        case REMOVE_PRODUCT_FAIL:
            return {
                ...state,
                error: action.payload
            };        
        case REMOVE_COLLECTION_SUCCESS:
            return {
                ...state,
                collections: action.payload
            };
        
        default:
            return state ;       
    
    }
}

export default selectionReducer; 
